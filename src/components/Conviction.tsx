"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function Conviction() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-10 md:p-14 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-tertiary/5 rounded-full blur-[60px]" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Pourquoi un <span className="gradient-text">seul interlocuteur</span> change tout
              </h3>

              <p className="text-text-secondary leading-relaxed text-lg">
                Data, BI, développement web, automatisation, IA — je couvre un spectre large
                parce que les vrais problèmes ne rentrent pas dans des cases. Un projet CRM
                peut nécessiter du Power BI, de l&apos;automatisation et une API custom.
                Avoir un seul interlocuteur pour tout ça, c&apos;est un avantage concurrentiel.
              </p>

              <p className="text-text-primary font-medium text-lg border-l-2 border-accent pl-5">
                Je cherche des collaborations long terme avec des entreprises qui veulent
                se transformer. Pas des projets one-shot — des partenariats.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors group"
              >
                Construisons ensemble
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
