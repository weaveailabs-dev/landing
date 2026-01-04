import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Approach } from "@/components/sections/approach";
import { Offerings } from "@/components/sections/offerings";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        <Hero />

        <div id="problems">
          <Problems />
        </div>

        <div id="approach">
          <Approach />
        </div>

        <div id="offerings">
          <Offerings />
        </div>

        <div id="how-it-works">
          <HowItWorks />
        </div>

        <div id="pricing">
          <Pricing />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}
