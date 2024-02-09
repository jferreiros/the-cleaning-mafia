// Import Resend and your email template
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/EmailTemplate'; // Adjust the path as necessary

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Simple validation
    if (!email || !email.includes('@') || !name || !message) {
      return res.status(400).json({ error: 'Missing or invalid fields' });
    }

    try {
      // Use your email template component, passing in any props it needs
      const emailContent = EmailTemplate({ firstName: name }); // Adjust as needed

      // Send the email
      const data = await resend.emails.send({
        from: 'Your Company <onboarding@yourcompany.com>',
        to: [email], // Send to the email address provided in the form
        subject: 'Welcome to Our Service!',
        react: emailContent,
      });

      // Respond with success
      res.status(200).json({ message: 'Form submitted successfully!', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
