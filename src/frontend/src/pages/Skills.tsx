import {
  Cloud,
  Code2,
  Coffee,
  FlaskConical,
  GitBranch,
  Layers,
  Monitor,
  MousePointer,
  Palette,
  PenTool,
} from "lucide-react";
import { motion } from "motion/react";
import { SiFigma, SiMysql } from "react-icons/si";

const DESIGN_SKILLS = [
  { icon: PenTool, name: "Wireframing" },
  { icon: Layers, name: "Prototyping" },
  { icon: GitBranch, name: "User Flows" },
  { icon: MousePointer, name: "Interaction Design" },
  { icon: Monitor, name: "Responsive Design" },
  { icon: FlaskConical, name: "Usability Testing" },
  { icon: Palette, name: "Visual Design" },
];

const TOOLS = [
  { icon: SiFigma, name: "Figma", desc: "Primary design tool" },
  { icon: SiFigma, name: "FigJam", desc: "Whiteboarding & ideation" },
  { icon: Code2, name: "Google Stitch", desc: "AI-assisted prototyping" },
];

const TECH_SKILLS = [
  { icon: Cloud, name: "AWS", desc: "Cloud infrastructure" },
  { icon: SiMysql, name: "SQL", desc: "Data querying" },
  { icon: Coffee, name: "Java", desc: "OOP & backend basics" },
  { icon: Code2, name: "Web Dev", desc: "HTML, CSS, JS basics" },
];

function SkillCard({
  icon: Icon,
  name,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -2 }}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default transition-smooth group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(0,136,255,0.45)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 18px rgba(0,136,255,0.18), 0 4px 16px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
        <Icon size={18} className="text-white" />
      </div>
      <span className="font-body text-sm text-foreground text-center">
        {name}
      </span>
    </motion.div>
  );
}

function ToolCard({
  icon: Icon,
  name,
  desc,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl p-5 flex flex-col gap-3 cursor-default transition-smooth group"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(0,136,255,0.45)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 22px rgba(0,136,255,0.2), 0 8px 24px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
        <Icon size={18} className="text-white" />
      </div>
      <div>
        <p className="font-display font-semibold text-sm text-foreground">
          {name}
        </p>
        <p className="font-body text-xs text-muted-foreground mt-0.5">{desc}</p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      data-ocid="skills.section"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.14 0.009 270)" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.58 0.24 300) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[300px] rounded-full pointer-events-none opacity-8"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.72 0.2 190) 0%, transparent 70%)",
          filter: "blur(90px)",
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
            02 — Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What I <span className="gradient-text">Bring</span> to the Table
          </h2>
          <div
            className="h-px w-20 mt-1"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.68 0.22 270), oklch(0.72 0.2 190), transparent)",
            }}
          />
        </motion.div>

        <div className="space-y-14">
          {/* Design Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-1 h-5 rounded-full gradient-primary" />
              <h3
                className="font-display text-sm font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.68 0.22 270)" }}
              >
                Design Skills
              </h3>
            </motion.div>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3"
              data-ocid="skills.design.list"
            >
              {DESIGN_SKILLS.map((s, i) => (
                <SkillCard key={s.name} icon={s.icon} name={s.name} index={i} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-1 h-5 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.58 0.24 300), oklch(0.72 0.2 190))",
                }}
              />
              <h3
                className="font-display text-sm font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.58 0.24 300)" }}
              >
                Tools
              </h3>
            </motion.div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg"
              data-ocid="skills.tools.list"
            >
              {TOOLS.map((t, i) => (
                <ToolCard
                  key={t.name}
                  icon={t.icon}
                  name={t.name}
                  desc={t.desc}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-1 h-5 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.72 0.2 190), oklch(0.68 0.22 270))",
                }}
              />
              <h3
                className="font-display text-sm font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.72 0.2 190)" }}
              >
                Technical Skills
              </h3>
            </motion.div>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              data-ocid="skills.tech.list"
            >
              {TECH_SKILLS.map((t, i) => (
                <ToolCard
                  key={t.name}
                  icon={t.icon}
                  name={t.name}
                  desc={t.desc}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
