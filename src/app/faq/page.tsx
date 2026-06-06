import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, TreePine, Zap, Layers } from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）｜ESG・製品・お問い合わせ｜ELSソリューションズ",
  description: "ESGスコープ1・2・3の違い、カーボンニュートラルの意味、各製品についてのよくある質問をまとめています。",
};

const categories = [
  {
    id: "esg",
    label: "ESG・サステナビリティ基礎知識",
    color: "emerald",
    items: [
      {
        q: "ESGとは何ですか？",
        a: "Environment（環境）・Social（社会）・Governance（企業統治）の頭文字。企業が持続可能な経営を行うための3つの評価軸です。投資家・取引先・消費者からESGへの取り組みを求められるケースが増えています。",
      },
      {
        q: "スコープ1・スコープ2・スコープ3の違いは何ですか？",
        a: "スコープ1は自社の直接排出（自社工場・車両等）。スコープ2は電力等のエネルギー使用による間接排出。スコープ3は調達・物流・廃棄等のサプライチェーン全体の排出です。",
      },
      {
        q: "カーボンニュートラルとは何ですか？",
        a: "CO₂をはじめとする温室効果ガスの排出量と吸収量を均衡させ、実質ゼロにすること。日本政府は2050年カーボンニュートラルを目標に掲げています。",
      },
      {
        q: "ELSソリューションズの製品はESGのどの分野に対応していますか？",
        a: "RECO PALLETはスコープ3カテゴリー1（調達品からの排出削減）、CONTINEWMはスコープ2（電力使用量削減）に対応。CM Fiber Cassetteは設備効率維持・薬剤削減による環境負荷軽減に貢献します。",
      },
    ],
  },
  {
    id: "company",
    label: "会社・サービスについて",
    color: "blue",
    items: [
      {
        q: "ELSソリューションズはどんな会社ですか？",
        a: "千葉県浦安市に拠点を置くESG・サステナビリティ関連製品の販売代理店です。2026年4月設立。RECO PALLET・CONTINEWM・CM Fiber Cassetteの3製品をBtoB向けに販売しています。",
      },
      {
        q: "販売エリアはどこですか？",
        a: "全国対応しています。お問い合わせフォームまたはお電話にてご連絡ください。",
      },
      {
        q: "サンプルや試用はできますか？",
        a: "製品によって対応が異なります。まずはお問い合わせページからご連絡いただければ、担当者よりご案内いたします。",
      },
      {
        q: "ESGレポートへの記載はどうすればよいですか？",
        a: "各製品の導入によるCO₂削減量の算出方法についてはお問い合わせください。ESGレポート作成のご支援も承っています。",
      },
    ],
  },
];

// JSON-LD: Q1〜Q8 全問
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
                        const qNum = ci * 4 + i + 1;
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
