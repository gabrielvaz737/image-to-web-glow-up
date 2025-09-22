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

    // Adiciona uma única entrada no histórico para capturar o primeiro "Voltar"
    window.history.pushState({ backBlocked: true }, "", window.location.href);

    const handlePopState = () => {
      // Redireciona somente quando o usuário clicar no botão Voltar
      window.location.replace(redirectUrl);
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup
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