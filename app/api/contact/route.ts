import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, business, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: [process.env.OWNER_EMAIL!],
      subject: `New Lead — ${name}${business ? ` (${business})` : ''}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${business ? `<p><strong>Business:</strong> ${business}</p>` : ''}
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    })

    return NextResponse.json({ message: 'Sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
