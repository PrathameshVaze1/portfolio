import { personalInfo, socialLinks } from "@/data/portfolioData";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

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
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-coral-500/30"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">
              The form is for display only. Use the email or social links to contact me.
            </p>
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
