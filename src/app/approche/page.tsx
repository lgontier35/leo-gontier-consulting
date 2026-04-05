import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Methodology from "@/components/Methodology";
import About from "@/components/About";
import Conviction from "@/components/Conviction";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";

export const metadata = {
  title: "Approche | Léo Gontier — Méthodologie & qui je suis",
  description:
    "Ma méthode en 6 étapes, mon parcours entrepreneurial et pourquoi un seul interlocuteur change tout.",
};

export default function ApprochePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          tag="Approche"
          title="Comment je travaille et"
          highlight="qui je suis"
          highlightStyle="warm"
          subtitle="Une méthode éprouvée, un interlocuteur unique, et une conviction : les vrais problèmes se résolvent en partenariat."
        />
        <Methodology withHeader={false} />
        <About withHeader={true} />
        <Conviction />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
