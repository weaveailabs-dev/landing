import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Approach } from "@/components/sections/approach";
import { Offerings } from "@/components/sections/offerings";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { FAQ } from "@/components/sections/faq";
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

        <div id="how-it-works">
          <Approach />
        </div>

        <div id="offerings">
          <Offerings />
        </div>

        <div id="who-its-for">
          <WhoItsFor />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}
