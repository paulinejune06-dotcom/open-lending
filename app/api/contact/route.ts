import { sendEmail } from "@/lib/utils/emailServices";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, loanType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendEmail({
      to: "info@openlendinggroup.com.au",
      subject: `New Enquiry from ${name} - ${loanType}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6;">
          <h2>New Contact Form Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || '-'}</p>
          <p><strong>Loan Type:</strong> ${loanType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}