import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, MapPin, Phone, Mail, Building2,
  User, Calendar, Briefcase, Package, Store,
  TreePine, Zap, Layers,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "会社概要｜ELSソリューションズ株式会社",
  description: "ELSソリューションズ株式会社の会社概要。代表取締役：中澤俊輔。千葉県浦安市拠点。ESG・サステナビリティ関連製品の販売代理店。",
};

const companyRows = [
  { Icon: Building2,  label: "会社名",         value: "ELSソリューションズ株式会社" },
  { Icon: User,       label: "代表取締役",      value: "中澤俊輔" },
  { Icon: Calendar,   label: "設立",            value: "2026年4月2日" },
  { Icon: MapPin,     label: "所在地",          value: "〒279-0023 千葉県浦安市高洲4-3-1-1527" },
  { Icon: Phone,      label: "電話番号",        value: "047-301-9376" },
  { Icon: Mail,       label: "メールアドレス",   value: "info@els-solutions.co.jp" },
  { Icon: Briefcase,  label: "事業内容",        value: "ESG・サステナビリティ関連製品の販売代理店" },
  { Icon: Package,    label: "取扱製品",        value: "RECO PALLET・CONTINEWM・CM Fiber Cassette" },
  { Icon: Store,      label: "取引形態",        value: "BtoB（法人向け）" },
];

const products = [
  {
    href: "/products/recopallet",
    name: "RECO PALLET",
    badge: "ESGスコープ3対応",
    desc: "ヤシ殻×バイオマス廃材製エコパレット。農業廃棄物を原料に森林破壊ゼロ。製造工場は太陽光発電100%使用。",
    icon: TreePine,
    badgeColor: "bg-emerald-100 text-emerald-700",
    btnColor:   "border-emerald-300 text-emerald-700 hover:bg-emerald-50",
    iconBg:     "bg-emerald-100",
    iconColor:  "text-emerald-600",
  },
  {
    href: "/products/continewm",
    name: "CONTINEWM",
    badge: "ESGスコープ2対応",
    desc: "空調省エネシート。エアコンのフィルターに置くだけで消費電力を削減。日米特許取得済み・国内約8,000箇所導入。",
    icon: Zap,
    badgeColor: "bg-blue-100 text-blue-700",
    btnColor:   "border-blue-300 text-blue-700 hover:bg-blue-50",
    iconBg:     "bg-blue-100",
    iconColor:  "text-blue-600",
  },
  {
    href: "/products/cm-fiber-cassette",
    name: "CM Fiber Cassette",
    badge: "ノンケミカル",
    desc: "冷水チラー用洗浄カセット。循環水に置くだけでスケール・藻類・細菌類を除去。動力源不要・再利用可能。",
    icon: Layers,
    badgeColor: "bg-teal-100 text-teal-700",
    btnColor:   "border-teal-300 text-teal-700 hover:bg-teal-50",
    iconBg:     "bg-teal-100",
    iconColor:  "text-teal-600",
  },
];

const messageParagraphs = [
  "環境問題は、遠い未来の話ではありません。企業が今日の調達・設備・運営を見直すことで、確実にCO₂削減に貢献できる時代が来ています。",
  "ELSソリューションズは、ESGに真剣に取り組む企業の皆様に、導入しやすく効果の実感できる製品をお届けすることをミッションとしています。",
  "RECO PALLET・CONTINEWM・CM Fiber Cassetteの3製品は、いずれも『置くだけ』『切り替えるだけ』で始められる、ハードルの低いESG対応ソリューションです。",
  "一緒に、持続可能な未来をつくりましょう。",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv className="max-w-2xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              会社概要
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
              ELSソリューションズ株式会社
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <MotionDiv
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Message</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">代表メッセージ</h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border/30">
              <div className="border-l-4 border-primary pl-6 md:pl-8 space-y-5 mb-8">
                {messageParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed text-foreground/80 ${
                      i === messageParagraphs.length - 1
                        ? "text-lg font-semibold text-primary"
                        : "text-base"
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-0.5">Representative Director</p>
                  <p className="font-bold text-foreground">代表取締役　中澤俊輔</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* 会社情報テーブル */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <MotionDiv
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Company Information</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">会社情報</h2>
          </MotionDiv>

          <MotionDiv
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-border/50 shadow-lg overflow-hidden rounded-xl">
              <table className="w-full">
                <tbody>
                  {companyRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                      <td className="px-6 py-4 w-2/5 md:w-1/3">
                        <div className="flex items-center gap-3">
                          <row.Icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm font-semibold text-foreground">{row.label}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* 取扱製品 */}
      <section className="py-24 bg-white">
        <div className="container">
          <MotionDiv
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">取扱製品</h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((p, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="h-full border border-border/50 shadow-md hover:shadow-lg transition-shadow rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${p.iconBg} flex items-center justify-center shrink-0`}>
                      <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                    {p.desc}
                  </p>
                  <Link
                    href={p.href}
                    className={`inline-flex items-center border px-4 py-2 rounded-md text-sm font-medium transition-colors no-underline ${p.btnColor}`}
                  >
                    詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              ご質問・お見積もりはお気軽にどうぞ
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              製品に関するご質問、導入のご相談、お見積もり依頼など、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-10 h-12 text-base font-semibold rounded-md transition-colors no-underline"
            >
              お問い合わせはこちら <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
