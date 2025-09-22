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
    
    // Adiciona múltiplas entradas no histórico para garantir captura no mobile
    window.history.pushState({ page: 1 }, '', window.location.href);
    window.history.pushState({ page: 2 }, '', window.location.href);
    window.history.pushState({ page: 3 }, '', window.location.href);

    const handlePopState = (e: PopStateEvent) => {
      // Previne o comportamento padrão e força redirecionamento
      e.preventDefault();
      
      // Adiciona mais uma entrada para manter o usuário na página
      window.history.pushState({ page: 'current' }, '', window.location.href);
      
      // Redireciona imediatamente
      window.location.replace(redirectUrl);
    };

    // Adiciona listener para o botão voltar
    window.addEventListener('popstate', handlePopState);
    
    // Fallback para mobile - detecta mudanças no hash
    window.location.hash = '#main';
    const handleHashChange = () => {
      if (!window.location.hash || window.location.hash !== '#main') {
        window.location.replace(redirectUrl);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
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