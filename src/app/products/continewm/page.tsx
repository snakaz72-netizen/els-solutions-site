import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Zap, Wind, Thermometer, Wrench, Shield, Leaf,
  Factory, Snowflake, AirVent, ChevronDown, Building2,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";
import ContinewmCalculator from "@/components/calculators/ContinewmCalculator";

export const metadata: Metadata = {
  title: "CONTINEWM（コンティニューム）｜空調省エネシート｜ELSソリューションズ",
  description: "エアコンのフィルターに置くだけで消費電力を削減。ESGスコープ2対応。日本・米国特許取得。国内約8,000箇所以上に導入実績。",
  alternates: { canonical: "https://els-solutions.co.jp/products/continewm" },
  openGraph: {
    images: [{ url: "https://els-solutions.co.jp/images/og-default.png" }],
  },
};

const faqItems = [
  {
    q: "CONTINEWMとは何ですか？",
    a: "エアコンのフィルターに乗せるだけで消費電力を削減する空調省エネシートです。特殊天然鉱物の物性でエアコン内部の静電気を抑制し、熱交換効率を回復させます。",
  },
  {
    q: "どのくらい電力を削減できますか？",
    a: "設置環境によりますが、目安として空調電力の約10%削減が期待できます。正確な効果は現地調査・電力計測にてご確認いただけます。",
  },
  {
    q: "設置に工事は必要ですか？",
    a: "工事は不要です。エアコンのフィルターの上に乗せるだけで設置完了です。電源停止も不要です。",
  },
  {
    q: "ESGスコープ2にどう対応しますか？",
    a: "電力使用量削減によりスコープ2（エネルギーの間接排出）のCO₂削減量をESGレポートに計上できます。",
  },
  {
    q: "どんな種類のエアコンに使えますか？",
    a: "天井カセット型（4方向・2方向）・天吊り型・ルームエアコン・床置き型・冷蔵冷凍庫まで6タイプに対応。サイズに合わせてカットも可能です。",
  },
  {
    q: "どのくらいの期間使えますか？",
    a: "半永久的に使用可能です。電気や動力を使わない受動的な製品のため消耗しません。",
  },
  {
    q: "省エネ以外の効果はありますか？",
    a: "熱交換器・フィルターへの埃付着軽減と、空気中の浮遊粉塵約28%減少（東京都内ビルでの実測値）の副次効果があります。ニオイ軽減効果も多数報告されています。",
  },
  {
    q: "導入実績はありますか？",
    a: "国内約8,000箇所以上に導入済み（2025年8月現在）。NTT東日本・デンソー・コカ・コーラボトラーズジャパン等の上場企業を含む多数の企業で採用されています。",
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

const specRows = [
  { label: "製品名",      value: "CONTINEWM（コンティニューム）" },
  { label: "サイズ",      value: "約49cm × 48cm × 厚み2.5mm" },
  { label: "重量",        value: "約200g" },
  { label: "色",          value: "ダークブラウン" },
  { label: "柄",          value: "ハニカム（最大幅16.97mm・最小幅14.7mm）" },
  { label: "材質",        value: "特殊天然鉱物 / 低密度ポリエチレン" },
  { label: "原産国",      value: "日本（東証スタンダード上場企業の日本国内工場）" },
  { label: "特許番号",    value: "日本 第6486409号 / 米国 US 11846437 B2 / US 12098853 B2" },
  { label: "意匠登録",    value: "第1597440号" },
  { label: "製造・販売元", value: "コンティニューム株式会社" },
  { label: "販売開始",    value: "2016年4月" },
  { label: "対応エアコン", value: "天井カセット型（4方向・2方向）・天吊り型・ルームエアコン・床置き型・冷蔵冷凍庫" },
  { label: "設置方法",    value: "フィルターの上に乗せるだけ（工事不要・電源停止不要）" },
];

const companies = [
  "株式会社池田模範堂",
  "株式会社壱番屋（CoCo壱番屋）",
  "NTT東日本株式会社",
  "株式会社小松製作所",
  "コカ・コーラボトラーズジャパン株式会社",
  "株式会社デンソー",
  "損害保険ジャパン株式会社",
  "株式会社東急百貨店",
  "トヨタ博物館",
  "株式会社明治",
];

export default function ContinewmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div>
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-blue-50/30" />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="container relative z-10">
            <MotionDiv className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">空調省エネシート</span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-semibold">ESG スコープ2 対応</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">CONTINEWM</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                特殊天然鉱物を練り込んだ空調省エネシートをエアコンのフィルターに乗せるだけで、
                静電気を抑制し消費電力を削減。日米で特許を取得した革新的な省エネソリューションです。
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Mechanism */}
        <section className="py-24 bg-white">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Mechanism</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">製品メカニズム</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">CONTINEWMは5つのステップで省エネを実現します。</p>
            </MotionDiv>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { step: "01", title: "CONTINEWMが空気のプラス帯電を解消",  Icon: Zap,        color: "bg-blue-50 text-blue-600" },
                { step: "02", title: "エアコンの熱交換効率を回復",          Icon: Thermometer, color: "bg-blue-100 text-blue-700" },
                { step: "03", title: "設定温度に早く到達し長時間キープ",    Icon: Snowflake,   color: "bg-blue-200/60 text-blue-700" },
                { step: "04", title: "コンプレッサーの稼働が緩やかに",      Icon: Wind,        color: "bg-blue-300/50 text-blue-800" },
                { step: "05", title: "省エネ・CO₂削減を実現",             Icon: Leaf,        color: "bg-emerald-100 text-emerald-700" },
              ].map((item, i) => (
                <MotionDiv key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary/30">{item.step}</span>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Specifications</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">製品規格</h2>
            </MotionDiv>

            <MotionDiv className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="border border-border/50 shadow-lg overflow-hidden rounded-lg">
                <table className="w-full">
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground w-1/3 align-top">{row.label}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 bg-white">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Advantages</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">導入メリット</h2>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Wrench, title: "簡単設置",   subtitle: "Easy Installation", description: "機器の改造や電源停止は不要で、誰でもすぐに取付け可能。フィルターの上にシートを乗せるだけなので導入がとても簡単です。" },
                { icon: Shield, title: "長持ち設計", subtitle: "Long Lasting",       description: "柔軟で軽い素材を使用しているため壊れにくく、取付け後のお手入れも簡単。維持費がかからず経済的です。" },
                { icon: Leaf,   title: "省エネ実現", subtitle: "Save Energy",        description: "静電気による気流の乱れを整え、エアコンの熱交換効率を回復。電気や動力を使わず、CO₂排出量の削減にも貢献します。" },
              ].map((item, i) => (
                <MotionDiv key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <div className="bg-secondary/50 hover:bg-secondary transition-colors h-full rounded-lg p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-1">{item.subtitle}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Side Effects */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Side Effects</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">副次効果</h2>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <MotionDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="h-full border border-border/50 shadow-md rounded-lg p-8 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                    <AirVent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">熱交換器の埃付着軽減</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    CONTINEWMにより空気の帯電が解消されると、埃が吸着しにくくなります。
                    その結果、エアコンは本来の熱交換効率を取り戻し、消費電力の無駄をなくします。
                    浮遊粉塵も約28%減少（東京都内ビルでの実測値）します。
                  </p>
                </div>
              </MotionDiv>
              <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="h-full border border-border/50 shadow-md rounded-lg p-8 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
                    <Wind className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">空気中のニオイ軽減</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    空気中のニオイ物質や汚れ物質も静電気によって空気中を浮遊しています。
                    CONTINEWMによって帯電が解消されることで、これらの物質が落下しやすくなり、空気環境の改善が期待できます。
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Compatible Types */}
        <section className="py-24 bg-white">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Adaptable Type</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">適応タイプ</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                あらゆるタイプのエアコンに取付け可能です。フィルターのサイズに合わせてカットできます。
              </p>
            </MotionDiv>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { Icon: AirVent,   name: "天井カセット型 4方向" },
                { Icon: AirVent,   name: "天井カセット型 2方向" },
                { Icon: AirVent,   name: "天吊り型" },
                { Icon: AirVent,   name: "ルームエアコン" },
                { Icon: Factory,   name: "床置き型" },
                { Icon: Snowflake, name: "冷蔵・冷凍庫" },
              ].map((type, i) => (
                <MotionDiv key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <type.Icon className="w-8 h-8 text-primary/60" />
                  <span className="text-sm font-medium text-foreground text-center">{type.name}</span>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* 国内導入実績 */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
          <div className="container relative z-10">
            <MotionDiv className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-3">Track Record</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">国内導入実績</h2>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="bg-white/10 rounded-full px-6 py-2">
                  <span className="text-2xl font-bold">約8,000箇所以上</span>
                  <span className="text-sm text-primary-foreground/70 ml-2">に導入済み</span>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/50 mt-2">2025年8月現在</p>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-center text-sm font-semibold text-primary-foreground/70 mb-6 tracking-wider uppercase">主要導入企業（一部）</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
                {companies.map((company, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary-foreground/50 shrink-0" />
                    <span className="text-sm text-primary-foreground/85 leading-snug">{company}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary-foreground/40 text-center mt-6">※一部抜粋（順不同）</p>
            </MotionDiv>
          </div>
        </section>

        {/* 省エネ計算ツール */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Calculator</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">省エネ効果を計算する</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                エアコン台数や電力使用量を入力して、年間節電額・CO₂削減量をシミュレーションできます。
              </p>
            </MotionDiv>
            <ContinewmCalculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-secondary/30">
          <div className="container max-w-3xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">よくある質問</h2>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="divide-y divide-border/50 border border-border/50 rounded-xl overflow-hidden">
                {faqItems.map((item, i) => (
                  <details key={i} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                      <span className="font-semibold text-foreground text-sm md:text-base">
                        Q{i + 1}. {item.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-primary shrink-0 group-open:rotate-180 transition-transform duration-200" />
                    </summary>
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-blue-300 pl-4">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">CONTINEWMの導入をご検討ください</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                製品の詳細や価格、導入に関するご相談など、お気軽にお問い合わせください。
                認定販売員が的確なご提案とサポートを提供いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 border border-blue-600 px-10 h-12 text-base font-semibold rounded-md no-underline">
                  資料請求はこちら
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-12 text-base font-medium rounded-md transition-colors no-underline">
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
