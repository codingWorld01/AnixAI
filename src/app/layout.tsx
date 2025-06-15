import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Chatbot from "@/components/Chatbot/Chatbot";
import GoToTop from "@/components/home/go-to-top";

export const metadata: Metadata = {
  title: "anixai | Generative AI Company Driving Innovation and Efficiency",
  description:
    "anixai is a Generative AI company offering innovative solutions to enhance efficiency & productivity with cutting-edge generative AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Chatbot />
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}