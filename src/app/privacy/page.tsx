import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜ELSソリューションズ株式会社",
  description: "ELSソリューションズ株式会社のプライバシーポリシー。個人情報の取扱い・Cookie使用に関するポリシーを定めています。",
};

const sections = [
  {
    title: "1. 個人情報の取得",
    content:
      "当社は、お問い合わせフォームのご利用時に、氏名・会社名・メールアドレス・電話番号・お問い合わせ内容等の個人情報を取得します。",
  },
  {
    title: "2. 利用目的",
    content:
      "取得した個人情報は、お問い合わせへの回答、資料の送付、およびサービスのご提案のみを目的として使用します。上記目的以外には使用いたしません。",
  },
  {
    title: "3. 第三者への提供",
    content:
      "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "4. Cookieの使用",
    content:
      "当サイトでは、Google Analytics 4（測定ID：G-T11Z1PCF61）によるアクセス解析のためにCookieを使用しています。Cookieによって収集される情報は匿名であり、個人を特定するものではありません。Cookieの使用はブラウザの設定から無効化することができます。Google Analyticsのデータの取扱いについては、Googleのプライバシーポリシーをご参照ください。",
  },
  {
    title: "5. 安全管理措置",
    content:
      "当社は、個人情報の漏洩・紛失・改ざんを防止するため、適切な安全管理措置を講じます。個人情報を取り扱う従業者に対しても、必要かつ適切な監督を行います。",
  },
  {
    title: "6. 開示・訂正・削除",
    content:
      "ご本人からの個人情報の開示・訂正・削除のご請求に対しては、合理的な期間内に対応いたします。ご請求の際は下記お問い合わせ先までご連絡ください。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    content:
      "当社は、法令の改正や事業内容の変更に応じて、本ポリシーを予告なく変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を生じるものとします。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-background" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              プライバシーポリシー
            </h1>
            <p className="text-muted-foreground mt-4 text-sm">制定日：2026年4月2日</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12 text-base border-l-4 border-primary/30 pl-5">
              ELSソリューションズ株式会社（以下「当社」）は、お客様の個人情報の重要性を認識し、
              個人情報の保護に関する法律（個人情報保護法）を遵守するとともに、
              以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-lg font-bold text-foreground mb-3 pb-2 border-b border-border/50">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* お問い合わせ先 */}
              <div>
                <h2 className="text-lg font-bold text-foreground mb-3 pb-2 border-b border-border/50">
                  8. お問い合わせ先
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 text-sm space-y-2">
                  <p className="font-semibold text-foreground">ELSソリューションズ株式会社</p>
                  <p className="text-muted-foreground">代表取締役：中澤俊輔</p>
                  <p className="text-muted-foreground">〒279-0023 千葉県浦安市高洲4-3-1-1527</p>
                  <p className="text-muted-foreground">
                    E-mail：{" "}
                    <a
                      href="mailto:info@els-solutions.co.jp"
                      className="text-primary hover:underline"
                    >
                      info@els-solutions.co.jp
                    </a>
                  </p>
                  <p className="text-muted-foreground">TEL：047-301-9376</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} ELSソリューションズ株式会社. All rights reserved.
              </p>
              <Link
                href="/"
                className="text-sm text-primary hover:underline no-underline"
              >
                ← トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
