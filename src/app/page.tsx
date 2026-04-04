import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Conviction from "@/components/Conviction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Methodology />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <About />
        <Conviction />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
