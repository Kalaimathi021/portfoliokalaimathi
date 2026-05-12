import { Award, Briefcase, Trophy } from "lucide-react";
import { motion } from "motion/react";

const CERTIFICATIONS = [
  { title: "Design Thinking", issuer: "Coursera", icon: Award },
  { title: "Microsoft Azure Certifications", issuer: "Microsoft", icon: Award },
];

const HACKATHONS = [
  {
    name: "L&T Techgium Hackathon",
    desc: "National-level engineering & technology innovation challenge by Larsen & Toubro.",
  },
  {
    name: "Gen Z Hackathon",
    desc: "Youth-driven design & development innovation challenge.",
  },
];

const BULLETS = [
  "Worked on real-time products deployed to live users",
  "Created wireframes and user flows for new features",
  "Built interactive prototypes for stakeholder reviews",
  "Improved product usability through iterative testing",
];

export function Experience() {
  return (
    <section
      id="experience"
      data-ocid="experience.section"
      className="py-24"
      style={{ background: "oklch(0.14 0.009 270)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-2 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            04 — Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Career <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* ── Work Experience Timeline ── */}
        <h3 className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Work Experience
        </h3>

        <div className="relative pl-6">
          {/* Vertical accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.68 0.22 270), oklch(0.58 0.24 300) 60%, transparent)",
            }}
          />
          {/* Timeline dot */}
          <div
            className="absolute left-[-4px] top-6 w-2 h-2 rounded-full"
            style={{ background: "oklch(0.68 0.22 270)" }}
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            data-ocid="experience.item.1"
            className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-smooth group"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow flex-shrink-0 group-hover:scale-105 transition-smooth">
                <Briefcase size={18} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground leading-tight">
                      UI/UX Intern
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      AIC RAISE
                    </p>
                  </div>
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(100,160,255,0.1)",
                      border: "1px solid rgba(100,160,255,0.2)",
                      color: "oklch(0.72 0.2 190)",
                    }}
                  >
                    2024 – Present
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {BULLETS.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + idx * 0.07 }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground font-body"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.72 0.2 190)" }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Certifications ── */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6"
          >
            Certifications
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                data-ocid={`experience.cert.${i + 1}`}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-smooth group cursor-default"
                style={{
                  boxShadow: "0 0 0 0 transparent",
                }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {cert.title}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Hackathons ── */}
        <div className="mt-14">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6"
          >
            Hackathons
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {HACKATHONS.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                data-ocid={`experience.hackathon.${i + 1}`}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-secondary/30 transition-smooth group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.24 300), oklch(0.65 0.2 320))",
                  }}
                >
                  <Trophy size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {h.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
