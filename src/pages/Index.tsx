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
    
    // Detecta se é mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("[EXIT-REDIRECT] Dispositivo detectado:", isMobile ? "Mobile" : "Desktop");
    
    if (isMobile) {
      // Estratégia para mobile: usa history API com popstate
      console.log("[EXIT-REDIRECT] Configurando estratégia mobile");
      
      // Adiciona entrada no histórico
      window.history.pushState({ preventBack: true }, "", window.location.href);
      
      const handlePopState = (e: PopStateEvent) => {
        console.log("[EXIT-REDIRECT] PopState disparado em mobile");
        // Previne voltar e redireciona
        window.history.pushState({ preventBack: true }, "", window.location.href);
        window.location.href = redirectUrl;
      };
      
      window.addEventListener("popstate", handlePopState);
      
      // Também tenta capturar visibilitychange em mobile
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          console.log("[EXIT-REDIRECT] Página ficando oculta em mobile");
          sessionStorage.setItem('exitIntent', 'true');
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      // Verifica se voltou de uma saída
      if (sessionStorage.getItem('exitIntent') === 'true') {
        console.log("[EXIT-REDIRECT] Detectada volta após tentativa de saída");
        sessionStorage.removeItem('exitIntent');
        window.location.href = redirectUrl;
      }
      
      return () => {
        window.removeEventListener("popstate", handlePopState);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } else {
      // Estratégia para desktop: beforeunload
      console.log("[EXIT-REDIRECT] Configurando estratégia desktop");
      
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        console.log("[EXIT-REDIRECT] BeforeUnload disparado em desktop");
        // Tenta redirecionar
        window.location.href = redirectUrl;
        // Fallback: mostra diálogo
        e.preventDefault();
        e.returnValue = '';
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
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