import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";

export const metadata = {
  title: "Réalisations | Léo Gontier — Projets livrés en production",
  description:
    "Découvrez mes projets récents : plateforme B2B ŌME Cosmétique, Hub BI Cobredia. Des produits livrés, en production, qui génèrent de la valeur.",
};

export default function RealisationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          tag="Réalisations"
          title="Des projets"
          highlight="livrés en production"
          highlightStyle="warm"
          subtitle="Pas de maquettes Figma. Des produits concrets qui génèrent de la valeur au quotidien."
        />
        <Projects withHeader={false} />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
