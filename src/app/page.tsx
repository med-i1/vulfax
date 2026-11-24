import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { WhyVulfax } from "@/components/sections/WhyVulfax";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <BrandStatement />
        <Capabilities />
        <Process />
        <WhyVulfax />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
