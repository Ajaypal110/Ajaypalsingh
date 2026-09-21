import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message, topic } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: 'Message too short.' }, { status: 400 })
    }

    const subject = `[ajaypalsingh.in] ${topic || 'New message'} from ${name.trim()}`

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#F7F7F5;border-radius:16px">
        <div style="background:#1F2AD6;border-radius:12px;padding:24px 28px;margin-bottom:28px">
          <h1 style="margin:0;color:#F7F7F5;font-size:22px;font-weight:600">New message from ajaypalsingh.in</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr>
            <td style="padding:10px 0;color:#5A5F7A;font-size:13px;width:90px">Topic</td>
            <td style="padding:10px 0;color:#0F1330;font-size:15px;font-weight:600">${topic || 'General'}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#5A5F7A;font-size:13px">From</td>
            <td style="padding:10px 0;color:#0F1330;font-size:15px">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#5A5F7A;font-size:13px">Reply to</td>
            <td style="padding:10px 0;font-size:15px">
              <a href="mailto:${email.trim()}" style="color:#1F2AD6">${email.trim()}</a>
            </td>
          </tr>
        </table>
        <div style="background:#fff;border-radius:12px;padding:24px;border:1px solid #DADCE8">
          <p style="margin:0 0 8px;color:#5A5F7A;font-size:13px">Message</p>
          <p style="margin:0;color:#0F1330;font-size:16px;line-height:1.7;white-space:pre-wrap">${message.trim()}</p>
        </div>
        <p style="margin:24px 0 0;color:#8A8FB0;font-size:12px;text-align:center">
          Hit Reply to respond directly to ${name.trim()}.
        </p>
      </div>
    `

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ajaypalsingh82775@gmail.com',
      replyTo: email.trim(),
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route] send error:', err)
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
  }
}
