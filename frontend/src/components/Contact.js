import { useState } from "react";
import { Send, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#0D1321" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side info */}
          <div className="lg:col-span-5 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold mb-2">
              05
            </p>
            <h2
              data-testid="contact-title"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#FDFBF7]"
            >
              Let's
              <br />
              Connect
            </h2>
            <p className="mt-6 text-[#D9D2C5] leading-relaxed lg:text-lg max-w-md">
              Whether you need a keynote speaker, a mentor, or simply want to share a cup of coffee and talk leadership — I'd love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="https://shivaniverma.me/contact/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="book-call-btn"
                className="inline-flex items-center gap-3 bg-[#C8553D] text-[#FDFBF7] px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#A64430] text-sm uppercase tracking-[0.1em]"
              >
                <Calendar size={18} />
                Schedule a Chat
              </a>

              <div className="space-y-3 text-[#D9D2C5]">
                <p className="text-sm">
                  <span className="text-[#C8553D] font-semibold">Location:</span>{" "}
                  Vancouver, British Columbia
                </p>
                <p className="text-sm">
                  <span className="text-[#C8553D] font-semibold">Available for:</span>{" "}
                  Keynotes, Panels, Workshops, Podcasts
                </p>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="lg:col-span-7 reveal">
            <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#D9D2C5] font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name"
                    className="w-full bg-transparent border-b border-[#3E5C76] text-[#FDFBF7] py-3 px-0 focus:border-[#C8553D] transition-colors placeholder:text-[#3E5C76]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#D9D2C5] font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    data-testid="contact-email"
                    className="w-full bg-transparent border-b border-[#3E5C76] text-[#FDFBF7] py-3 px-0 focus:border-[#C8553D] transition-colors placeholder:text-[#3E5C76]"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D9D2C5] font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  data-testid="contact-subject"
                  className="w-full bg-transparent border-b border-[#3E5C76] text-[#FDFBF7] py-3 px-0 focus:border-[#C8553D] transition-colors placeholder:text-[#3E5C76]"
                  placeholder="Speaking engagement, mentoring, etc."
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D9D2C5] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  data-testid="contact-message"
                  className="w-full bg-transparent border-b border-[#3E5C76] text-[#FDFBF7] py-3 px-0 focus:border-[#C8553D] transition-colors resize-none placeholder:text-[#3E5C76]"
                  placeholder="Tell me about your event or goals..."
                />
              </div>

              {status === "success" && (
                <div data-testid="contact-success" className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div data-testid="contact-error" className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="inline-flex items-center gap-3 bg-[#C8553D] text-[#FDFBF7] px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#A64430] text-sm uppercase tracking-[0.1em] disabled:opacity-50"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
