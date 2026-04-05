"use client";

import AnimatedSection from "../AnimatedSection";
import { ArrowRight, Calendar } from "lucide-react";

export default function HomeFinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Background orbs */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent-tertiary/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <span className="tag mb-5 inline-block">Premier échange gratuit</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Un projet en tête ?<br />
                <span className="gradient-text">Parlons-en 30 minutes.</span>
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
                Décrivez-moi votre besoin, même flou. Je vous réponds sous 24h avec un
                premier avis honnête et les prochaines étapes possibles.
                Pas d&apos;engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="group px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Réserver un échange
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:pro.leogontier@gmail.com"
                  className="px-7 py-3.5 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-border-light transition-all inline-flex items-center justify-center gap-2"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
