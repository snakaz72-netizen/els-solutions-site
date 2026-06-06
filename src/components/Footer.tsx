import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">ELS Solutions</h3>
            <p className="text-sm text-background/60 tracking-widest uppercase mb-6">
              ESG &amp; Sustainability
            </p>
            <p className="text-sm text-background/70 leading-relaxed">
              ESGやサスティナビリティに貢献するソリューションを通じて、持続可能な社会の実現に取り組んでいます。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background/80">
              ナビゲーション
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-background/60 hover:text-background transition-colors no-underline">
                ホーム
              </Link>
              <Link href="/products/recopallet" className="text-sm text-background/60 hover:text-background transition-colors no-underline">
                RECOPALLET
              </Link>
              <Link href="/products/continewm" className="text-sm text-background/60 hover:text-background transition-colors no-underline">
                CONTINEWM
              </Link>
              <Link href="/about" className="text-sm text-background/60 hover:text-background transition-colors no-underline">
                会社概要
              </Link>
              <Link href="/contact" className="text-sm text-background/60 hover:text-background transition-colors no-underline">
                お問い合わせ
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background/80">
              お問い合わせ先
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-background/50 shrink-0" />
                <span className="text-sm text-background/70">
                  〒279-0023<br />千葉県浦安市高洲4-3-1-1527
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/50 shrink-0" />
                <span className="text-sm text-background/70">(047) 301-9376</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/50 shrink-0" />
                <a href="mailto:info@els-solutions.co.jp" className="text-sm text-background/70 hover:text-background transition-colors no-underline">
                  info@els-solutions.co.jp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} ELSソリューションズ株式会社. All rights reserved.
          </p>
          <Link href="/privacy" className="text-xs text-background/40 hover:text-background/70 transition-colors no-underline">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
