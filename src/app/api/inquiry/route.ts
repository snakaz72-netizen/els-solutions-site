import { NextRequest, NextResponse } from "next/server";
import { getPool, initDB } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { companyName, contactName, email, message } = body;
    if (!companyName || !contactName || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください（会社名、お名前、メールアドレス、お問い合わせ内容）" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // Check if DATABASE_URL is configured
    if (!process.env.DATABASE_URL) {
      // If no DB configured, log to console and return success
      // This allows the form to work even without a database
      console.log("=== New Inquiry (no DB configured) ===");
      console.log(JSON.stringify(body, null, 2));
      return NextResponse.json({
        success: true,
        message: "お問い合わせを受け付けました。（注意: データベース未設定のため、ログのみに記録されています）",
      });
    }

    // Initialize DB table if needed
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
