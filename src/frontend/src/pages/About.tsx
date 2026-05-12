import { Briefcase, Code2, GraduationCap, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BE Computer Science",
    sub: "Rathinam Technical Campus",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "UI/UX Intern",
    sub: "AIC RAISE",
  },
  {
    icon: Lightbulb,
    label: "Focus",
    value: "Product Design",
    sub: "User Experience & Usability",
  },
  {
    icon: Code2,
    label: "Approach",
    value: "Design + Dev",
    sub: "End-to-end thinking",
  },
];

export function About() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.68 0.22 270) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-2 mb-14"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            01 — About
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <div
            className="h-px w-20 mt-1"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.68 0.22 270), oklch(0.72 0.2 190), transparent)",
            }}
          />
        </motion.div>

        {/* Glassmorphism card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Open to opportunities badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{
                  background: "rgba(0,240,180,0.12)",
                  border: "1px solid rgba(0,240,180,0.3)",
                  color: "oklch(0.72 0.2 190)",
                }}
                data-ocid="about.availability_badge"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "oklch(0.72 0.2 190)" }}
                />
                Open to opportunities
              </div>

              <p className="font-body text-base leading-relaxed text-muted-foreground">
                I'm a{" "}
                <span className="text-foreground font-semibold">
                  BE Computer Science student
                </span>{" "}
                at{" "}
                <span className="text-foreground font-semibold">
                  Rathinam Technical Campus
                </span>
                , currently gaining hands-on experience as a{" "}
                <span className="text-foreground font-semibold">
                  UI/UX Intern at AIC RAISE
                </span>
                .
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                Passionate about{" "}
                <span className="text-foreground font-medium">
                  product design and user experience
                </span>
                , and building scalable solutions. I bring a strong interest in{" "}
                <span className="text-foreground font-medium">
                  design + development integration
                </span>{" "}
                — bridging the gap between how things look and how they work.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                Great design is invisible — it removes friction, guides users
                intuitively, and feels like second nature. That's the experience
                I strive to craft.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Product Thinking",
                  "Interaction Design",
                  "Prototyping",
                  "AWS",
                  "SQL",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Stat highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-5 flex flex-col gap-3 transition-smooth group cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(107,10,255,0.4)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 20px rgba(107,10,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-smooth">
                    <h.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-0.5">
                      {h.label}
                    </p>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {h.value}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">
                      {h.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
