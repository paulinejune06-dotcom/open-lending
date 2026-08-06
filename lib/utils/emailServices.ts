type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function sendEmail({
  to,
  subject,
  html,
}: SendEmailOptions) {
  const tenantId = getRequiredEnv("MICROSOFT_TENANT_ID");
  const clientId = getRequiredEnv("MICROSOFT_CLIENT_ID");
  const clientSecret = getRequiredEnv("MICROSOFT_CLIENT_SECRET");
  const senderEmail = getRequiredEnv("MICROSOFT_SENDER_EMAIL");

  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
      cache: "no-store",
    },
  );

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData.access_token) {
    throw new Error(
      tokenData.error_description ||
        "Unable to get Microsoft access token",
    );
  }

  const sendResponse = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      senderEmail,
    )}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject,
          body: {
            contentType: "HTML",
            content: html,
          },
          toRecipients: [
            {
              emailAddress: {
                address: to,
              },
            },
          ],
        },
        saveToSentItems: true,
      }),
      cache: "no-store",
    },
  );

  if (!sendResponse.ok) {
    const errorMessage = await sendResponse.text();

    throw new Error(
      `Microsoft Graph sendMail failed: ${sendResponse.status} ${errorMessage}`,
    );
  }
}