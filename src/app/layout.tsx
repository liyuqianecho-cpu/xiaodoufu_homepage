import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dogeSans = localFont({
  src: [
    { path: "../../public/fonts/DogeSans-Normal.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/DogeSans-Italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-asset-english",
  display: "swap",
});

const yangZhuShi = localFont({
  src: [
    { path: "../../public/fonts/YangRenDong-ZhuShi-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/YangRenDong-ZhuShi-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/YangRenDong-ZhuShi-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-asset-display",
  display: "swap",
});

const kangKang = localFont({
  src: [{ path: "../../public/fonts/KangKangTi.ttf", weight: "400", style: "normal" }],
  variable: "--font-asset-note",
  display: "swap",
});

const muYaoSoft = localFont({
  src: [{ path: "../../public/fonts/MuYao-SoftBrush.ttf", weight: "400", style: "normal" }],
  variable: "--font-asset-note-soft",
  display: "swap",
});

const muYaoFree = localFont({
  src: [{ path: "../../public/fonts/MuYao-Freehand.ttf", weight: "400", style: "normal" }],
  variable: "--font-asset-hand",
  display: "swap",
});

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
    <html
      lang="zh-CN"
      className={`h-full antialiased ${dogeSans.variable} ${yangZhuShi.variable} ${kangKang.variable} ${muYaoSoft.variable} ${muYaoFree.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
