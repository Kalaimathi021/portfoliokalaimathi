import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ---------------------------------------------------------------------------
   Floating wireframe UI elements
--------------------------------------------------------------------------- */
const WIRE_ELEMENTS = [
  { w: 120, h: 80, x: "8%", y: "18%", delay: 0, dur: 18 },
  { w: 80, h: 120, x: "82%", y: "12%", delay: 2.5, dur: 22 },
  { w: 160, h: 100, x: "70%", y: "68%", delay: 1, dur: 20 },
  { w: 90, h: 60, x: "14%", y: "72%", delay: 3.5, dur: 16 },
  { w: 60, h: 90, x: "50%", y: "82%", delay: 1.8, dur: 24 },
  { w: 100, h: 70, x: "88%", y: "42%", delay: 0.8, dur: 19 },
  { w: 70, h: 50, x: "3%", y: "48%", delay: 4, dur: 21 },
];

interface WireProps {
  w: number;
  h: number;
  x: string;
  y: string;
  delay: number;
  dur: number;
  reduced: boolean;
}

function WireCard({ w, h, x, y, delay, dur, reduced }: WireProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, width: w, height: h }}
      initial={{ opacity: 0 }}
      animate={
        reduced
          ? { opacity: 0.05 }
          : {
              opacity: [0, 0.07, 0.04, 0.08, 0],
              y: [-10, 10, -8, 12, -10],
            }
      }
      transition={
        reduced
          ? { delay, duration: 0.6 }
          : {
              delay,
              duration: dur,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
      }
    >
      {/* Outer frame */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{ border: "1px solid oklch(0.68 0.22 270 / 0.5)" }}
      />
      {/* Inner title bar */}
      <div
        className="absolute left-2 right-2 top-2 h-2 rounded-sm"
        style={{ background: "oklch(0.68 0.22 270 / 0.25)" }}
      />
      {/* Inner content lines */}
      <div
        className="absolute left-2 right-2 rounded-sm"
        style={{
          top: "40%",
          height: 1.5,
          background: "oklch(0.58 0.24 300 / 0.2)",
        }}
      />
      <div
        className="absolute left-2 right-6 rounded-sm"
        style={{
          top: "58%",
          height: 1.5,
          background: "oklch(0.58 0.24 300 / 0.15)",
        }}
      />
      {/* Corner accent dots */}
      <div
        className="absolute w-1 h-1 rounded-full"
        style={{ bottom: 4, right: 4, background: "oklch(0.72 0.2 190 / 0.6)" }}
      />
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
   Hero
--------------------------------------------------------------------------- */
export function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Layer 1: Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x900.jpg')",
        }}
      />

      {/* ── Layer 2: Deep charcoal overlay ── */}
      <div className="absolute inset-0 bg-background/75" />

      {/* ── Layer 3: Ambient glow orbs ── */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: "oklch(0.68 0.22 270)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[110px] opacity-15 pointer-events-none"
        style={{ background: "oklch(0.58 0.24 300)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "oklch(0.72 0.2 190)" }}
      />

      {/* ── Layer 4: CSS perspective grid lines ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.68 0.22 270 / 0.12) 1px, transparent 1px), " +
            "linear-gradient(90deg, oklch(0.68 0.22 270 / 0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Layer 5: Floating wireframe UI elements ── */}
      {!reduced &&
        WIRE_ELEMENTS.map((el) => (
          <WireCard key={el.x} {...el} reduced={reduced} />
        ))}

      {/* ── Layer 6: Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 text-xs font-mono text-muted-foreground"
        >
          <Sparkles size={12} className="text-accent" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-5"
        >
          <span className="gradient-text">Kalaimathi R</span>
        </motion.h1>

        {/* Title with separator dots */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-mono text-xs sm:text-sm text-accent mb-4 tracking-widest uppercase"
        >
          <span>UI/UX Designer</span>
          <span className="mx-3 opacity-40 text-foreground">·</span>
          <span>Product Designer</span>
          <span className="mx-3 opacity-40 text-foreground">·</span>
          <span>Tech Enthusiast</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-body text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Designing intuitive digital experiences with a blend of creativity,
          usability, and technical thinking.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            data-ocid="hero.view_projects_button"
            onClick={() => scrollTo("#projects")}
            className="group relative px-7 py-3.5 rounded-xl font-display font-semibold text-sm gradient-primary text-white overflow-hidden transition-smooth hover:opacity-90 hover:shadow-glow hover:-translate-y-1 active:translate-y-0"
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 -skew-x-12 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/10 transition-all duration-700 pointer-events-none" />
            View Projects
          </button>

          <button
            type="button"
            data-ocid="hero.contact_button"
            onClick={() => scrollTo("#contact")}
            className="px-7 py-3.5 rounded-xl font-display font-semibold text-sm glass-card text-foreground transition-smooth hover:border-primary/50 hover:bg-white/[0.06] hover:-translate-y-1 active:translate-y-0"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
