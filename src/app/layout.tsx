import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GA_ID } from "@/lib/gtag";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://els-solutions.co.jp"),
  title: {
    default: "ELSソリューションズ | ESG・省エネ製品",
    template: "%s | ELSソリューションズ",
  },
  description:
    "RECO PALLET・CONTINEWM・CM Fiber Cassetteで企業のESG経営とCO₂削減を支援。工事不要の省エネソリューション。導入実績8,000箇所以上。",
  keywords: [
    "ESG",
    "サステナビリティ",
    "RECO PALLET",
    "CONTINEWM",
    "CM Fiber Cassette",
    "環境配慮",
    "省エネ",
    "バイオマスパレット",
    "ELSソリューションズ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://els-solutions.co.jp",
    siteName: "ELSソリューションズ株式会社",
    title: "ELSソリューションズ | ESG・省エネ製品",
    description: "RECO PALLET・CONTINEWM・CM Fiber Cassetteで企業のESG経営とCO₂削減を支援。工事不要の省エネソリューション。",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELSソリューションズ | ESG・省エネ製品",
    description: "RECO PALLET・CONTINEWM・CM Fiber Cassetteで企業のESG経営とCO₂削減を支援。工事不要の省エネソリューション。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      <meta name="google-site-verification" content="DgRwXpQTdu6otuRXga_8YrVFGvHs_sqCYWsQCfLVBCc" />
      </head>
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
