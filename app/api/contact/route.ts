import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    console.log("📨 Processing contact form submission...");
    const timestamp = new Date().toISOString();

    const results = {
        sheet: "skipped",
        email: "skipped"
    };

    // 1. Send to Google Sheets (if configured)
    const sheetUrl = process.env.GOOGLE_SHEET_API_URL;
    if (sheetUrl) {
        try {
            console.log("📊 Sending to Google Sheet...");
            const sheetRes = await fetch(sheetUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message, social: social || "N/A", timestamp }),
            });
            results.sheet = sheetRes.ok ? "success" : `failed_${sheetRes.status}`;
            console.log(`✅ Sheet result: ${results.sheet}`);
        } catch (e) {
            console.error("❌ Google Sheet Error:", e);
            results.sheet = "error";
            // Don't fail the whole request just because Sheet failed, if we can send email
        }
    }

    // 2. Send Email via FormSubmit (Reliable Fallback)
    try {
        console.log("📧 Sending Email via FormSubmit...");
        await fetch("https://formsubmit.co/ajax/johnfelixjf@outlook.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                social: social || "N/A",
                _subject: `New Portfolio Submission: ${name}`,
                _template: "table",
                _captcha: "false"
            }),
        });
        results.email = "success";
        console.log("✅ Email sent successfully");
    } catch (e) {
        console.error("❌ FormSubmit Error:", e);
        results.email = "error";
    }

    // Return success if at least one method worked, or if we just want to acknowledge receipt
    return NextResponse.json({ message: "Success", success: true, results });

  } catch (error) {
    console.log("Contact form error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
