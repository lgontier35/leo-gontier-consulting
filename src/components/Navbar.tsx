"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { usePathname } from "next/navigation";

const sections = [
  { href: "services", label: "Services" },
  { href: "methodologie", label: "Approche" },
  { href: "projets", label: "Réalisations" },
  { href: "about", label: "À propos" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home page: #section anchors. On other pages: /#section to go back home.
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hero-slide-down ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href={isHome ? "#" : "/"} className="text-lg font-bold tracking-tight">
            <span className="text-text-primary">léo</span>
            <span className="gradient-text ml-0.5">gontier</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((link) => (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Expertise — bouton distinct */}
            <div className="w-px h-5 bg-border" />
            <a
              href="/expertise"
              className={`text-sm px-4 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                pathname === "/expertise"
                  ? "border-accent bg-accent/10 text-accent-light"
                  : "border-border text-text-secondary hover:border-accent/50 hover:text-accent-light"
              }`}
            >
              <Code2 size={14} />
              Stack technique
            </a>

            <a
              href={sectionHref("contact")}
              className="text-sm px-5 py-2 rounded-full bg-accent text-white hover:bg-accent-light transition-colors"
            >
              Discutons
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {sections.map((link) => (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-light text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/expertise"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-light text-accent-light flex items-center gap-2"
            >
              <Code2 size={20} />
              Stack technique
            </a>
            <a
              href={sectionHref("contact")}
              onClick={() => setMobileOpen(false)}
              className="mt-4 text-center text-lg px-6 py-3 rounded-full bg-accent text-white"
            >
              Discutons
            </a>
          </div>
        </div>
      )}
    </>
  );
}
