import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, TreePine, Ruler, Shield, Globe, Leaf,
  CheckCircle, Thermometer, Droplets, Zap, Factory, Weight, ChevronDown,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";
import RecoPalletCalculator from "@/components/calculators/RecoPalletCalculator";

export const metadata: Metadata = {
  title: "RECO PALLET｜ヤシ殻×バイオマス廃材製エコパレット｜ELSソリューションズ",
  description: "農業廃棄物のヤシ殻50%＋ウッド廃材50%から製造。ESGスコープ3カテゴリー1対応。製造工程は太陽光発電100%使用。ISPM15免除認証取得済み。",
  alternates: { canonical: "https://els-solutions.co.jp/products/recopallet" },
  openGraph: {
    images: [{ url: "https://els-solutions.co.jp/images/og-default.png" }],
  },
};

const faqItems = [
  {
    q: "RECO PALLETの原料は何ですか？",
    a: "ヤシ殻50%＋バイオマス廃材（ウッドチップ）50%＋天然結合剤（サトウキビ・ヤシ抽出成分）5%で構成。農業廃棄物と廃材を再利用した環境配慮型パレットです。",
  },
  {
    q: "製造工程でCO₂は排出されますか？",
    a: "現地工場は太陽光発電100%（オフサイト）で稼働しており、製造時のCO₂排出量は実質ほぼゼロです。",
  },
  {
    q: "ESGスコープ3のどのカテゴリーに対応しますか？",
    a: "スコープ3カテゴリー1（購入した製品・サービス）に対応します。パレット調達をRECO PALLETに切り替えるだけでCO₂削減量をESGレポートに計上できます。",
  },
  {
    q: "ISPM15とは何ですか？なぜ免除なのですか？",
    a: "ISPM15は木材梱包材の植物検疫規制です。RECO PALLETは200℃の高温プレス加工で製造されるため、免除認証を取得済み。輸出時の燻蒸処理が不要で通関をスムーズに行えます。",
  },
  {
    q: "最小発注数量（MOQ）はどのくらいですか？",
    a: "40フィートコンテナ（40\"HC）単位での発注となります。シングルタイプは1,500枚〜です。",
  },
  {
    q: "廃棄はどうすればよいですか？",
    a: "日本国内ではバイオマス発電の燃料として再利用できます。廃棄パレットの回収は専門業者が対応します。",
  },
  {
    q: "保管時のスペースはどのくらい削減できますか？",
    a: "ネスティング（積み重ね）設計により、通常パレット比で最大約70%の保管スペース削減が可能です。",
  },
  {
    q: "サンプルや試用は可能ですか？",
    a: "サンプルのご提供・詳細なお見積もりについてはお問い合わせください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const singleLineup = [
  { model: "S-1100-1100-130", size: "1,100×1,100×130", weight: "17kg", dynamic: "1,250kg", static: "3,000kg", moq: "1,500枚" },
  { model: "S-1200-800-130",  size: "1,200×800×130",  weight: "15kg", dynamic: "1,000kg", static: "3,000kg", moq: "1,500枚" },
  { model: "S-1200-1000-130", size: "1,200×1,000×130",weight: "17kg", dynamic: "1,250kg", static: "3,000kg", moq: "1,500枚" },
];

const doubleLineup = [
  { model: "D-1100-1100-140", size: "1,100×1,100×140", weight: "23kg", dynamic: "1,250kg", static: "4,500kg", moq: "360枚（組立済）" },
  { model: "D-1200-1000-140", size: "1,200×1,000×140", weight: "23kg", dynamic: "1,250kg", static: "4,500kg", moq: "396枚（組立済）" },
];

export default function RecopalletPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div>
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-emerald-50/30" />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="container relative z-10">
            <MotionDiv className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">環境配慮型パレット</span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm font-semibold">ESG スコープ3 対応</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">RECO PALLET</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                ヤシ殻50%＋バイオマス廃材（ウッドチップ）50%から製造した、森林破壊ゼロの環境配慮型物流パレット。
                製造工場は太陽光発電100%（オフサイト）使用で、製造時CO₂排出量は実質ほぼゼロです。
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

            <div>
              <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  RECO PALLETの解決策
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  RECO PALLETは、農業廃棄物のヤシ殻とバイオマス廃材（ウッドチップ）を原料とし、木材を一切使用しない環境配慮型パレットです。
                  天然結合剤（サトウキビ・ヤシ抽出成分）を5%使用し、200℃の高温プレスで成型。製造工場は太陽光発電100%（オフサイト）を使用しており、製造から廃棄まで環境負荷を最小化します。
                  使用後は日本国内でバイオマス発電燃料として再利用され、さらなるCO₂削減に貢献します。
                </p>
              </MotionDiv>
              <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div className="border border-emerald-100 bg-emerald-50/50 rounded-lg p-6 text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-1">0%</p>
                  <p className="text-xs text-muted-foreground">RECO PALLETの森林破壊</p>
                </div>
                <div className="border border-emerald-100 bg-emerald-50/50 rounded-lg p-6 text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-1">実質ゼロ</p>
                  <p className="text-xs text-muted-foreground">製造時CO₂排出量（太陽光発電100%）</p>
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

            {/* 共通スペックテーブル */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {[
                { title: "シングルパレット", subtitle: "輸出・床置き用 ※ネスティング可能", headerBg: "bg-emerald-600" },
                { title: "ダブルパレット",   subtitle: "荷物の積載・保管用", headerBg: "bg-emerald-700" },
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
                          { label: "標準サイズ",  value: "1,100×1,100mm / 1,200×1,000mm",                    Icon: Ruler },
                          { label: "製品重量",    value: pi === 0 ? "15〜17kg" : "23kg",                     Icon: Weight },
                          { label: "動的負荷",    value: pi === 0 ? "1,000〜1,250kg" : "1,250kg",            Icon: Shield },
                          { label: "静的負荷",    value: pi === 0 ? "3,000kg" : "4,500kg",                   Icon: Shield },
                          { label: "素材",        value: "ヤシ殻50%＋バイオマス廃材50%＋天然結合剤5%",       Icon: TreePine },
                          { label: "耐水性",      value: "水洗い可",                                         Icon: Droplets },
                          { label: "対応温度",    value: "−50〜150℃",                                       Icon: Thermometer },
                          { label: "防虫処理",    value: "不要（ISPM15免除認証取得済）",                     Icon: CheckCircle },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <row.Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span className="text-sm font-medium text-foreground">{row.label}</span>
                              </div>
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

            {/* 製品ラインナップテーブル */}
            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">製品ラインナップ</h3>

              {/* シングルタイプ */}
              <div className="mb-8">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold mb-3">シングルタイプ</div>
                <div className="overflow-x-auto rounded-lg border border-border/50 shadow">
                  <table className="w-full text-sm min-w-[640px]">
                    <thead>
                      <tr className="bg-emerald-600 text-white">
                        {["型番", "サイズ (mm)", "重量", "動的負荷", "静的負荷", "MOQ"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {singleLineup.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-emerald-50/50"}>
                          <td className="px-4 py-3 font-mono font-medium text-foreground">{row.model}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.size}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.weight}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.dynamic}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.static}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.moq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ダブルタイプ */}
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-semibold mb-3">ダブルタイプ</div>
                <div className="overflow-x-auto rounded-lg border border-border/50 shadow">
                  <table className="w-full text-sm min-w-[640px]">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        {["型番", "サイズ (mm)", "重量", "動的負荷", "静的負荷", "MOQ"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {doubleLineup.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-emerald-50/50"}>
                          <td className="px-4 py-3 font-mono font-medium text-foreground">{row.model}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.size}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.weight}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.dynamic}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.static}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.moq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                ※ MOQは40フィートコンテナ（40&quot;HC）単位。カスタムサイズのご相談も承ります。
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* CO₂削減計算ツール */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-600 mb-3">Calculator</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">CO₂削減量を計算する</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                導入枚数を入力して、CO₂削減効果をシミュレーションできます。ESGレポートの参考値としてご活用ください。
              </p>
            </MotionDiv>
            <RecoPalletCalculator />
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-600 mb-3">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">RECO PALLETの特長</h2>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: TreePine, title: "森林破壊ゼロ",           description: "農業廃棄物のヤシ殻とバイオマス廃材（ウッドチップ）を原料に使用。木材を一切使わず、森林資源を守ります。" },
                { icon: Leaf,     title: "製造時CO₂排出実質ゼロ", description: "製造工場は太陽光発電100%（オフサイト）で稼働。製造時のCO₂排出量は実質ほぼゼロで、ESGスコープ3カテゴリー1に対応します。" },
                { icon: Shield,   title: "高い強度・耐久性",       description: "動的負荷1,250kg、静的負荷3〜4.5トンの高強度。過酷な物流現場にも対応します。" },
                { icon: Droplets, title: "優れた耐水性・温度耐性", description: "水洗い可能で清掃が容易。−50〜150℃の圧倒的な環境対応力で、冷凍・冷蔵物流にも対応します。" },
                { icon: Zap,      title: "バイオマス発電で再利用", description: "日本国内では使用後にバイオマス発電燃料として再利用。2023年1月にFIT認定を取得し、さらなるCO₂削減に貢献します。" },
                { icon: Globe,    title: "国際規格適合",           description: "ISPM15免除認証取得済み。200℃高温プレス製造のため燻蒸処理が不要で、輸出通関をスムーズに行えます。" },
              ].map((feature, i) => (
                <MotionDiv key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <div className="bg-white hover:bg-emerald-50/50 transition-colors h-full rounded-lg p-8 border border-border/30">
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
                { letter: "E", title: "環境", items: ["CO₂排出削減（スコープ3 Cat.1対応）", "森林保全・農業廃棄物の有効活用", "製造時CO₂排出実質ゼロ（太陽光発電100%）", "バイオマス発電での廃棄物再利用（FIT認定）"] },
                { letter: "S", title: "社会", items: ["ベトナム農村部の雇用創出", "バイオマスエネルギー活用による地域経済への貢献", "持続可能な産業の構築"] },
                { letter: "G", title: "ガバナンス", items: ["サプライチェーンの透明性", "品質管理の徹底", "国際規格への準拠（ISPM15免除）"] },
              ].map((esg, i) => (
                <MotionDiv key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="text-4xl font-bold text-emerald-200 mb-2">{esg.letter}</div>
                  <h3 className="text-xl font-bold mb-4">{esg.title}</h3>
                  <ul className="space-y-3">
                    {esg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container max-w-3xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-600 mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">よくある質問</h2>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="divide-y divide-border/50 border border-border/50 rounded-xl overflow-hidden">
                {faqItems.map((item, i) => (
                  <details key={i} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                      <span className="font-semibold text-foreground text-sm md:text-base">
                        Q{i + 1}. {item.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-emerald-600 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                    </summary>
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-emerald-300 pl-4">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container text-center">
            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">RECO PALLETの導入をご検討ください</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                製品の詳細や価格、導入に関するご相談など、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-600 px-10 h-12 text-base font-semibold rounded-md no-underline">
                  資料請求はこちら
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-12 text-base font-medium rounded-md transition-colors no-underline">
                  お問い合わせ <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </section>
      </div>
    </>
  );
}
