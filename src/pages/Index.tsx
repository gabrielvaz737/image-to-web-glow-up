import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { StudyMaterials } from "@/components/StudyMaterials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const redirectUrl = "https://pnd-flash-boost.lovable.app";

    // Adiciona duas entradas no histórico para capturar o botão Voltar no mobile/desktop
    window.history.pushState({ backTrap: 1 }, "", window.location.href);
    window.history.pushState({ backTrap: 2 }, "", window.location.href);

    const handlePopState = () => {
      console.info("[back-redirect] interceptado: redirecionando para oferta");
      window.location.href = redirectUrl; // usar href para garantir navegação no iOS
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <StudyMaterials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;