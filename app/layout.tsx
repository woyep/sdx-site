import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "@/components/NavLink";
import Link from "next/link"; // 新增：让“圣德信”点回首页
import QuoteDialog from "@/components/QuoteDialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "圣德信企业官网",
  description: "风电提升机 / 海上平台吊机 / KBK 轻型起重系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 全局导航 */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-4 flex items-center h-16">
            <div className="flex-1">
              <Link href="/" className="text-xl font-bold tracking-tight">
                圣德信LOGO
              </Link>
            </div>

            <nav
              className="flex gap-6 text-sm h-16 flex-1 items-center"
              aria-label="主导航"
            >
              <NavLink href="/products">首页</NavLink>
              <NavLink href="/products">产品中心</NavLink>
              <NavLink href="/about">关于我们</NavLink>
              <NavLink href="/contact">联系我们</NavLink>
            </nav>
            <div className="flex items-center">
              <QuoteDialog />
            </div>
          </div>
        </header>

        {/* 页面主体 */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* 全局页脚 */}
        <footer className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} 圣德信轻型起重设备有限公司
          </div>
        </footer>
      </body>
    </html>
  );
}
