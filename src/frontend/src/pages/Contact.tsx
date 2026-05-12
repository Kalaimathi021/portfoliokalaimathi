import { Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "rkalai2006@gmail.com",
    href: "mailto:rkalai2006@gmail.com",
    ocid: "contact.email_link",
    glow: "oklch(0.68 0.22 270)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kalaimathi-ravi-48429b297",
    href: "https://linkedin.com/in/kalaimathi-ravi-48429b297",
    ocid: "contact.linkedin_link",
    glow: "oklch(0.58 0.24 300)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6383099912",
    href: "tel:6383099912",
    ocid: "contact.phone_link",
    glow: "oklch(0.72 0.2 190)",
  },
];

export function Contact() {
  return (
    <>
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-24 bg-background"
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-2 mb-6"
          >
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              05 — Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Let's <span className="gradient-text">Connect</span>
            </h2>
          </motion.div>

          {/* CTA line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-center text-lg text-muted-foreground mb-14 max-w-md mx-auto"
          >
            Let&apos;s build something great together.
          </motion.p>

          {/* Three contact cards — horizontal row */}
          <div className="grid sm:grid-cols-3 gap-5">
            {CONTACT_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                data-ocid={item.ocid}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-smooth group relative overflow-hidden"
                style={{ cursor: "pointer" }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{
                    boxShadow: `0 0 32px 4px ${item.glow}28, inset 0 0 24px 0 ${item.glow}10`,
                    border: `1px solid ${item.glow}40`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${item.glow}, ${item.glow.replace("0.22", "0.18").replace("0.24", "0.20").replace("0.20", "0.16")})`,
                    boxShadow: `0 4px 24px 0 ${item.glow}40`,
                  }}
                >
                  <item.icon size={22} className="text-white" />
                </div>

                {/* Label + value */}
                <div className="relative z-10">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-foreground mt-1.5 break-all leading-snug">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-ocid="footer.section"
        className="py-6 border-t border-border"
        style={{ background: "oklch(0.11 0.007 270)" }}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center text-xs text-muted-foreground font-body">
          <span>
            © {new Date().getFullYear()} Kalaimathi R. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
