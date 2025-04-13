import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podspace - Book Your Podcast Studio",
  description: "High-quality podcast production studio booking platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-background antialiased"
      )}>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
