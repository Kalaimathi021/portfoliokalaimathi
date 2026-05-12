import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-white/[0.08] shadow-glow"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-lg gradient-text select-none"
        >
          KR
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 gradient-primary rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          data-ocid="nav.contact_button"
          onClick={() => scrollTo("#contact")}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-display gradient-primary text-white transition-smooth hover:opacity-90 hover:shadow-glow"
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          data-ocid="nav.mobile_toggle"
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden glass-card border-t border-white/[0.08] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
                setOpen(false);
              }}
              className="text-sm font-body text-muted-foreground hover:text-foreground py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            data-ocid="nav.mobile.contact_button"
            onClick={() => {
              scrollTo("#contact");
              setOpen(false);
            }}
            className="mt-2 px-4 py-2 rounded-lg text-sm font-medium font-display gradient-primary text-white text-center"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
