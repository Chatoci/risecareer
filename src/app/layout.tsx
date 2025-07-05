import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai, Noto_Sans_Lao_Looped } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const laoLooped = Noto_Sans_Lao_Looped({
  subsets: ["lao"],
  variable: "--font-lao-looped",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rise Career",
  description: "Rise Career คือแพลตฟอร์มสมัครงานออนไลน์ที่ช่วยให้คุณค้นหาอาชีพในฝันได้อย่างง่ายดาย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${laoLooped.variable} font-lao`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoThai.variable} ${laoLooped.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-noto-thai), var(--font-lao-looped), var(--font-geist-sans), var(--font-geist-mono), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
