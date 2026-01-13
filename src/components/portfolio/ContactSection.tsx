import { personalInfo, socialLinks } from "@/data/portfolioData";
import { Github, Linkedin, Twitter, Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from '@tanstack/react-form'
import { submitContactForm } from "@/server/contact";
import { useState } from "react";

function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async ({ value, formApi }) => {
      setServerError(null);
      setSuccessMessage(null);
      try {
        await submitContactForm({ data: value });
        setSuccessMessage("Message sent successfully! I'll get back to you soon.");
        formApi.reset();
      } catch (error) {
        console.error("Submission error:", error);
        setServerError("Failed to send message. Please try again later.");
      }
    },
  })

  return (
    <div className="space-y-4">
      {successMessage && (
        <div className="p-4 rounded-lg bg-green-50 text-green-700 flex items-center gap-2 text-sm border border-green-200">
          <CheckCircle className="w-4 h-4 shrink-0" />
          {successMessage}
        </div>
      )}
      
      {serverError && (
        <div className="p-4 rounded-lg bg-red-50 text-red-700 flex items-center gap-2 text-sm border border-red-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {serverError}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-4"
      >
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) =>
              !value
                ? 'Name is required'
                : value.length < 2
                  ? 'Name must be at least 2 characters'
                  : undefined,
          }}
          children={(field) => (
            <div>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-4 py-2.5 bg-white border rounded-lg outline-none transition-all ${
                  field.state.meta.errors.length
                    ? 'border-red-300 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-2 focus:ring-coral-500 focus:border-transparent'
                }`}
                placeholder="Your name"
              />
              {field.state.meta.errors ? (
                <div role="alert" className="text-red-500 text-xs mt-1 absolute">
                  {field.state.meta.errors.join(', ')}
                </div>
              ) : null}
            </div>
          )}
        />

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? 'Email is required'
                : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ? 'Invalid email address'
                  : undefined,
          }}
          children={(field) => (
            <div className="pt-4">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-4 py-2.5 bg-white border rounded-lg outline-none transition-all ${
                  field.state.meta.errors.length
                    ? 'border-red-300 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-2 focus:ring-coral-500 focus:border-transparent'
                }`}
                placeholder="your@email.com"
              />
              {field.state.meta.errors ? (
                <div role="alert" className="text-red-500 text-xs mt-1 absolute">
                  {field.state.meta.errors.join(', ')}
                </div>
              ) : null}
            </div>
          )}
        />

        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) =>
              !value
                ? 'Message is required'
                : value.length < 10
                  ? 'Message must be at least 10 characters'
                  : undefined,
          }}
          children={(field) => (
            <div className="pt-4">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                rows={4}
                className={`w-full px-4 py-2.5 bg-white border rounded-lg outline-none transition-all resize-none ${
                  field.state.meta.errors.length
                    ? 'border-red-300 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-2 focus:ring-coral-500 focus:border-transparent'
                }`}
                placeholder="Your message..."
              />
              {field.state.meta.errors ? (
                <div role="alert" className="text-red-500 text-xs mt-1 absolute">
                  {field.state.meta.errors.join(', ')}
                </div>
              ) : null}
            </div>
          )}
        />

        <div className="pt-4">
        <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors shadow-lg ${
                  !canSubmit || isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                    : 'bg-coral-500 hover:bg-coral-600 text-white shadow-coral-500/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            )}
          />
        </div>
      </form>
    </div>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-6 h-6" />,
  linkedin: <Linkedin className="w-6 h-6" />,
  twitter: <Twitter className="w-6 h-6" />,
  mail: <Mail className="w-6 h-6" />,
};

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-coral-500 tracking-widest uppercase mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-500 mb-12">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Connect With Me</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-coral-300 hover:shadow-md transition-all group"
                >
                  <div className="text-gray-400 group-hover:text-coral-500 transition-colors">
                    {iconMap[link.icon]}
                  </div>
                  <span className="text-gray-700 font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              <p className="mb-2">
                📍 Based in <strong>{personalInfo.location}</strong>
              </p>
              <p>
                📧 <a href={`mailto:${personalInfo.email}`} className="text-coral-500 hover:underline">{personalInfo.email}</a>
              </p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Built with ❤️ and React.
          </p>
          <p className="font-mono">
            // Open to new opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
