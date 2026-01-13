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
                    : 'border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent'
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
                    : 'border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent'
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
                    : 'border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent'
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
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                    : 'bg-gray-900 hover:bg-black text-white hover:shadow-xl'
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
    <section id="contact" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100/50">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Side: Info & Socials */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Have a project in mind or just want to explore potential collaborations? 
              <br />
              I'm all ears!
            </p>
          </div>

          <div className="space-y-6">
             <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-black hover:shadow-md transition-all group"
                    >
                      <div className="text-gray-400 group-hover:text-black transition-colors">
                        {iconMap[link.icon]}
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{link.name}</span>
                    </a>
                  ))}
                </div>
             </div>

             <div className="pl-2 space-y-2 text-gray-600">
               <p className="flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📍</span>
                 {personalInfo.location}
               </p>
               <p className="flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📧</span>
                 <a href={`mailto:${personalInfo.email}`} className="hover:text-black hover:underline underline-offset-4 transition-all">
                   {personalInfo.email}
                 </a>
               </p>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
           <div className="mb-6 flex items-center justify-between">
             <h3 className="font-bold text-xl text-gray-900">Send a Message</h3>
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Online"></div>
           </div>
           <ContactForm />
        </div>
      </div>
      
      {/* Minimal Footer */}
      <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
         <p>© {new Date().getFullYear()} {personalInfo.name}.</p>
      </div>
    </section>
  );
}
