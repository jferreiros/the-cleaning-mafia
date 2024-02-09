import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message, form } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Web <onboarding@resend.dev>',
      to: ['thecleaningmafiafl@gmail.com'],
      subject: 'New contact from' + form,
      react: EmailTemplate({ 
        name: name,
        email: email,
        message: message,
        form: form
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}