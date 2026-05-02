import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StickySocials from "@/components/StickySocials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full relative">
      <Navbar />
      <StickySocials />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
