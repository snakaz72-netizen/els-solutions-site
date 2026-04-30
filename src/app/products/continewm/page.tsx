import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Zap, Wind, Thermometer, Wrench, Shield, Leaf,
  Factory, Snowflake, AirVent,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "CONTINEWM - 省エネフィルター",
  description: "特殊天然鉱物を練り込んだフィルターをエアコンに設置するだけで、静電気を除去し消費電力を削減。日米で特許を取得した革新的な省エネソリューション。",
};

export default function ContinewmPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-blue-50/30" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">省エネフィルター</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">CONTINEWM</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              特殊天然鉱物を練り込んだフィルターをエアコンに設置するだけで、
              静電気を除去し消費電力を削減。日米で特許を取得した革新的な省エネソリューションです。
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
              { step: "01", title: "CONTINEWMが空気のプラス帯電を解消", Icon: Zap, color: "bg-blue-50 text-blue-600" },
              { step: "02", title: "エアコンの熱交換効率を回復", Icon: Thermometer, color: "bg-blue-100 text-blue-700" },
              { step: "03", title: "設定温度に早く到達し長時間キープ", Icon: Snowflake, color: "bg-blue-200/60 text-blue-700" },
              { step: "04", title: "コンプレッサーの稼働が緩やかに", Icon: Wind, color: "bg-blue-300/50 text-blue-800" },
              { step: "05", title: "省エネ・CO₂削減を実現", Icon: Leaf, color: "bg-emerald-100 text-emerald-700" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">製品仕様</h2>
          </MotionDiv>

          <MotionDiv className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="border border-border/50 shadow-lg overflow-hidden rounded-lg">
              <table className="w-full">
                <tbody>
                  {[
                    { label: "製品名", value: "CONTINEWM（コンティニューム）" },
                    { label: "サイズ", value: "約49cm × 48cm × 厚み2.5mm" },
                    { label: "重量", value: "約200g" },
                    { label: "色", value: "ダークブラウン" },
                    { label: "柄", value: "ハニカム（最大幅16.97mm、最小幅14.7mm）" },
                    { label: "材質", value: "特殊天然鉱物 / 低密度ポリエチレン" },
                    { label: "原産国", value: "日本（東証スタンダード上場企業の日本国内工場）" },
                    { label: "特許番号", value: "日本: 第6486409号 / 米国: US 11846437 B2, US 12098853 B2" },
                    { label: "意匠登録", value: "第1597440号" },
                    { label: "製造・販売元", value: "コンティニューム株式会社" },
                    { label: "販売開始", value: "2016年4月" },
                    { label: "設置方法", value: "フィルターの上に乗せるだけ（工事不要）" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                      <td className="px-6 py-4 text-sm font-medium text-foreground w-1/3">{row.label}</td>
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
              { icon: Wrench, title: "簡単設置", subtitle: "Easy Installation", description: "機器の改造や電源停止は不要で、誰でもすぐに取付け可能。フィルターの上に乗せるだけなので導入がとても簡単です。" },
              { icon: Shield, title: "長持ち設計", subtitle: "Long Lasting", description: "柔軟で軽い素材を使用しているため壊れにくく、取付け後のお手入れも簡単。維持費がかからず経済的です。" },
              { icon: Leaf, title: "省エネ実現", subtitle: "Save Energy", description: "静電気による気流の乱れを整え、エアコンの熱交換効率を回復。電気や動力を使わず、CO₂排出量の削減にも貢献します。" },
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
              <div className="h-full border border-border/50 shadow-md rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <AirVent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">熱交換器の埃付着軽減</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CONTINEWMにより空気の帯電が解消されると、埃が吸着しにくくなります。
                  その結果、エアコンは本来の熱交換効率を取り戻し、消費電力の無駄をなくします。
                </p>
              </div>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="h-full border border-border/50 shadow-md rounded-lg p-8">
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
              { Icon: AirVent, name: "天井カセット型 4方向" },
              { Icon: AirVent, name: "天井カセット型 2方向" },
              { Icon: AirVent, name: "天吊り型" },
              { Icon: AirVent, name: "ルームエアコン" },
              { Icon: Factory, name: "床置き型" },
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

      {/* Track Record */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-3">Our Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">活動実績</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              CONTINEWMは上場企業をはじめとする多くの企業で導入されています。
              日本国内 約8,000箇所以上で導入済み（2025年8月現在）
            </p>
          </MotionDiv>

          <MotionDiv className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {[
              "池田模範堂", "壱番屋（CoCo壱番屋）", "宇佐美鉱油", "NTT東日本",
              "ゲオストア", "コカ・コーラBJC", "コジマ×ビックカメラ", "小松製作所",
              "コープさっぽろ", "セカンドストリート", "損害保険ジャパン", "大和ライフネクスト",
              "東急百貨店", "トヨタ博物館", "富山住友電工", "デンソー",
              "日本空調サービス", "プロントコーポレーション", "明治",
            ].map((company, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                <span className="text-sm text-primary-foreground/80">{company}</span>
              </div>
            ))}
          </MotionDiv>
          <p className="text-xs text-primary-foreground/40 text-center mt-6">※一部抜粋（順不同）</p>
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
             href="https://reco-catalog-2026.my.canva.site/continewm-25-8-pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 border border-blue-600 px-10 h-12 text-base font-semibold rounded-md mb-4"
>
  📄 詳細資料はこちら
</a>
            <Link href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-12 text-base font-medium rounded-md transition-colors no-underline">
              お問い合わせ <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
