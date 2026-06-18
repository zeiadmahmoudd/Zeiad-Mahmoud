import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Skills from "@/components/Skills";
import Architecture from "@/components/Architecture";
import DocumentUnderstanding from "@/components/DocumentUnderstanding";
import UseCases from "@/components/UseCases";
import LogoWall from "@/components/LogoWall";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Skills />
        <Architecture />
        <DocumentUnderstanding />
        <UseCases />
        <LogoWall />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
