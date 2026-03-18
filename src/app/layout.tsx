import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ELSソリューションズ株式会社 | ESG & Sustainability Solutions",
    template: "%s | ELSソリューションズ株式会社",
  },
  description:
    "ELSソリューションズは、環境・社会・ガバナンスに配慮した革新的な製品（RECOPALLET・CONTINEWM）を通じて、企業のESG経営とサスティナビリティの実現を支援します。",
  keywords: [
    "ESG",
    "サステナビリティ",
    "RECOPALLET",
    "CONTINEWM",
    "環境配慮",
    "省エネ",
    "パレット",
    "ELSソリューションズ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
