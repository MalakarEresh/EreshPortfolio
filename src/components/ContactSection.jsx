import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export const ContactSection = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        "service_ys9j0iw", // from EmailJS
        "template_6d41f3q", // from EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "LsggAeDxrdUGa4mrB" // from EmailJS
      )
      .then(
        () => {
          toast({
            title: "Message sent! 🎉",
            description:
              "Thank you for your message. I'll get back to you soon.",
          })
          setFormData({ name: "", email: "", message: "" }) // reset form
          setIsSubmitting(false)
        },
        () => {
          toast({
            title: "Error 😢",
            description: "Something went wrong. Please try again later.",
          })
          setIsSubmitting(false)
        }
      )
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-card p-7 md:p-8 rounded-xl border border-border/60 shadow-xs space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ereshman9890@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ereshman9890@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+9779862733267"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +977 9862733267
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Samakhusi, Kathmandu Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/eresh-man-malakar-8a000331b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-full border border-border bg-background/70 text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/Genos66247529"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2.5 rounded-full border border-border bg-background/70 text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-full border border-border bg-background/70 text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitch"
                  className="p-2.5 rounded-full border border-border bg-background/70 text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-7 md:p-8 rounded-xl border border-border/60 shadow-xs text-left">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Your Name Here"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Your Email Here"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none transition-colors"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
