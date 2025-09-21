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
    const redirectUrl = "https://pnd-flash-boost.lovable.app";
    
    // Adicionar entrada no histórico para detectar o botão voltar
    window.history.pushState(null, '', window.location.href);
    window.history.pushState(null, '', window.location.href);
    
    // Detectar quando o usuário move o mouse para sair da viewport (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasRedirected) {
        hasRedirected = true;
        window.location.replace(redirectUrl);
      }
    };

    // Detectar gestos de saída no mobile (swipe para cima/baixo nas bordas)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      // Se o usuário fizer swipe para cima partindo do topo da tela (tentando sair)
      if (touchStartY < 50 && deltaY > 100 && !hasRedirected) {
        hasRedirected = true;
        window.location.replace(redirectUrl);
      }
    };

    // Detectar inatividade (mobile e desktop) - REMOVIDO para não redirecionar automaticamente
    // O redirecionamento agora só acontece quando o usuário tenta sair

    // Detectar quando o usuário tenta fechar a aba/janela
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasRedirected) {
        // Tenta redirecionar primeiro
        setTimeout(() => {
          window.location.replace(redirectUrl);
        }, 0);
        
        // Se o redirecionamento for bloqueado, mostra mensagem
        e.preventDefault();
        e.returnValue = 'Tem certeza que deseja sair? Temos uma oferta especial para você!';
        return 'Tem certeza que deseja sair? Temos uma oferta especial para você!';
      }
    };

    // Detectar quando o usuário usa o botão voltar do navegador (mobile e desktop)
    const handlePopState = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        window.location.replace(redirectUrl);
      }
    };

    // Detectar mudança de visibilidade da página (mobile - quando muda de aba/app)
    const handleVisibilityChange = () => {
      if (document.hidden && !hasRedirected) {
        // Marca um timer para redirecionar quando voltar
        setTimeout(() => {
          if (!document.hidden && !hasRedirected) {
            hasRedirected = true;
            window.location.replace(redirectUrl);
          }
        }, 100);
      }
    };

    // Detectar navegação para trás usando hashchange (fallback para mobile)
    const handleHashChange = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        window.location.replace(redirectUrl);
      }
    };

    // Adicionar os event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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