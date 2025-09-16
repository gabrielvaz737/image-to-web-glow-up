import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { StudyMaterials } from "@/components/StudyMaterials";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <StudyMaterials />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;