import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Droplets, Leaf, Wrench, RefreshCw,
  Zap, CheckCircle, ChevronDown, Factory,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "CM Fiber Cassette｜冷水チラー用ノンケミカル洗浄カセット｜ELSソリューションズ",
  description: "冷水チラー設備・冷却塔の循環水に置くだけ。スケール・藻類・細菌類をノンケミカルで除去。動力源不要・再利用可能。日本製・特許取得済み。",
  alternates: { canonical: "https://els-solutions.co.jp/products/cm-fiber-cassette" },
  openGraph: {
    title: "CM Fiber Cassette｜冷水チラー用ノンケミカル洗浄カセット",
    description: "循環水に置くだけ。スケール・藻類・細菌類をノンケミカルで除去。動力源不要・再利用可能。日本製・特許取得済み。",
    images: [{ url: "https://els-solutions.co.jp/images/og-default.png" }],
  },
};

const faqItems = [
  {
    q: "CM Fiber Cassetteとはどんな製品ですか？",
    a: "冷水チラー設備や冷却塔の循環水中に置くだけでスケール・藻類・細菌類を除去するノンケミカル洗浄カセットです。動力源不要・工事不要で設備内に沈めるだけです。",
  },
  {
    q: "どんな設備に使えますか？",
    a: "冷水チラーの水槽タンクと冷却塔が主な利用先です。射出成型機冷却・エンジン塗装ライン冷却・食品製造設備など幅広い業種で導入実績があります。",
  },
  {
    q: "薬剤を使わなくてよいのですか？",
    a: "はい。CM Fiberは特殊天然鉱物Clay Mineralを配合したPP極細ファイバーで、化学薬剤を一切使いません。薬剤使用が制限されている食品工場等にも対応できます。",
  },
  {
    q: "どのくらいの量が必要ですか？",
    a: "設備の溜水量に対して水量1L：CMF1gが目安です。溜水200Lなら1カセット（200g）、600Lなら3カセットが目安となります。",
  },
  {
    q: "CMFC-SとCMFC-Aの違いは何ですか？",
    a: "CMFC-Sはスケール・サビ等の析出物除去に特化。CMFC-Aは藻類・細菌類の制菌に特化しています。設備の課題に応じて選択または併用します。",
  },
  {
    q: "どのくらいの期間使えますか？",
    a: "概ね1年間使用可能です（水質による）。2〜3ヶ月に一度、高圧洗浄でメンテナンスすることで繰り返し使用できます。",
  },
  {
    q: "メンテナンスはどうすればよいですか？",
    a: "2〜3ヶ月に一度、設備から取り出して高圧洗浄機で汚れを洗い流し、脱水して再設置します。作業時は手袋・マスク着用を推奨します。",
  },
  {
    q: "どこで購入できますか？",
    a: "ELSソリューションズが販売代理店として取り扱っています。お問い合わせフォームまたはお電話にてご連絡ください。",
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

const features = [
  {
    icon: Droplets,
    title: "不純物の付着・制菌効果",
    description: "サビ・スケールをCMFへ付着させ設備を保護。藻類・細菌類への制菌効果で水質を維持します。",
  },
  {
    icon: Leaf,
    title: "ノンケミカル",
    description: "化学薬剤を一切使用しません。薬剤利用が制限される食品工場など、あらゆる環境に対応可能です。",
  },
  {
    icon: Zap,
    title: "動力源不要・簡単設置",
    description: "電気的な設備・工事は一切不要。冷却塔や冷水チラー設備内に沈めるだけで効果を発揮します。",
  },
  {
    icon: RefreshCw,
    title: "再利用可能",
    description: "CMFに付着物が溜まれば高圧洗浄して再利用。2〜3ヶ月に一度のメンテナンスで最大1年使用可能です。",
  },
];

const specCommon = [
  { label: "マット型サイズ",   value: "(D)40cm × (W)40cm × (H)7cm" },
  { label: "箱型サイズ",       value: "(D)18cm × (W)36cm × (H)18cm" },
  { label: "材質（ファイバー）", value: "PP＋天然特殊鉱物 Clay Mineral" },
  { label: "材質（カセット）",  value: "ポリエチレン" },
  { label: "重量",             value: "ファイバー 200g / 1カセット" },
  { label: "使用期間",         value: "概ね1年間（水質による）" },
  { label: "原産国",           value: "日本" },
];

const cases = [
  {
    industry: "プラスチック製品製造工場",
    problem: "射出成型機の金型冷却チラーの冷却水汚れ・配管・金型の詰まり",
    result: "15日後に配管・金型への詰まりが減少",
    days: "15日",
  },
  {
    industry: "自動車工場",
    problem: "チラー設備内の金網フィルターへのスライム大量付着（2週間に1回清掃が必要）",
    result: "フィルターへのスライム付着量が顕著に減少",
    days: "設置後",
  },
  {
    industry: "機械製造工場",
    problem: "設備へのスケール付着",
    result: "7ヶ月後にCMFへ平均40g（約20%）のスケール吸着を確認",
    days: "7ヶ月",
  },
  {
    industry: "電子部品工場",
    problem: "藻・サビ・悪臭",
    result: "1ヶ月後にTDS・導電率が大幅低下、水質改善・悪臭減少を確認",
    days: "1ヶ月",
  },
  {
    industry: "自動車部品メーカーH社（山梨県）",
    problem: "スライム・サビ系汚れで月1回の清掃が必要",
    result: "1ヶ月で茶色い汚れが消滅。7ヶ月経過後もクリーンな状態を維持",
    days: "7ヶ月",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } },
};

export default function CmFiberCassettePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div>
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-teal-50/30" />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="container relative z-10">
            <MotionDiv className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {["ノンケミカル", "動力源不要", "日本製", "再利用可能"].map((badge) => (
                  <span key={badge} className="inline-block px-3 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3">
                CM Fiber Cassette
              </h1>
              <p className="text-lg font-semibold text-teal-700 mb-4">冷水チラー設備用ノンケミカル洗浄カセット</p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                循環水に置くだけ。スケール・藻類・細菌類をノンケミカルで除去。
                電気工事不要、薬剤不要のシンプルな水質管理ソリューションです。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 h-12 text-base font-medium rounded-md transition-colors no-underline"
              >
                お問い合わせ <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </MotionDiv>
          </div>
        </section>

        {/* 製品概要 */}
        <section className="py-24 bg-white">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-600 mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">製品概要</h2>
            </MotionDiv>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              <MotionDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  CM Fiber Cassetteは、冷水チラー設備や冷却塔内の循環水中に置くだけで、スケール・藻類・細菌類を除去するノンケミカル洗浄カセットです。
                  動力源・電気工事・薬剤は一切不要。設備の水槽タンク内に沈めるだけで効果を発揮します。
                </p>
                <ul className="space-y-3">
                  {[
                    "動力源不要・電気工事不要・沈めるだけの簡単設置",
                    "化学薬剤不使用（食品工場・医療施設にも対応）",
                    "再利用可能：2〜3ヶ月に一度の高圧洗浄で最大1年利用",
                    "水量1L：CMF1g が設置量の目安",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionDiv>

              <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 space-y-4">
                  <h3 className="font-bold text-foreground text-base mb-4">製品情報</h3>
                  {[
                    { label: "特許番号",     value: "第7738284号" },
                    { label: "開発・発売元", value: "株式会社SML-Technology" },
                    { label: "製造元",       value: "株式会社荻野製作所" },
                    { label: "販売代理店",   value: "ELSソリューションズ株式会社" },
                    { label: "原産国",       value: "日本" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 text-sm border-b border-teal-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-semibold text-foreground shrink-0">{row.label}</span>
                      <span className="text-muted-foreground text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* 4つの特長 */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-600 mb-3">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">4つの特長</h2>
            </MotionDiv>

            <MotionDiv
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((f, i) => (
                <MotionDiv key={i} variants={fadeInUp}>
                  <div className="bg-white hover:bg-teal-50/50 transition-colors h-full rounded-xl p-6 border border-border/30 shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-5">
                      <f.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* 製品規格テーブル */}
        <section className="py-24 bg-white">
          <div className="container">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-600 mb-3">Specifications</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">製品規格</h2>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {/* タイプ比較 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                {[
                  {
                    name: "CMFC-S",
                    color: "bg-teal-600",
                    role: "スケール・サビ等の析出による除去",
                    desc: "スケール・サビ・析出物をCMFに吸着させ、設備や配管を保護します。",
                  },
                  {
                    name: "CMFC-A",
                    color: "bg-teal-700",
                    role: "藻類および細菌類の制菌",
                    desc: "藻類・細菌類の繁殖を抑制し、水質の清潔さを維持します。",
                  },
                ].map((t, i) => (
                  <div key={i} className="border border-border/50 shadow-md rounded-xl overflow-hidden">
                    <div className={`${t.color} text-white px-6 py-4`}>
                      <p className="text-xl font-bold">{t.name}</p>
                      <p className="text-sm text-white/80 mt-1">{t.role}</p>
                    </div>
                    <div className="p-6 bg-white">
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 共通仕様 */}
              <div className="max-w-3xl mx-auto border border-border/50 shadow-lg rounded-xl overflow-hidden">
                <div className="bg-teal-50 px-6 py-3 border-b border-teal-200">
                  <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider">共通仕様（CMFC-S / CMFC-A）</p>
                </div>
                <table className="w-full">
                  <tbody>
                    {specCommon.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground w-2/5">{row.label}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* 設置方法 */}
        <section className="py-24 bg-secondary/30">
          <div className="container max-w-4xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-600 mb-3">Installation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">設置方法</h2>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="bg-white rounded-xl border border-teal-200 p-6 h-full">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-teal-600" />
                    水量の目安
                  </h3>
                  <div className="space-y-3">
                    {[
                      { water: "水量 1L", cmf: "CMF 1g" },
                      { water: "水量 200L", cmf: "1カセット（200g）" },
                      { water: "水量 600L", cmf: "3カセット（600g）" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between bg-teal-50 rounded-lg px-4 py-3 text-sm">
                        <span className="font-semibold text-foreground">{row.water}</span>
                        <ArrowRight className="w-4 h-4 text-teal-400 shrink-0" />
                        <span className="text-teal-700 font-medium">{row.cmf}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="bg-white rounded-xl border border-teal-200 p-6 h-full">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-teal-600" />
                    設置手順
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "CMFCをロープや結束バンドで設備内に固定できる状態にする",
                      "設備の貯水槽・水槽タンク内の溜水にCMFCを沈める",
                      "設置完了。効果は設置直後から発揮されます",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* メンテナンス3ステップ */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-600 mb-3">Maintenance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">メンテナンス</h2>
              <p className="text-muted-foreground">2〜3ヶ月に一度実施することで最大1年間ご利用いただけます。</p>
            </MotionDiv>

            <MotionDiv
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { step: "Step 1", title: "取り出し",   desc: "CMFCを設備の貯水槽から取り出す。",                         icon: RefreshCw },
                { step: "Step 2", title: "高圧洗浄",   desc: "取り出したCMFCの表面に付着した汚れを高圧洗浄機で洗い流す。", icon: Droplets },
                { step: "Step 3", title: "脱水・再設置", desc: "洗浄後のCMFの水を絞り、軽く脱水してから設備に再設置する。", icon: CheckCircle },
              ].map((s, i) => (
                <MotionDiv key={i} variants={fadeInUp}>
                  <div className="relative bg-teal-50 border border-teal-200 rounded-xl p-6 h-full">
                    <span className="text-xs font-bold text-teal-500 tracking-widest uppercase">{s.step}</span>
                    <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center my-3">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    {i < 2 && (
                      <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-400 hidden md:block" />
                    )}
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* 導入事例 */}
        <section className="py-24 bg-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
          <div className="container relative z-10">
            <MotionDiv className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-200 mb-3">Case Studies</p>
              <h2 className="text-3xl md:text-4xl font-bold">導入事例</h2>
            </MotionDiv>

            <MotionDiv
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {cases.map((c, i) => (
                <MotionDiv key={i} variants={fadeInUp}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Factory className="w-4 h-4 text-teal-300 shrink-0" />
                      <span className="text-sm font-semibold text-white">{c.industry}</span>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-1">課題</p>
                      <p className="text-sm text-white/80 leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-white/20">
                      <p className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-1">
                        効果（{c.days}）
                      </p>
                      <p className="text-sm text-white leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container max-w-3xl">
            <MotionDiv className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-teal-600 mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">よくある質問</h2>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="divide-y divide-border/50 border border-border/50 rounded-xl overflow-hidden">
                {faqItems.map((item, i) => (
                  <details key={i} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-teal-50/50 transition-colors">
                      <span className="font-semibold text-foreground text-sm md:text-base">
                        Q{i + 1}. {item.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-teal-600 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                    </summary>
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-teal-300 pl-4">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                まずはお気軽にご相談ください
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                設備の水量・用途に応じた最適なプランをご提案します。
                サンプルのご提供・お見積もりも承っております。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white hover:bg-teal-50 text-teal-700 border border-teal-600 px-10 h-12 text-base font-semibold rounded-md no-underline">
                  資料請求はこちら
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-10 h-12 text-base font-medium rounded-md transition-colors no-underline">
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
