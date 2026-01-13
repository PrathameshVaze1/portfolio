import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // 1. Verify Environment Variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env
    
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP configuration')
      throw new Error('Server configuration error')
    }

    // 2. Create Transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    try {
      // 3. Send Email
      await transporter.sendMail({
        from: SMTP_FROM || SMTP_USER, // Use configured FROM or default to USER
        to: SMTP_USER, // Send to yourself
        replyTo: data.email, // Allow replying to the sender
        subject: `New Portfolio Contact from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      })

      return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
      console.error('Email sending failed:', error)
      throw new Error('Failed to send email. Please try again later.')
    }
  })
