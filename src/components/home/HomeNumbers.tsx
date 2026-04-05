"use client";

import AnimatedSection from "../AnimatedSection";

const numbers = [
  {
    value: "400K$",
    label: "de CA généré",
    sub: "1re année avec Typhon Club",
  },
  {
    value: "5+",
    label: "entreprises fondées",
    sub: "Entrepreneur depuis 2022",
  },
  {
    value: "4 ans",
    label: "Étudiant-Entrepreneur",
    sub: "Programme PEPITE France",
  },
  {
    value: "1:1",
    label: "interlocuteur unique",
    sub: "De la stratégie à la livraison",
  },
];

export default function HomeNumbers() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-tertiary/5 rounded-full blur-[80px]" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {numbers.map((num) => (
                <div key={num.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {num.value}
                  </div>
                  <div className="text-sm text-text-primary font-medium mb-0.5">
                    {num.label}
                  </div>
                  <div className="text-xs text-text-muted">{num.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
