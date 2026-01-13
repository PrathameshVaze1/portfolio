import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const submitContactForm = createServerFn({ method: "POST" })
  .handler(async ({ data }) => {
    // Validate input data
    let validatedData
    try {
      validatedData = contactSchema.parse(data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(error.errors.map(e => e.message).join(', '))
      }
      throw error
    }
    
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
        replyTo: validatedData.email, // Allow replying to the sender
        subject: `New Portfolio Contact from ${validatedData.name}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
      })

      return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
      console.error('Email sending failed:', error)
      throw new Error('Failed to send email. Please try again later.')
    }
  })
