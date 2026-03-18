import { NextRequest, NextResponse } from "next/server";
import { getPool, initDB } from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, contactName, email, message } = body;

    if (!companyName || !contactName || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください（会社名、お名前、メールアドレス、お問い合わせ内容）" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    if (process.env.DATABASE_URL) {
      await initDB();
      const db = getPool();
      await db.execute(
        `INSERT INTO inquiries (companyName, department, position, contactName, contactNameKana, email, phone, productName, message)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          body.companyName,
          body.department || null,
          body.position || null,
          body.contactName,
          body.contactNameKana || null,
          body.email,
          body.phone || null,
          body.productName || null,
          body.message,
        ]
      );
    }

    // メール通知送信
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "info@els-solutions.co.jp",
        subject: `【お問い合わせ】${companyName} ${contactName}様より`,
        html: `
          <h2>ELSソリューションズ お問い合わせ通知</h2>
          <table border="1" cellpadding="8" style="border-collapse:collapse;">
            <tr><td><strong>会社名</strong></td><td>${companyName}</td></tr>
            <tr><td><strong>部署</strong></td><td>${body.department || "-"}</td></tr>
            <tr><td><strong>役職</strong></td><td>${body.position || "-"}</td></tr>
            <tr><td><strong>お名前</strong></td><td>${contactName}</td></tr>
            <tr><td><strong>メールアドレス</strong></td><td>${email}</td></tr>
            <tr><td><strong>電話番号</strong></td><td>${body.phone || "-"}</td></tr>
            <tr><td><strong>製品</strong></td><td>${body.productName || "-"}</td></tr>
            <tr><td><strong>お問い合わせ内容</strong></td><td>${message}</td></tr>
          </table>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "送信中にエラーが発生しました。しばらく経ってから再度お試しください。" },
      { status: 500 }
    );
  }
}