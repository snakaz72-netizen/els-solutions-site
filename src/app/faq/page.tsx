import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, TreePine, Zap, Layers } from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）｜ESG・製品・お問い合わせ｜ELSソリューションズ",
  description: "ESGスコープ1・2・3の違い、カーボンニュートラルの意味、各製品についてのよくある質問をまとめています。",
  alternates: { canonical: "https://els-solutions.co.jp/faq" },
};

const categories = [
  {
    id: "esg",
    label: "ESG・サステナビリティ基礎知識",
    color: "emerald",
    items: [
      { q: "ESGとは何ですか？", a: "Environment（環境）・Social（社会）・Governance（企業統治）の頭文字。企業が持続可能な経営を行うための3つの評価軸です。投資家・取引先・消費者からESGへの取り組みを求められるケースが増えています。" },
      { q: "スコープ1・スコープ2・スコープ3の違いは何ですか？", a: "スコープ1は自社の直接排出（自社工場・車両等）。スコープ2は電力等のエネルギー使用による間接排出。スコープ3は調達・物流・廃棄等のサプライチェーン全体の排出です。" },
      { q: "カーボンニュートラルとは何ですか？", a: "CO₂をはじめとする温室効果ガスの排出量と吸収量を均衡させ、実質ゼロにすること。日本政府は2050年カーボンニュートラルを目標に掲げています。" },
      { q: "ELSソリューションズの製品はESGのどの分野に対応していますか？", a: "RECO PALLETはスコープ3カテゴリー1（調達品からの排出削減）、CONTINEWMはスコープ2（電力使用量削減）に対応。CM Fiber Cassetteは設備効率維持・薬剤削減による環境負荷軽減に貢献します。" },
      { q: "スコープ3のカテゴリー1とは何ですか？", a: "スコープ3は15のカテゴリーに分類されており、カテゴリー1は「購入した製品・サービス」からの排出です。原材料や部品・消耗品の調達に伴うCO₂排出量が対象となります。パレットをRECO PALLETに切り替えるだけでこのカテゴリーの削減量をESGレポートに計上できます。" },
      { q: "バイオマスとは何ですか？", a: "生物由来の有機性資源のことです。木材・農業廃棄物・食品廃棄物などが含まれます。化石燃料と異なり、燃焼時に排出するCO₂は植物が成長過程で吸収したものとみなされるため、カーボンニュートラルな資源として評価されています。" },
      { q: "ESGレポートにCO₂削減量を記載するにはどうすればよいですか？", a: "製品導入後の削減量算出データをELSソリューションズがご提供します。パレット切替枚数・エアコン台数・電力削減実績をもとに算出し、GHGプロトコルに準拠した形式でご提出可能です。" },
      { q: "カーボンオフセットとカーボンニュートラルの違いは何ですか？", a: "カーボンオフセットは排出したCO₂を他の場所での削減・吸収で相殺すること。カーボンニュートラルは排出量と吸収量を合計でゼロにすること。ELSの製品は排出そのものを削減するアプローチであり、オフセットに頼らない実質的な削減を実現します。" },
    ],
  },
  {
    id: "recopallet",
    label: "RECO PALLET（バイオマスパレット）",
    color: "emerald",
    items: [
      { q: "RECO PALLETはどんな製品ですか？", a: "ベトナム産のヤシ殻50%＋バイオマス廃材（ウッドチップ）50%から製造した環境配慮型物流パレットです。木材を一切使用せず、製造工場は太陽光発電100%で稼働。製造時のCO₂排出量は実質ほぼゼロです。" },
      { q: "木製パレットやプラスチックパレットと何が違いますか？", a: "木製パレットは森林破壊の原因となり、プラスチックパレットは石油由来でCO₂排出が多いという課題があります。RECO PALLETは農業廃棄物を原料とするため森林破壊ゼロ、製造時CO₂排出実質ゼロを実現します。廃棄後はバイオマス発電燃料として再利用できる点も大きな違いです。" },
      { q: "RECO PALLETはどのくらいの強度がありますか？", a: "シングルタイプで動的負荷1,000〜1,250kg・静的負荷3,000kg、ダブルタイプで動的負荷1,250kg・静的負荷4,500kgです。過酷な物流現場にも対応できる高強度を備えています。" },
      { q: "RECO PALLETは輸出に使えますか？", a: "はい。200℃の高温プレス加工で製造されるためISPM15（木材梱包材の植物検疫規制）の免除認証を取得済みです。輸出時の燻蒸処理が不要で、通関をスムーズに行えます。" },
      { q: "RECO PALLETの耐水性・耐温度はどのくらいですか？", a: "水洗い可能で清掃が容易です。対応温度は−50〜150℃と幅広く、冷凍・冷蔵物流から高温環境まで対応できます。" },
      { q: "RECO PALLETを廃棄するにはどうすればよいですか？", a: "日本国内ではバイオマス発電の燃料として再利用できます。2023年1月にFIT認定を取得しており、廃棄パレットの回収は専門業者が対応します。廃棄してもCO₂を排出しないサーキュラーエコノミーを実現しています。" },
      { q: "最小発注数量（MOQ）はどのくらいですか？", a: "40フィートコンテナ（40\"HC）単位での発注となります。シングルタイプは1,500枚〜、ダブルタイプは360〜396枚（組立済）が目安です。" },
      { q: "保管スペースはどのくらい削減できますか？", a: "ネスティング（積み重ね）設計により、通常パレット比で最大約70%の保管スペース削減が可能です。倉庫の有効活用にもつながります。" },
    ],
  },
  {
    id: "continewm",
    label: "CONTINEWM（空調省エネシート）",
    color: "blue",
    items: [
      { q: "CONTINEWMとはどんな製品ですか？", a: "エアコンのフィルターに乗せるだけで消費電力を削減する空調省エネシートです。特殊天然鉱物の物性でエアコン内部の静電気を抑制し、熱交換効率を回復させます。工事不要・電源停止不要で設置できます。" },
      { q: "CONTINEWMはどのくらい電力を削減できますか？", a: "設置環境によりますが、目安として空調電力の約10%削減が期待できます。正確な効果は現地調査・電力計測にてご確認いただけます。" },
      { q: "CONTINEWMの設置に工事は必要ですか？", a: "工事は不要です。エアコンのフィルターの上に乗せるだけで設置完了です。電源停止も不要なため、営業時間中でも設置できます。" },
      { q: "CONTINEWMはどんなエアコンに使えますか？", a: "天井カセット型（4方向・2方向）・天吊り型・ルームエアコン・床置き型・冷蔵冷凍庫まで6タイプに対応しています。サイズに合わせてカットも可能です。" },
      { q: "CONTINEWMはどのくらいの期間使えますか？", a: "半永久的に使用可能です。電気や動力を使わない受動的な製品のため消耗しません。一度設置すれば交換不要でコスト削減が継続します。" },
      { q: "CONTINEWMの省エネ以外の効果はありますか？", a: "熱交換器・フィルターへの埃付着が軽減され、空気中の浮遊粉塵が約28%減少します（東京都内ビルでの実測値）。ニオイ軽減効果も多数報告されています。メンテナンス頻度も下がるため管理コストの削減にもつながります。" },
      { q: "CONTINEWMの導入実績はありますか？", a: "国内約8,000箇所以上に導入済み（2025年8月現在）。NTT東日本・デンソー・コカ・コーラボトラーズジャパン・株式会社明治など上場企業を含む多数の企業で採用されています。" },
      { q: "CONTINEWMはESGのどのスコープに対応しますか？", a: "スコープ2（エネルギーの間接排出）に対応します。電力使用量を削減することでCO₂排出量が減り、その削減量をESGレポートのスコープ2として計上できます。" },
    ],
  },
  {
    id: "cmfiber",
    label: "CM Fiber Cassette（冷水チラー用洗浄カセット）",
    color: "teal",
    items: [
      { q: "CM Fiber Cassetteとはどんな製品ですか？", a: "冷水チラー設備や冷却塔の循環水中に置くだけでスケール・藻類・細菌類を除去するノンケミカル洗浄カセットです。動力源・電気工事・薬剤は一切不要で、設備の水槽タンク内に沈めるだけで効果を発揮します。" },
      { q: "CM Fiber Cassetteはどんな設備に使えますか？", a: "冷水チラーの水槽タンクと冷却塔が主な利用先です。射出成型機冷却・エンジン塗装ライン冷却・食品製造設備など幅広い業種で導入実績があります。" },
      { q: "CM Fiber Cassetteは薬剤を使わなくてよいのですか？", a: "はい。特殊天然鉱物Clay Mineralを配合したPP極細ファイバーで、化学薬剤を一切使いません。薬剤使用が制限されている食品工場や医療施設にも対応できます。" },
      { q: "CMFC-SとCMFC-Aの違いは何ですか？", a: "CMFC-Sはスケール・サビ等の析出物除去に特化。CMFC-Aは藻類・細菌類の制菌に特化しています。設備の課題に応じて選択または併用します。" },
      { q: "CM Fiber Cassetteはどのくらいの量が必要ですか？", a: "設備の溜水量に対して水量1L：CMF1gが目安です。溜水200Lなら1カセット（200g）、600Lなら3カセットが目安となります。" },
      { q: "CM Fiber Cassetteはどのくらいの期間使えますか？", a: "概ね1年間使用可能です（水質による）。2〜3ヶ月に一度、高圧洗浄でメンテナンスすることで繰り返し使用できます。" },
      { q: "CM Fiber Cassetteのメンテナンス方法を教えてください。", a: "2〜3ヶ月に一度、設備から取り出して高圧洗浄機で汚れを洗い流し、脱水して再設置します。作業時は手袋・マスク着用を推奨します。特別な技術や資格は不要です。" },
      { q: "CM Fiber Cassetteの導入事例はありますか？", a: "プラスチック製品製造工場では15日後に配管・金型の詰まりが減少。自動車工場ではフィルターへのスライム付着量が顕著に減少。電子部品工場では1ヶ月後にTDS・導電率が大幅低下し水質改善を確認しています。" },
    ],
  },
  {
    id: "company",
    label: "会社・サービスについて",
    color: "blue",
    items: [
      { q: "ELSソリューションズはどんな会社ですか？", a: "千葉県浦安市に拠点を置くESG・サステナビリティ関連製品の販売代理店です。2026年4月設立。RECO PALLET・CONTINEWM・CM Fiber Cassetteの3製品をBtoB向けに販売しています。" },
      { q: "販売エリアはどこですか？", a: "全国対応しています。お問い合わせフォームまたはお電話にてご連絡ください。" },
      { q: "サンプルや試用はできますか？", a: "製品によって対応が異なります。まずはお問い合わせページからご連絡いただければ、担当者よりご案内いたします。" },
      { q: "ESGレポートへの記載はどうすればよいですか？", a: "製品導入後のCO₂削減量・電力削減量の算出データをご提供します。GHGプロトコルに準拠した形式でご提出可能です。" },
      { q: "見積もりはどのように依頼すればよいですか？", a: "お問い合わせページのフォームに製品名・導入規模・設置環境をご記入ください。通常2営業日以内にご返信いたします。" },
      { q: "複数製品をまとめて導入できますか？", a: "はい。RECO PALLET・CONTINEWM・CM Fiber Cassetteを組み合わせることで、スコープ1・2・3をトータルでカバーするESG対策が可能です。まとめてご相談いただけます。" },
      { q: "導入後のサポート体制はどうなっていますか？", a: "導入後の効果測定データの提供・追加発注・メンテナンスに関するご相談など、継続的にサポートいたします。お気軽にお問い合わせください。" },
      { q: "請求書払いや掛売りには対応していますか？", a: "法人のお客様には請求書払いに対応しています。詳細はお問い合わせの際にご確認ください。" },
    ],
  },
];

// JSON-LD: Q1〜Q40 全問
const allItems = categories.flatMap((c) => c.items);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const productLinks = [
  {
    href: "/products/recopallet",
    name: "RECO PALLET",
    desc: "原料・ESGスコープ3・ラインナップ など",
    icon: TreePine,
    color: "emerald",
  },
  {
    href: "/products/continewm",
    name: "CONTINEWM",
    desc: "省エネ効果・設置方法・導入実績 など",
    icon: Zap,
    color: "blue",
  },
  {
    href: "/products/cm-fiber-cassette",
    name: "CM Fiber Cassette",
    desc: "設置量の目安・タイプ選択・メンテナンス など",
    icon: Layers,
    color: "teal",
  },
];

const colorMap: Record<string, { header: string; badge: string; hover: string; chevron: string; border: string }> = {
  emerald: {
    header: "bg-emerald-600 text-white",
    badge:  "bg-emerald-100 text-emerald-700",
    hover:  "hover:bg-emerald-50/60",
    chevron:"text-emerald-600",
    border: "border-emerald-300",
  },
  blue: {
    header: "bg-blue-600 text-white",
    badge:  "bg-blue-100 text-blue-700",
    hover:  "hover:bg-blue-50/60",
    chevron:"text-blue-600",
    border: "border-blue-300",
  },
  teal: {
    header: "bg-teal-600 text-white",
    badge:  "bg-teal-100 text-teal-700",
    hover:  "hover:bg-teal-50/60",
    chevron:"text-teal-600",
    border: "border-teal-300",
  },
};

const productColorMap: Record<string, string> = {
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  blue:    "bg-blue-600 hover:bg-blue-700",
  teal:    "bg-teal-600 hover:bg-teal-700",
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-background" />
          <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          <div className="container relative z-10">
            <MotionDiv className="max-w-2xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                よくある質問
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ESGスコープ1・2・3の違い、カーボンニュートラルの意味、各製品についての
                よくある質問をカテゴリ別にまとめています。
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* カテゴリ別FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-3xl">
            <div className="space-y-12">
              {categories.map((cat, ci) => {
                const c = colorMap[cat.color];
                return (
                  <MotionDiv
                    key={cat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: ci * 0.1 }}
                  >
                    {/* カテゴリヘッダー */}
                    <div className={`${c.header} rounded-t-xl px-6 py-4`}>
                      <h2 className="text-base font-bold">{cat.label}</h2>
                    </div>

                    {/* アコーディオン */}
                    <div className="divide-y divide-border/50 border-x border-b border-border/50 rounded-b-xl overflow-hidden">
                      {cat.items.map((item, i) => {
                        const qNum = ci * 8 + i + 1;
                        return (
                          <details key={i} className="group bg-white">
                            <summary className={`flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none ${c.hover} transition-colors`}>
                              <div className="flex items-center gap-3">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${c.badge}`}>
                                  Q{qNum}
                                </span>
                                <span className="font-semibold text-foreground text-sm md:text-base">
                                  {item.q}
                                </span>
                              </div>
                              <ChevronDown className={`w-5 h-5 shrink-0 ${c.chevron} group-open:rotate-180 transition-transform duration-200`} />
                            </summary>
                            <div className="px-6 pb-5 pt-1 bg-secondary/20">
                              <p className={`text-sm text-muted-foreground leading-relaxed border-l-2 ${c.border} pl-4`}>
                                {item.a}
                              </p>
                            </div>
                          </details>
                        );
                      })}
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </div>
        </section>

        {/* 製品別FAQへのリンク */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container max-w-3xl">
            <MotionDiv
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Product FAQ</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">各製品のFAQはこちら</h2>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {productLinks.map((p, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={p.href}
                    className="flex flex-col h-full bg-white border border-border/50 rounded-xl p-5 hover:shadow-md transition-shadow no-underline group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg ${productColorMap[p.color]} flex items-center justify-center shrink-0 transition-colors`}>
                        <p.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-foreground text-sm">{p.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                      FAQを見る <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ご不明な点はお気軽にご連絡ください
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                FAQで解決しない場合は、お問い合わせフォームまたはお電話にてご相談ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-12 text-base font-medium rounded-md transition-colors no-underline"
              >
                お問い合わせ <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </MotionDiv>
          </div>
        </section>
      </div>
    </>
  );
}
