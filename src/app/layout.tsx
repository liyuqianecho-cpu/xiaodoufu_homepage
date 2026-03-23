import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小豆腐的个人主页",
  description: "银虎斑加白高地长毛猫，老大的数字伙伴",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
