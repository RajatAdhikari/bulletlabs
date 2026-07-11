import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const details = (body.details || "").trim();

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Invalid name" }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }
  if (phone.length < 5 || phone.length > 20) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 422 });
  }
  if (!details || details.length > 5000) {
    return NextResponse.json({ error: "Invalid details" }, { status: 422 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const received = new Date().toUTCString();

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: [process.env.NOTIFY_EMAIL],
      subject: `New Lead: ${name} — Boltlabs`,
      html: `
        <table width='100%' cellpadding='0' cellspacing='0' style='background:#0a0a0a;padding:32px;font-family:Arial,sans-serif;'>
          <tr><td>
            <table width='600' cellpadding='0' cellspacing='0' style='margin:0 auto;background:#141414;border-radius:12px;padding:32px;color:#ffffff;'>
              <tr><td style='font-size:20px;font-weight:bold;color:#B26CE8;padding-bottom:16px;'>&#9889; New Lead — Boltlabs</td></tr>
              <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>NAME</td></tr>
              <tr><td style='padding-bottom:12px;font-size:16px;'>${name}</td></tr>
              <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>EMAIL</td></tr>
              <tr><td style='padding-bottom:12px;font-size:16px;'><a href='mailto:${email}' style='color:#B26CE8;'>${email}</a></td></tr>
              <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>PHONE</td></tr>
              <tr><td style='padding-bottom:12px;font-size:16px;'><a href='tel:${phone}' style='color:#B26CE8;'>${phone}</a></td></tr>
              <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>PROJECT DETAILS</td></tr>
              <tr><td style='font-size:15px;line-height:1.6;'>${details.replace(/</g, "&lt;")}</td></tr>
              <tr><td style='padding-top:24px;color:#71717a;font-size:12px;'>Received ${received}</td></tr>
            </table>
          </td></tr>
        </table>
      `,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
