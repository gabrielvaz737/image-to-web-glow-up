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
    let isNavigatingInternally = false;

    // Marca navegações internas para não disparar o redirect
    const markInternalNavigation = () => {
      isNavigatingInternally = true;
      setTimeout(() => {
        isNavigatingInternally = false;
      }, 100);
    };

    // Adiciona listeners em todos os links e botões para marcar navegação interna
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        markInternalNavigation();
      }
    };

    // Detecta tentativa real de sair da página
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isNavigatingInternally) {
        // Tenta redirecionar imediatamente
        window.location.href = redirectUrl;
        // Alguns navegadores bloqueiam, então mostramos um diálogo
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Fallback para mobile que não suporta beforeunload
    const handlePageHide = (e: PageTransitionEvent) => {
      if (!e.persisted && !isNavigatingInternally) {
        // Redireciona quando a página está sendo ocultada definitivamente
        window.location.replace(redirectUrl);
      }
    };

    // Adiciona todos os event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handlePageHide);
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