import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Website",
  description:
    "Construction, Engineering, Architectural Design, Plumbing, Electrical, Furniture, Upholstery and Industrial Cleaning Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}