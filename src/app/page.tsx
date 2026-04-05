import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomePillars from "@/components/home/HomePillars";
import HomeNumbers from "@/components/home/HomeNumbers";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeQuickFlow from "@/components/home/HomeQuickFlow";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomePillars />
        <HomeNumbers />
        <HomeFeatured />
        <HomeQuickFlow />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
