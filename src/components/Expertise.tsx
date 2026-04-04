"use client";

import AnimatedSection from "./AnimatedSection";

interface SkillGroup {
  category: string;
  skills: { name: string; level: "expert" | "advanced" | "solid" }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Data & BI",
    skills: [
      { name: "Power BI", level: "expert" },
      { name: "DAX / Power Query", level: "expert" },
      { name: "SQL", level: "expert" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "ETL / Dataflows", level: "advanced" },
      { name: "Modélisation dimensionnelle", level: "advanced" },
      { name: "Python (Data)", level: "solid" },
    ],
  },
  {
    category: "Développement",
    skills: [
      { name: "TypeScript", level: "expert" },
      { name: "Next.js / React", level: "expert" },
      { name: "Node.js", level: "advanced" },
      { name: "Prisma / ORM", level: "advanced" },
      { name: "REST API", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Git / CI-CD", level: "advanced" },
    ],
  },
  {
    category: "Automatisation & IA",
    skills: [
      { name: "Power Automate", level: "advanced" },
      { name: "Scripting (Python/JS)", level: "advanced" },
      { name: "API Integrations", level: "expert" },
      { name: "LLM / OpenAI / Claude", level: "advanced" },
      { name: "Webhooks", level: "expert" },
      { name: "Workflows automatisés", level: "advanced" },
    ],
  },
  {
    category: "Plateforme & Cloud",
    skills: [
      { name: "Vercel", level: "expert" },
      { name: "Azure", level: "advanced" },
      { name: "Stripe", level: "advanced" },
      { name: "Shopify API", level: "solid" },
      { name: "Auth (NextAuth / JWT)", level: "advanced" },
      { name: "Docker", level: "solid" },
    ],
  },
];

const levelColors = {
  expert: "bg-accent text-white",
  advanced: "bg-accent-tertiary/20 text-accent-tertiary",
  solid: "bg-accent-secondary/20 text-accent-secondary",
};

const levelLabels = {
  expert: "Expert",
  advanced: "Avancé",
  solid: "Maîtrisé",
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="tag mb-4 inline-block">Stack technique</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Des compétences <span className="gradient-text">concrètes</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Pas de buzzwords. Des outils que je maîtrise et que j&apos;utilise au quotidien
            sur des projets réels.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <h3 className="text-lg font-semibold mb-4 text-text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${levelColors[skill.level]}`}
                    >
                      {skill.name}
                      <span className="text-[10px] opacity-70">{levelLabels[skill.level]}</span>
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
