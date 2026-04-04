"use client";

import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-secondary/20 blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-accent-tertiary/15 blur-[100px] animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className="hero-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card/50 backdrop-blur-sm mb-8"
          style={{ animationDelay: "0s" }}
        >
          <Sparkles size={14} className="text-accent-light" />
          <span className="text-sm text-text-secondary">
            Consultant indépendant &mdash; Data, BI & Tech
          </span>
        </div>

        <h1
          className="hero-fade-in text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ animationDelay: "0.15s" }}
        >
          Je transforme vos
          <br />
          <span className="gradient-text">données</span> en{" "}
          <span className="gradient-text-warm">décisions</span>
        </h1>

        <p
          className="hero-fade-in text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          Data &middot; Business Intelligence &middot; Développement sur-mesure &middot;
          Automatisation &middot; IA
          <br />
          <span className="text-text-muted">
            Un interlocuteur unique, de la stratégie au déploiement.
          </span>
        </p>

        <div
          className="hero-fade-in flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Parlons de votre projet
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-border-light transition-all"
          >
            Découvrir mes services
          </a>
        </div>

      </div>

      {/* Scroll arrow — outside centered container, pinned to section bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-fade-in" style={{ animationDelay: "1.2s" }}>
        <a href="#services" className="text-text-muted hover:text-text-secondary transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
