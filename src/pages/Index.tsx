import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { StudyMaterials } from "@/components/StudyMaterials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    let hasRedirected = false;
    
    // Detectar quando o usuário move o mouse para sair da viewport (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasRedirected) {
        hasRedirected = true;
        window.location.href = "https://pnd-flash-boost.lovable.app";
      }
    };

    // Detectar quando o usuário tenta fechar a aba/janela
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasRedirected) {
        // Primeiro tenta redirecionar
        window.location.href = "https://pnd-flash-boost.lovable.app";
        
        // Se o redirecionamento for bloqueado, mostra mensagem
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    // Detectar quando o usuário usa o botão voltar do navegador
    const handlePopState = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        window.location.href = "https://pnd-flash-boost.lovable.app";
      }
    };

    // Adicionar os event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
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