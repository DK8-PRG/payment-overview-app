import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "./_components/layout/Header";

export const metadata: Metadata = {
  title: {
    template: "%s - Payment Dashboard",
    default: "Payment Dashboard",
  },
  description:
    "A comprehensive dashboard for managing and reviewing your payment transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <div className="flex-1 px-4 py-6 sm:px-8 sm:py-12">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
