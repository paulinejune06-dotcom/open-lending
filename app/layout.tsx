import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Mortgage - Your Trusted Mortgage Partner",
  description: "Open Mortgage provides structured lending advice, lender matching, and end-to-end support from assessment to settlement.",
  keywords: "mortgage, home loan, car loan, commercial loan, financial services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
