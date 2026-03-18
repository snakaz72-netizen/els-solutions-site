"use client";

import { useState } from "react";
import {
  MapPin, Phone, Mail, Send, Loader2, CheckCircle,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

interface FormData {
  companyName: string;
  department: string;
  position: string;
  contactName: string;
  contactNameKana: string;
  email: string;
  phone: string;
  productName: string;
  message: string;
}

const initialForm: FormData = {
  companyName: "",
  department: "",
  position: "",
  contactName: "",
  contactNameKana: "",
  email: "",
  phone: "",
  productName: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "送信に失敗しました");
      }

      setIsSuccess(true);
      setForm(initialForm);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "送信に失敗しました");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container relative z-10">
          <MotionDiv
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              お問い合わせ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              製品に関するご質問、導入のご相談、お見積りのご依頼など、
              お気軽にお問い合わせください。
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <MotionDiv
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSuccess ? (
                <div className="border border-border/50 shadow-md rounded-lg p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    お問い合わせを受け付けました
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    お問い合わせいただきありがとうございます。
                    <br />
                    内容を確認の上、担当者より2営業日以内にご連絡いたします。
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-10 text-sm font-medium rounded-md transition-colors"
                  >
                    新しいお問い合わせ
                  </button>
                </div>
              ) : (
                <div className="border border-border/50 shadow-md rounded-lg">
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-foreground mb-6">
                      お問い合わせフォーム
                    </h3>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            会社名 <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            required
                            placeholder="例：株式会社○○"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            部署名
                          </label>
                          <input
                            name="department"
                            value={form.department}
                            onChange={handleChange}
                            placeholder="例：経営企画部"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            役職
                          </label>
                          <input
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            placeholder="例：部長"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            お名前 <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="contactName"
                            value={form.contactName}
                            onChange={handleChange}
                            required
                            placeholder="例：山田 太郎"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          お名前（フリガナ）
                        </label>
                        <input
                          name="contactNameKana"
                          value={form.contactNameKana}
                          onChange={handleChange}
                          placeholder="例：ヤマダ タロウ"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            メールアドレス <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="例：yamada@example.com"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            電話番号
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="例：03-1234-5678"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          ご関心のある製品
                        </label>
                        <select
                          name="productName"
                          value={form.productName}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">選択してください</option>
                          <option value="RECOPALLET">RECOPALLET（環境配慮型パレット）</option>
                          <option value="CONTINEWM">CONTINEWM（省エネフィルター）</option>
                          <option value="both">両方</option>
                          <option value="other">その他</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="お問い合わせ内容をご記入ください"
                          className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium rounded-md transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            送信中...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            送信する
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </MotionDiv>

            {/* Sidebar */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="border border-border/50 shadow-md rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">連絡先情報</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">所在地</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        〒279-0023<br />千葉県浦安市高洲4-3-1-1527
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">電話番号</p>
                      <p className="text-sm text-muted-foreground">(047) 301-9376</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">メールアドレス</p>
                      <a
                        href="mailto:info@els-solutions.co.jp"
                        className="text-sm text-primary hover:underline"
                      >
                        info@els-solutions.co.jp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border/50 shadow-md bg-secondary/30 rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  お問い合わせについて
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  お問い合わせいただいた内容は、通常2営業日以内にご返信いたします。
                  お急ぎの場合は、お電話でのお問い合わせもお受けしております。
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
