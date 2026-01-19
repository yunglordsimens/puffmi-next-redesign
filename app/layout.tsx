import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner"; // Импорт уведомлений
import AgeGate from "@/components/AgeGate"; // Импорт проверки возраста
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puffmi Czech Republic",
  description: "Official Distributor of Puffmi in CZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1. Проверка возраста (Черный экран) */}
        <AgeGate />
        
        {/* 2. Тостер (Всплывающие уведомления внизу) */}
        <Toaster position="bottom-center" richColors />
        
        {/* 3. Весь остальной сайт */}
        {children}
      </body>
    </html>
  );
}