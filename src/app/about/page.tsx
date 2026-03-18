import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Building2, Briefcase, Target, Heart } from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "会社概要",
  description: "ELSソリューションズ株式会社の企業情報。Environment（環境）がLife（生活・事業運営）に与える影響を踏まえ、Sustainability（持続可能性）につなげる実践的なソリューションを提供。",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">会社概要</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">持続可能な経営を日常の選択から</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              ELSソリューションズ株式会社は、Environment（環境）が企業活動や人々のLife（生活・事業運営）に与える影響を踏まえ、それらをSustainability（持続可能性）につなげるための実践的なソリューションを提供する企業です。
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mt-4">
              ESG・サステナブル経営を進める企業に対し、特別な意識改革や大規模な投資を前提とせず、日常的な調達や運用の選択を見直すことで、環境配慮と経済合理性を両立させるアプローチを重視しています。
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-white">
        <div className="container">
          <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Company Information</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">企業情報</h2>
          </MotionDiv>

          <MotionDiv className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="border border-border/50 shadow-lg overflow-hidden rounded-lg">
              <table className="w-full">
                <tbody>
                  {[
                    { Icon: Building2, label: "会社名", value: "ELSソリューションズ株式会社" },
                    { Icon: Briefcase, label: "事業内容", value: "Environment（環境）が企業活動や人々のLife（生活・事業運営）に与える影響を踏まえ、Sustainability（持続可能性）につなげる実践的なソリューションの提供" },
                    { Icon: MapPin, label: "所在地", value: "〒279-0023 千葉県浦安市高洲4-3-1-1527" },
                    { Icon: Phone, label: "電話番号", value: "(047) 301-9376" },
                    { Icon: Mail, label: "メールアドレス", value: "info@els-solutions.co.jp" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                      <td className="px-6 py-5 w-1/3">
                        <div className="flex items-center gap-3">
                          <row.Icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm font-medium text-foreground">{row.label}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-muted-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MotionDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="h-full border border-border/50 shadow-md rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">ミッション</h3>
                <p className="text-muted-foreground leading-relaxed">
                  環境に配慮した革新的なソリューションを提供し、企業のESG経営を支援することで、
                  持続可能な社会の実現に貢献します。私たちは、ビジネスの成長と環境保全の両立が
                  可能であることを、具体的な製品とサービスを通じて証明します。
                </p>
              </div>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="h-full border border-border/50 shadow-md rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">ビジョン</h3>
                <p className="text-muted-foreground leading-relaxed">
                  すべての企業が環境に配慮した選択を当たり前にできる社会を目指しています。
                  RECOPALLETによる森林保全とCONTINEWMによる省エネルギーを通じて、
                  次世代に豊かな地球環境を引き継ぐことが私たちの願いです。
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 bg-white">
        <div className="container">
          <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">取扱製品</h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="h-full border border-border/50 shadow-md hover:shadow-lg transition-shadow rounded-lg p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">環境配慮型パレット</span>
                <h3 className="text-2xl font-bold text-foreground mb-3">RECOPALLET</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  ベトナム産のココナツヤシ殻を100%使用した環境配慮型物流パレット。
                  森林破壊ゼロ、カーボンニュートラルに貢献する次世代の物流ソリューションです。
                </p>
                <Link href="/products/recopallet" className="inline-flex items-center border border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-md text-sm font-medium transition-colors no-underline">
                  詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
              <div className="h-full border border-border/50 shadow-md hover:shadow-lg transition-shadow rounded-lg p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">省エネフィルター</span>
                <h3 className="text-2xl font-bold text-foreground mb-3">CONTINEWM</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  特殊天然鉱物を練り込んだフィルターでエアコンの静電気を除去し、消費電力を削減。
                  日米で特許を取得した革新的な省エネソリューションです。
                </p>
                <Link href="/products/continewm" className="inline-flex items-center border border-primary/30 text-primary hover:bg-primary/5 px-4 py-2 rounded-md text-sm font-medium transition-colors no-underline">
                  詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">お気軽にお問い合わせください</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              製品に関するご質問、導入のご相談など、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-10 h-12 text-base font-semibold rounded-md transition-colors no-underline">
              お問い合わせはこちら <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
