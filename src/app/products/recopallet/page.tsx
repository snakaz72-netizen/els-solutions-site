import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, TreePine, Ruler, Shield, Globe, Leaf,
  CheckCircle, Thermometer, Droplets, Zap, Factory, Weight,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "RECOPALLET - 環境配慮型パレット",
  description: "ベトナム産のココナツヤシ殻を100%使用した、森林破壊ゼロの環境配慮型物流パレット。高い強度と耐久性を備えながら、カーボンニュートラルに貢献する次世代の物流ソリューション。",
};

export default function RecopalletPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-emerald-50/30" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">環境配慮型パレット</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">RECOPALLET</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              ベトナム産のココナツヤシ殻を100%使用した、森林破壊ゼロの環境配慮型物流パレット。
              高い強度と耐久性を備えながら、カーボンニュートラルに貢献する次世代の物流ソリューションです。
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-600 mb-3">Background</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">パレット市場の課題</h2>
          </MotionDiv>

          {/* 世界のパレット市場の課題 */}
          <div className="mb-16">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5 text-red-500" />
                世界のパレット市場の現状
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                世界のパレット市場は約350億ドル規模に達し、年間約30億枚が生産されています。
                その大半を占める木製パレットは大規模な森林破壊の原因となっており、プラスチックパレットは石油由来でCO₂排出が多いという深刻な環境課題を抱えています。
              </p>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div className="border border-red-100 bg-red-50/50 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-red-600 mb-1">350億$</p>
                <p className="text-xs text-muted-foreground">世界パレット市場規模</p>
              </div>
              <div className="border border-red-100 bg-red-50/50 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-red-600 mb-1">30億枚</p>
                <p className="text-xs text-muted-foreground">年間生産量（森林破壊の一因）</p>
              </div>
            </MotionDiv>
          </div>

          {/* RECOPALLETの解決策 */}
          <div>
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-600" />
                RECOPALLETの解決策
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                RECOPALLETは、ベトナムで大量に廃棄されるココナツヤシ殻を100%活用し、木材を一切使用しない環境配慮型パレットです。
                森林破壊と廃棄物問題を同時に解決し、使用後は日本国内でバイオマス発電燃料として再利用され、さらなるCO₂削減に貢献します。
              </p>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div className="border border-emerald-100 bg-emerald-50/50 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-emerald-600 mb-1">0%</p>
                <p className="text-xs text-muted-foreground">RECOPALLETの森林破壊</p>
              </div>
              <div className="border border-emerald-100 bg-emerald-50/50 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-emerald-600 mb-1">100%</p>
                <p className="text-xs text-muted-foreground">RECOPALLETの天然素材使用率</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-600 mb-3">Specifications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">製品仕様</h2>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "シングルパレット", subtitle: "輸出・床置き用 ※積み重ね可能", headerBg: "bg-emerald-600" },
              { title: "ダブルパレット", subtitle: "荷物の積載・保管用", headerBg: "bg-emerald-700" },
            ].map((pallet, pi) => (
              <MotionDiv key={pi} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: pi * 0.15 }}>
                <div className="border border-border/50 shadow-lg overflow-hidden h-full rounded-lg">
                  <div className={`${pallet.headerBg} text-white px-6 py-4`}>
                    <h3 className="text-lg font-bold">{pallet.title}</h3>
                    <p className="text-sm text-emerald-100">{pallet.subtitle}</p>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {[
                        { label: "標準サイズ", value: "1,100×1,100mm / 1,200×1,000mm", Icon: Ruler },
                        { label: "製品重量", value: "17kg", Icon: Weight },
                        { label: "動的負荷", value: "1.2トン", Icon: Shield },
                        { label: "静的負荷", value: "3トン", Icon: Shield },
                        { label: "素材", value: "100% ココナツヤシ殻", Icon: TreePine },
                        { label: "耐水性", value: "水洗い可", Icon: Droplets },
                        { label: "対応温度", value: "-50〜150℃", Icon: Thermometer },
                        { label: "防虫処理", value: "不要（ISPM15免除認証取得済）", Icon: CheckCircle },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                          <td className="px-6 py-4 flex items-center gap-3">
                            <row.Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="text-sm font-medium text-foreground">{row.label}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground text-right">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </MotionDiv>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
            ※上記は標準サイズの仕様です。他サイズ・カスタムサイズのご相談も承ります。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container">
          <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-600 mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">RECOPALLETの特長</h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TreePine, title: "森林破壊ゼロ", description: "木材を一切使用せず、廃棄されるココナツヤシ殻を100%活用。森林資源を守ります。" },
              { icon: Leaf, title: "カーボンニュートラル", description: "製造から廃棄まで、CO₂排出を最小限に抑えた環境配慮型の設計です。" },
              { icon: Shield, title: "高い強度・耐久性", description: "動的負荷1.2トン、静的負荷3トンの高い強度を実現。段ボールパレットの3倍の強度を保持し、過酷な物流現場にも対応します。" },
              { icon: Droplets, title: "優れた耐水性・温度耐性", description: "水洗い可能で清掃も容易。-50〜150℃の圧倒的な環境対応力で、冷凍・冷蔵物流にも対応します。" },
              { icon: Zap, title: "バイオマス発電で再利用", description: "日本国内では使用後にバイオマス発電燃料として再利用。2023年1月にFIT認定を取得し、さらなるCO₂削減に貢献します。" },
              { icon: Globe, title: "国際規格適合", description: "ISPM15に適合し、防虫処理が不要。国際物流にもそのままご利用いただけます。" },
            ].map((feature, i) => (
              <MotionDiv key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="bg-secondary/50 hover:bg-secondary transition-colors h-full rounded-lg p-8">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Contribution */}
      <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-200 mb-3">ESG Contribution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ESGへの貢献</h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { letter: "E", title: "環境", items: ["CO₂排出削減", "森林保全", "廃棄物の有効活用", "バイオマス発電での再利用（FIT認定）"] },
              { letter: "S", title: "社会", items: ["ベトナム農村部の雇用創出", "バイオマスエネルギー活用による地域経済への貢献", "持続可能な産業の構築"] },
              { letter: "G", title: "ガバナンス", items: ["サプライチェーンの透明性", "品質管理の徹底", "国際規格への準拠"] },
            ].map((esg, i) => (
              <MotionDiv key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold text-emerald-200 mb-2">{esg.letter}</div>
                <h3 className="text-xl font-bold mb-4">{esg.title}</h3>
                <ul className="space-y-3">
                  {esg.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">RECOPALLETの導入をご検討ください</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              製品の詳細や価格、導入に関するご相談など、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-12 text-base font-medium rounded-md transition-colors no-underline">
              お問い合わせ <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
