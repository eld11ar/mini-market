import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { TanstackProvider } from "@/shared/providers/TanstackProvider";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { BaseLayout } from "@/widgets/Layout";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Market",
  description: "Mini marketplace based on Fake Store API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <TanstackProvider>
          <TooltipProvider>
            <BaseLayout>{children}</BaseLayout>
          </TooltipProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
