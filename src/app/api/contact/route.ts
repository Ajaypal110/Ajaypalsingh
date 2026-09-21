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

    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanMessage = message.trim()
    const cleanTopic = (topic || 'General').trim()
    const firstName = cleanName.split(' ')[0]
    const currentYear = new Date().getFullYear()
    const logoUrl = 'https://raw.githubusercontent.com/Ajaypal110/Ajaypalsingh/main/public/icon-192.png'

    // ─────────────────────────────────────────────────────────────────────────────
    // Template 1: Admin Notification (Delivered to Ajaypal at ajaypalsingh82775@gmail.com)
    // ─────────────────────────────────────────────────────────────────────────────
    const adminSubject = `[Portfolio] ${cleanTopic} from ${cleanName}`
    const replyMailto = `mailto:${cleanEmail}?subject=Re: [ajaypalsingh.in] ${encodeURIComponent(cleanTopic)}`

    const adminHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F4F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F1F4F9;padding:32px 16px;">
    <tr>
      <td align="center">
        <!-- Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;background-color:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(15,23,42,0.06);border:1px solid #E2E8F0;">
          
          <!-- Top Bar Header -->
          <tr>
            <td style="background-color:#0F1330;padding:24px 32px;border-bottom:1px solid #1E234A;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align:middle;padding-right:14px;">
                          <img src="${logoUrl}" alt="APS Logo" width="38" height="38" style="display:block;border-radius:50%;border:2px solid #2B3377;">
                        </td>
                        <td style="vertical-align:middle;">
                          <div style="font-size:15px;font-weight:700;color:#FFFFFF;letter-spacing:0.02em;">Ajaypal Singh</div>
                          <div style="font-size:11px;color:#A5B4FC;letter-spacing:0.06em;text-transform:uppercase;margin-top:2px;">Portfolio Contact System</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background-color:#1F2AD6;color:#FFFFFF;font-size:11px;font-weight:600;padding:5px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:0.05em;">
                      ${cleanTopic}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:700;color:#0F172A;letter-spacing:-0.02em;">
                New message from ${cleanName}
              </h2>
              <p style="margin:0 0 24px 0;font-size:14px;color:#64748B;line-height:1.5;">
                Someone just filled out the contact form on <a href="https://ajaypalsingh.in" style="color:#1F2AD6;text-decoration:none;font-weight:500;">ajaypalsingh.in</a>.
              </p>

              <!-- Sender Info Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom:10px;width:110px;font-size:12px;font-weight:600;color:#64748B;text-transform:uppercase;letter-spacing:0.05em;">From</td>
                        <td style="padding-bottom:10px;font-size:14px;font-weight:600;color:#0F172A;">${cleanName}</td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:10px;width:110px;font-size:12px;font-weight:600;color:#64748B;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
                        <td style="padding-bottom:10px;font-size:14px;font-weight:500;">
                          <a href="mailto:${cleanEmail}" style="color:#1F2AD6;text-decoration:none;">${cleanEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="width:110px;font-size:12px;font-weight:600;color:#64748B;text-transform:uppercase;letter-spacing:0.05em;">Topic</td>
                        <td style="font-size:14px;font-weight:600;color:#0F172A;">${cleanTopic}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Callout Box -->
              <div style="margin-bottom:28px;">
                <div style="font-size:11px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">
                  Message Content
                </div>
                <div style="background-color:#FFFFFF;border:1px solid #CBD5E1;border-left:4px solid #1F2AD6;border-radius:8px;padding:20px 22px;">
                  <p style="margin:0;font-size:15px;line-height:1.65;color:#1E293B;white-space:pre-wrap;word-break:break-word;">${cleanMessage}</p>
                </div>
              </div>

              <!-- Reply Button CTA -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">
                <tr>
                  <td align="center" style="border-radius:10px;background-color:#1F2AD6;">
                    <a href="${replyMailto}" target="_blank" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#FFFFFF;text-decoration:none;border-radius:10px;">
                      Reply to ${cleanName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:12px;color:#94A3B8;line-height:1.5;">
                Tip: You can also hit &ldquo;Reply&rdquo; directly in your email client to respond to ${cleanEmail}.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F8FAFC;padding:20px 32px;border-top:1px solid #E2E8F0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#64748B;">
                Sent from <a href="https://ajaypalsingh.in" style="color:#1F2AD6;text-decoration:none;font-weight:500;">ajaypalsingh.in</a> &bull; Portfolio Form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    // ─────────────────────────────────────────────────────────────────────────────
    // Template 2: Auto-Reply to Visitor (Delivered to cleanEmail)
    // ─────────────────────────────────────────────────────────────────────────────
    const autoReplySubject = `Thanks for reaching out, ${firstName}! 👋`

    const autoReplyHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F6FB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F6FB;padding:36px 16px;">
    <tr>
      <td align="center">
        <!-- Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;background-color:#FFFFFF;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.06);border:1px solid #E2E8F0;">
          
          <!-- Hero Header with Brand Accent -->
          <tr>
            <td style="background:linear-gradient(135deg, #0F1330 0%, #1A204C 100%);padding:44px 36px 36px 36px;text-align:center;">
              
              <!-- Brand Logo -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" style="margin-bottom:20px;">
                <tr>
                  <td align="center" style="background-color:#FFFFFF;border-radius:50%;padding:4px;box-shadow:0 4px 12px rgba(0,0,0,0.25);">
                    <img src="${logoUrl}" alt="Ajaypal Singh" width="56" height="56" style="display:block;border-radius:50%;">
                  </td>
                </tr>
              </table>

              <!-- Name & Title -->
              <h1 style="margin:0 0 6px 0;font-size:26px;font-weight:700;color:#FFFFFF;letter-spacing:-0.02em;">
                Ajaypal Singh
              </h1>
              <p style="margin:0;font-size:13px;color:#A5B4FC;font-weight:500;letter-spacing:0.04em;text-transform:uppercase;">
                Founder &bull; Builder &bull; Entrepreneur
              </p>
            </td>
          </tr>

          <!-- Main Greeting Section -->
          <tr>
            <td style="padding:36px 36px 28px 36px;">
              <h2 style="margin:0 0 14px 0;font-size:22px;font-weight:700;color:#0F172A;letter-spacing:-0.02em;">
                Thanks for reaching out, ${firstName}!
              </h2>
              <p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:#334155;">
                I wanted to confirm that I received your note. Whether you reached out about a potential project, an idea, or just to say hello &mdash; I truly appreciate your time.
              </p>
              <p style="margin:0 0 28px 0;font-size:15px;line-height:1.65;color:#334155;">
                I review all messages personally and will get back to you as soon as possible, typically within <strong>24 to 48 hours</strong>.
              </p>

              <!-- Echo/Summary of Message -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 22px;">
                    <div style="font-size:11px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">
                      Your message summary
                    </div>
                    <div style="font-size:13px;color:#64748B;margin-bottom:8px;">
                      Topic: <strong style="color:#0F172A;">${cleanTopic}</strong>
                    </div>
                    <div style="background-color:#FFFFFF;border:1px solid #E2E8F0;border-radius:8px;padding:14px 16px;font-size:14px;line-height:1.6;color:#1E293B;white-space:pre-wrap;word-break:break-word;">
                      ${cleanMessage}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- "While you wait" Exploration Cards -->
              <div style="margin-bottom:32px;">
                <div style="font-size:13px;font-weight:700;color:#0F172A;margin-bottom:14px;letter-spacing:-0.01em;">
                  While you wait, feel free to explore:
                </div>

                <!-- Card 1: Ojaven -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:12px;">
                  <tr>
                    <td>
                      <a href="https://ajaypalsingh.in/ojaven" target="_blank" style="display:block;background-color:#EEF2FF;border:1px solid #C7D2FE;border-radius:12px;padding:16px 20px;text-decoration:none;">
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="vertical-align:middle;">
                              <div style="font-size:14px;font-weight:700;color:#1F2AD6;margin-bottom:3px;">
                                Ojaven &rarr;
                              </div>
                              <div style="font-size:12px;color:#475569;line-height:1.4;">
                                A modern platform I'm building for digital agencies to streamline workflow & clients.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Card 2: Writing -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <a href="https://ajaypalsingh.in/writing" target="_blank" style="display:block;background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:16px 20px;text-decoration:none;">
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="vertical-align:middle;">
                              <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:3px;">
                                Writing & Notes &rarr;
                              </div>
                              <div style="font-size:12px;color:#475569;line-height:1.4;">
                                Articles and thoughts on building products, SaaS, AI, and entrepreneurship.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Sign-off Block -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid #E2E8F0;padding-top:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-size:14px;color:#64748B;">Warm regards,</p>
                    <p style="margin:0 0 2px 0;font-size:16px;font-weight:700;color:#0F172A;">Ajaypal Singh</p>
                    <p style="margin:0;font-size:13px;color:#1F2AD6;font-weight:500;">
                      <a href="https://ajaypalsingh.in" style="color:#1F2AD6;text-decoration:none;">ajaypalsingh.in</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Social Links & Verification Footer -->
          <tr>
            <td style="background-color:#0F1330;padding:28px 36px;text-align:center;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" style="margin-bottom:16px;">
                <tr>
                  <td style="padding:0 10px;">
                    <a href="https://www.linkedin.com/in/ajaypalsingh110/" target="_blank" style="color:#A5B4FC;font-size:12px;text-decoration:none;font-weight:500;">LinkedIn</a>
                  </td>
                  <td style="color:#4B5563;font-size:12px;">&bull;</td>
                  <td style="padding:0 10px;">
                    <a href="https://x.com/ajaypal110125" target="_blank" style="color:#A5B4FC;font-size:12px;text-decoration:none;font-weight:500;">X (Twitter)</a>
                  </td>
                  <td style="color:#4B5563;font-size:12px;">&bull;</td>
                  <td style="padding:0 10px;">
                    <a href="https://ajaypalsingh.in" target="_blank" style="color:#A5B4FC;font-size:12px;text-decoration:none;font-weight:500;">Website</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:11px;color:#64748B;line-height:1.5;">
                You received this confirmation email because you submitted an inquiry at <a href="https://ajaypalsingh.in/contact" style="color:#818CF8;text-decoration:none;">ajaypalsingh.in/contact</a>.<br>&copy; ${currentYear} Ajaypal Singh. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    // Send both emails in parallel via Resend Batch API
    await resend.batch.send([
      {
        from: 'Ajaypal Singh <contact@send.ajaypalsingh.in>',
        to: 'ajaypalsingh82775@gmail.com',
        replyTo: cleanEmail,
        subject: adminSubject,
        html: adminHtml,
      },
      {
        from: 'Ajaypal Singh <contact@send.ajaypalsingh.in>',
        to: cleanEmail,
        replyTo: 'ajaypalsingh82775@gmail.com',
        subject: autoReplySubject,
        html: autoReplyHtml,
      },
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route] send error:', err)
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
  }
}
