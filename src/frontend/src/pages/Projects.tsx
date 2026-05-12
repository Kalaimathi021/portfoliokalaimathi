import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

// ── Project data ────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: string; // oklch hue number string for inline styles
  accentHex: string; // hex for box-shadow glow
  accentLabel: string; // human-readable accent name
  featured: boolean;
  mockup: "blue" | "purple" | "cyan";
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Landzio",
    subtitle: "Sales Landing Page",
    description:
      "A high-conversion sales landing page built with modern aesthetics and optimised user flows. Covers UI/UX design end-to-end, from early prototypes to responsive frontend implementation with smooth micro-interactions.",
    tags: ["UI/UX Design", "Prototyping", "Frontend Dev", "Responsive Design"],
    accent: "270",
    accentHex: "#3b82f6",
    accentLabel: "Electric Blue",
    featured: true,
    mockup: "blue",
  },
  {
    id: 2,
    title: "Raise Smart",
    subtitle: "Live Product",
    description:
      "End-to-end UX for a live deployed product at AIC RAISE. High-fidelity wireframes, user flows, and targeted usability improvements that directly impacted real users in production.",
    tags: ["User Flows", "Wireframing", "High-fidelity UI", "Usability"],
    accent: "300",
    accentHex: "#a855f7",
    accentLabel: "Purple",
    featured: false,
    mockup: "purple",
  },
  {
    id: 3,
    title: "AWS Cognito Auth",
    subtitle: "Authentication System",
    description:
      "Full authentication system with sign-up, sign-in, OTP verification, and AWS Cognito integration. UX-first design approach with clear feedback states and accessibility considerations.",
    tags: ["Sign Up / In", "OTP Verification", "AWS Cognito", "Security UX"],
    accent: "190",
    accentHex: "#06b6d4",
    accentLabel: "Cyan",
    featured: false,
    mockup: "cyan",
  },
];

// ── Mockup preview components ─────────────────────────────────────────────
function BlueMockup() {
  return (
    <svg
      viewBox="0 0 520 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background gradient */}
      <defs>
        <radialGradient id="bg-blue" cx="40%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a0a1a" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="card-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="520" height="240" fill="url(#bg-blue)" />
      <circle cx="200" cy="120" r="100" fill="url(#glow-blue)" />
      {/* Grid lines */}
      {[60, 120, 180, 240, 300, 360, 420, 480].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="240"
          stroke="#3b82f6"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {[40, 80, 120, 160, 200].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="520"
          y2={y}
          stroke="#3b82f6"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {/* Browser frame */}
      <rect
        x="60"
        y="30"
        width="260"
        height="180"
        rx="10"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(59,130,246,0.3)"
        strokeWidth="1"
      />
      <rect
        x="60"
        y="30"
        width="260"
        height="24"
        rx="10"
        fill="rgba(59,130,246,0.15)"
      />
      <circle cx="76" cy="42" r="4" fill="#ef4444" fillOpacity="0.7" />
      <circle cx="90" cy="42" r="4" fill="#eab308" fillOpacity="0.7" />
      <circle cx="104" cy="42" r="4" fill="#22c55e" fillOpacity="0.7" />
      {/* Content bars */}
      <rect
        x="76"
        y="68"
        width="120"
        height="10"
        rx="5"
        fill="rgba(255,255,255,0.6)"
      />
      <rect
        x="76"
        y="84"
        width="180"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x="76"
        y="94"
        width="140"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="76"
        y="112"
        width="90"
        height="28"
        rx="6"
        fill="rgba(59,130,246,0.6)"
      />
      <rect
        x="174"
        y="112"
        width="70"
        height="28"
        rx="6"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(59,130,246,0.4)"
        strokeWidth="1"
      />
      <rect
        x="76"
        y="152"
        width="228"
        height="44"
        rx="6"
        fill="rgba(59,130,246,0.08)"
        stroke="rgba(59,130,246,0.15)"
        strokeWidth="1"
      />
      {/* Floating stats card */}
      <rect
        x="350"
        y="50"
        width="130"
        height="70"
        rx="10"
        fill="url(#card-blue)"
        stroke="rgba(59,130,246,0.3)"
        strokeWidth="1"
      />
      <rect
        x="364"
        y="64"
        width="50"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.5)"
      />
      <rect
        x="364"
        y="76"
        width="80"
        height="14"
        rx="4"
        fill="rgba(59,130,246,0.6)"
      />
      <rect
        x="364"
        y="94"
        width="40"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.2)"
      />
      {/* Floating chart card */}
      <rect
        x="350"
        y="136"
        width="130"
        height="80"
        rx="10"
        fill="url(#card-blue)"
        stroke="rgba(99,102,241,0.3)"
        strokeWidth="1"
      />
      <polyline
        points="364,196 384,176 404,186 424,162 464,172"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="464" cy="172" r="3" fill="#3b82f6" />
    </svg>
  );
}

function PurpleMockup() {
  return (
    <svg
      viewBox="0 0 340 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bg-purple" cx="60%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a0a1a" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="glow-purple" cx="60%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="340" height="200" fill="url(#bg-purple)" />
      <circle cx="200" cy="80" r="100" fill="url(#glow-purple)" />
      {/* Grid */}
      {[60, 110, 160, 210, 260, 310].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="200"
          stroke="#a855f7"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="340"
          y2={y}
          stroke="#a855f7"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {/* Phone frame */}
      <rect
        x="20"
        y="20"
        width="90"
        height="160"
        rx="12"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(168,85,247,0.35)"
        strokeWidth="1.5"
      />
      <rect
        x="20"
        y="20"
        width="90"
        height="160"
        rx="12"
        fill="none"
        stroke="rgba(168,85,247,0.15)"
        strokeWidth="6"
      />
      <rect
        x="38"
        y="36"
        width="54"
        height="30"
        rx="4"
        fill="rgba(168,85,247,0.2)"
      />
      <rect
        x="38"
        y="72"
        width="38"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.5)"
      />
      <rect
        x="38"
        y="82"
        width="54"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x="38"
        y="90"
        width="44"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="38"
        y="106"
        width="54"
        height="20"
        rx="4"
        fill="rgba(168,85,247,0.4)"
      />
      {/* User flow nodes */}
      <circle
        cx="160"
        cy="50"
        r="18"
        fill="rgba(168,85,247,0.15)"
        stroke="rgba(168,85,247,0.5)"
        strokeWidth="1.5"
      />
      <rect
        x="148"
        y="46"
        width="24"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.6)"
      />
      <line
        x1="178"
        y1="50"
        x2="200"
        y2="50"
        stroke="rgba(168,85,247,0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <circle
        cx="218"
        cy="50"
        r="18"
        fill="rgba(168,85,247,0.1)"
        stroke="rgba(168,85,247,0.35)"
        strokeWidth="1.5"
      />
      <circle cx="218" cy="50" r="5" fill="rgba(168,85,247,0.7)" />
      <line
        x1="218"
        y1="68"
        x2="218"
        y2="90"
        stroke="rgba(168,85,247,0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <rect
        x="196"
        y="90"
        width="44"
        height="28"
        rx="6"
        fill="rgba(168,85,247,0.12)"
        stroke="rgba(168,85,247,0.35)"
        strokeWidth="1.5"
      />
      <rect
        x="204"
        y="98"
        width="28"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.5)"
      />
      <rect
        x="204"
        y="106"
        width="20"
        height="4"
        rx="2"
        fill="rgba(168,85,247,0.6)"
      />
      {/* Wireframe panel */}
      <rect
        x="150"
        y="130"
        width="170"
        height="54"
        rx="8"
        fill="rgba(168,85,247,0.06)"
        stroke="rgba(168,85,247,0.2)"
        strokeWidth="1"
      />
      <rect
        x="162"
        y="142"
        width="60"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.4)"
      />
      <rect
        x="162"
        y="154"
        width="100"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="162"
        y="162"
        width="80"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.1)"
      />
      <rect
        x="270"
        y="142"
        width="36"
        height="20"
        rx="4"
        fill="rgba(168,85,247,0.4)"
      />
    </svg>
  );
}

function CyanMockup() {
  return (
    <svg
      viewBox="0 0 340 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bg-cyan" cx="50%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#164e63" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a0a1a" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="glow-cyan" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="340" height="200" fill="url(#bg-cyan)" />
      <circle cx="170" cy="110" r="100" fill="url(#glow-cyan)" />
      {/* Grid */}
      {[60, 110, 160, 210, 260, 310].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="200"
          stroke="#06b6d4"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="340"
          y2={y}
          stroke="#06b6d4"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {/* Auth form frame */}
      <rect
        x="95"
        y="18"
        width="150"
        height="168"
        rx="12"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(6,182,212,0.3)"
        strokeWidth="1.5"
      />
      {/* Logo */}
      <circle
        cx="170"
        cy="40"
        r="12"
        fill="rgba(6,182,212,0.2)"
        stroke="rgba(6,182,212,0.5)"
        strokeWidth="1.5"
      />
      <rect
        x="163"
        y="37"
        width="14"
        height="6"
        rx="3"
        fill="rgba(6,182,212,0.8)"
      />
      {/* Form title */}
      <rect
        x="117"
        y="60"
        width="66"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.7)"
      />
      <rect
        x="125"
        y="72"
        width="50"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.2)"
      />
      {/* Email field */}
      <rect
        x="109"
        y="88"
        width="122"
        height="20"
        rx="5"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(6,182,212,0.35)"
        strokeWidth="1"
      />
      <rect
        x="117"
        y="95"
        width="40"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.3)"
      />
      {/* Password field */}
      <rect
        x="109"
        y="114"
        width="122"
        height="20"
        rx="5"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(6,182,212,0.2)"
        strokeWidth="1"
      />
      {[117, 126, 135, 144, 153].map((x) => (
        <circle key={x} cx={x} cy="124" r="3" fill="rgba(255,255,255,0.4)" />
      ))}
      {/* OTP row */}
      {[109, 131, 153, 175, 197, 219].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="140"
          width="18"
          height="18"
          rx="4"
          fill={i < 4 ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.04)"}
          stroke={i < 4 ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.1)"}
          strokeWidth="1"
        />
      ))}
      {/* Sign in button */}
      <rect
        x="109"
        y="164"
        width="122"
        height="16"
        rx="5"
        fill="rgba(6,182,212,0.5)"
      />
      <rect
        x="139"
        y="168"
        width="42"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.7)"
      />
      {/* Shield icon left */}
      <circle
        cx="38"
        cy="80"
        r="22"
        fill="rgba(6,182,212,0.1)"
        stroke="rgba(6,182,212,0.3)"
        strokeWidth="1"
      />
      <path
        d="M38 66 L50 71 L50 80 C50 87 44 93 38 95 C32 93 26 87 26 80 L26 71 Z"
        fill="rgba(6,182,212,0.3)"
        stroke="rgba(6,182,212,0.5)"
        strokeWidth="1"
      />
      <path
        d="M32 80 L36 84 L44 76"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AWS badge right */}
      <rect
        x="280"
        y="58"
        width="48"
        height="28"
        rx="6"
        fill="rgba(6,182,212,0.12)"
        stroke="rgba(6,182,212,0.4)"
        strokeWidth="1"
      />
      <rect
        x="288"
        y="66"
        width="32"
        height="6"
        rx="3"
        fill="rgba(255,165,0,0.7)"
      />
      <rect
        x="292"
        y="74"
        width="22"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.4)"
      />
    </svg>
  );
}

const MOCKUP_MAP = {
  blue: BlueMockup,
  purple: PurpleMockup,
  cyan: CyanMockup,
};

// ── ProjectCard ───────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const MockupComponent = MOCKUP_MAP[project.mockup];
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`projects.item.${project.id}`}
      className={`group relative rounded-3xl overflow-hidden flex flex-col glass-card
        hover:border-white/20 transition-smooth cursor-pointer
        ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}
      `}
      style={
        {
          /* Dynamic per-card glow on hover via CSS custom property override */
          /* We use a wrapper div below for the actual box-shadow on hover */
        }
      }
      whileHover={{ scale: 1.018, y: -4 }}
    >
      {/* Hover glow ring */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none z-20"
        style={{
          boxShadow: `0 0 0 1px ${project.accentHex}55, 0 8px 40px ${project.accentHex}22`,
        }}
      />

      {/* ── Mockup preview area ── */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          isFeatured ? "h-56 sm:h-64" : "h-44"
        }`}
      >
        {/* Ambient radial glow behind mockup */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 80%, ${project.accentHex}18 0%, transparent 70%)`,
          }}
        />
        <MockupComponent />
        {/* Subtle bottom fade to card body */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(13,13,26,0.85))",
          }}
        />
        {/* Accent label chip */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
            style={{
              color: project.accentHex,
              borderColor: `${project.accentHex}55`,
              background: `${project.accentHex}12`,
            }}
          >
            {project.accentLabel}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title block */}
        <div>
          <h3 className="font-display font-bold text-xl text-foreground leading-tight">
            {project.title}
          </h3>
          <p
            className="font-mono text-xs mt-1"
            style={{ color: project.accentHex }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono"
              style={{
                color: project.accentHex,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: `${project.accentHex}40`,
                background: `${project.accentHex}0d`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          data-ocid={`projects.case_study_button.${project.id}`}
          className="mt-1 flex items-center gap-2 text-sm font-display font-semibold transition-smooth group/btn self-start"
          style={{ color: project.accentHex }}
          aria-label={`View case study for ${project.title}`}
          onClick={() =>
            toast(`${project.title} — case study coming soon!`, {
              description:
                "Full write-up with process, decisions, and outcomes is in the works.",
              duration: 4000,
            })
          }
        >
          <span>View Case Study</span>
          <ArrowRight
            size={15}
            className="translate-x-0 group-hover/btn:translate-x-1.5 transition-smooth"
          />
        </button>
      </div>
    </motion.article>
  );
}

// ── Section ───────────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section
      id="projects"
      data-ocid="projects.section"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.22 270 / 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.58 0.24 300 / 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3 mb-14"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            03 — Projects
          </span>
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Featured <span className="gradient-text">Work</span>
            </h2>
            {/* Gradient underline accent */}
            <div
              className="absolute -bottom-2 left-0 h-[3px] w-28 rounded-full"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #a855f7, #06b6d4)",
              }}
            />
          </div>
          <p className="font-body text-muted-foreground max-w-lg mt-3">
            A curated selection spanning product design, interaction design, and
            technical implementation — from concept to shipped product.
          </p>
        </motion.div>

        {/* Bento grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        {/* First card (featured) spans 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
