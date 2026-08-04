import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ELSソリューションズ | ESG・省エネ製品で企業のサステナビリティを支援",
  description: "RECO PALLET・CONTINEWM・CM Fiber Cassetteで企業のESG経営とCO₂削減を支援。工事不要の省エネソリューション。導入実績8,000箇所以上。",
  alternates: { canonical: "https://els-solutions.co.jp/" },
};
import {
  ArrowRight,
  Leaf,
  Zap,
  Globe,
  Shield,
  TreePine,
  Layers,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />

        <div className="container relative z-10">
          <MotionDiv
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
              ESG &amp; Sustainability Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-8">
              持続可能な未来を
              <br />
              <span className="gradient-text">ソリューション</span>で実現する
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              ELSソリューションズは、環境・社会・ガバナンスに配慮した革新的な製品を通じて、
              企業のESG経営とサスティナビリティの実現を支援します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/recopallet"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base font-medium rounded-md transition-colors no-underline"
              >
                製品を見る
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 h-12 text-base font-medium rounded-md border border-primary/30 text-primary hover:bg-primary/5 transition-colors no-underline"
              >
                お問い合わせ
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container">
          <MotionDiv
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              3つの価値で社会に貢献
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              環境保全、社会貢献、そして持続可能な経営を支える製品をお届けします。
            </p>
          </MotionDiv>

          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Globe, title: "Environment", subtitle: "環境", description: "CO₂排出削減、森林保全、廃棄物の有効活用を通じて、地球環境の保護に貢献します。" },
              { icon: Shield, title: "Social", subtitle: "社会", description: "ベトナム農村部の雇用創出や、快適な室内環境の実現を通じて、社会に価値を提供します。" },
              { icon: Leaf, title: "Governance", subtitle: "ガバナンス", description: "サプライチェーンの透明性と認定販売員制度により、信頼性の高いビジネスを実現します。" },
            ].map((item, i) => (
              <MotionDiv key={i} variants={fadeInUp}>
                <div className="bg-secondary/50 hover:bg-secondary transition-colors h-full rounded-lg p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-1">{item.title}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.subtitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <MotionDiv
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">主要プロダクト</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              環境に配慮しながら、ビジネスの効率化とコスト削減を実現する3つの革新的な製品をご紹介します。
            </p>
          </MotionDiv>

          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* RECOPALLET */}
            <MotionDiv variants={fadeInUp}>
              <div className="overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all h-full rounded-lg flex flex-col">
                <div className="h-44 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                  <div className="flex flex-col items-center gap-2">
                    <TreePine className="w-14 h-14 text-emerald-600/40" />
                    <span className="text-xs font-medium tracking-wider uppercase text-emerald-600/60">Eco-Friendly Pallet</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">環境配慮型パレット</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-medium">ESG スコープ3</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">RECO PALLET</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    ベトナム産のココナツヤシ殻を100%使用した、森林破壊ゼロの環境配慮型物流パレット。高い強度と耐久性を備えながら、カーボンニュートラルに貢献します。
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">3トン</p>
                      <p className="text-xs text-muted-foreground">静荷重</p>
                    </div>
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">17kg</p>
                      <p className="text-xs text-muted-foreground">軽量設計</p>
                    </div>
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">100%</p>
                      <p className="text-xs text-muted-foreground">天然素材</p>
                    </div>
                  </div>
                  <Link href="/products/recopallet" className="flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium transition-colors no-underline text-sm">
                    詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </MotionDiv>

            {/* CONTINEWM */}
            <MotionDiv variants={fadeInUp}>
              <div className="overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all h-full rounded-lg flex flex-col">
                <div className="h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <div className="flex flex-col items-center gap-2">
                    <Zap className="w-14 h-14 text-blue-600/40" />
                    <span className="text-xs font-medium tracking-wider uppercase text-blue-600/60">Energy Saving Filter</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">省エネフィルター</span>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium">ESG スコープ2</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">CONTINEWM</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    特殊天然鉱物を練り込んだフィルターをエアコンに設置するだけで、静電気を除去し消費電力を削減。工事不要で即効性のある省エネソリューション。
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">8,000+</p>
                      <p className="text-xs text-muted-foreground">導入箇所</p>
                    </div>
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">特許</p>
                      <p className="text-xs text-muted-foreground">日米取得</p>
                    </div>
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">28%</p>
                      <p className="text-xs text-muted-foreground">粉塵削減</p>
                    </div>
                  </div>
                  <Link href="/products/continewm" className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md font-medium transition-colors no-underline text-sm">
                    詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </MotionDiv>

            {/* CM Fiber Cassette */}
            <MotionDiv variants={fadeInUp}>
              <div className="overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all h-full rounded-lg flex flex-col">
                <div className="h-44 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />
                  <div className="flex flex-col items-center gap-2">
                    <Layers className="w-14 h-14 text-teal-600/40" />
                    <span className="text-xs font-medium tracking-wider uppercase text-teal-600/60">Air Quality Solution</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">空気質改善</span>
                    <span className="px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-medium">環境負荷軽減</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">CM Fiber Cassette</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    天然素材由来の特殊繊維フィルターで、エアコン内部の汚れを効果的に除去。空気質の改善と機器の効率維持を同時に実現する、メンテナンスフリーのソリューション。
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">天然素材</p>
                      <p className="text-xs text-muted-foreground">100%使用</p>
                    </div>
                    <div className="text-center p-2.5 bg-secondary/50 rounded-lg">
                      <p className="text-base font-bold text-foreground">工事不要</p>
                      <p className="text-xs text-muted-foreground">簡単設置</p>
                    </div>
                  </div>
                  <Link href="/products/cm-fiber-cassette" className="flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md font-medium transition-colors no-underline text-sm">
                    詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* 数字で見るELS */}
      <section className="py-24 bg-foreground text-background">
        <div className="container">
          <MotionDiv
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-background/50 mb-3">Numbers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-background">数字で見るELS</h2>
          </MotionDiv>

          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                value: "8,000+",
                unit: "箇所以上",
                label: "CONTINEWM 国内導入実績",
                sub: "工場・オフィス・商業施設など",
              },
              {
                value: "6,000万",
                unit: "枚",
                label: "RECO PALLET 世界流通枚数",
                sub: "アジア・欧米への輸出実績あり",
              },
              {
                value: "1・2・3",
                unit: "",
                label: "対応ESGスコープ",
                sub: "スコープ1・2・3 をトータル支援",
              },
            ].map((stat, i) => (
              <MotionDiv key={i} variants={fadeInUp}>
                <div className="text-center p-8 rounded-lg border border-background/10 hover:border-background/20 transition-colors">
                  <p className="text-5xl md:text-6xl font-bold text-background leading-none mb-1">
                    {stat.value}
                    {stat.unit && <span className="text-2xl md:text-3xl font-medium ml-1">{stat.unit}</span>}
                  </p>
                  <p className="text-base font-semibold text-background/80 mt-4 mb-2">{stat.label}</p>
                  <p className="text-sm text-background/50">{stat.sub}</p>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">お気軽にお問い合わせください</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              製品に関するご質問、導入のご相談など、お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
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
