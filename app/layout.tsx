import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const RobotoFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoFont.className} antialiased`}>{children}</body>
    </html>
  );
}
