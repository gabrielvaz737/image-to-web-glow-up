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
    
    // Detectar quando o usuário move o mouse para sair da viewport (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasRedirected) {
        hasRedirected = true;
        window.location.href = redirectUrl;
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
        window.location.href = redirectUrl;
      }
    };

    // Detectar inatividade (mobile e desktop)
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      // Redireciona após 30 segundos de inatividade
      inactivityTimer = setTimeout(() => {
        if (!hasRedirected) {
          hasRedirected = true;
          window.location.href = redirectUrl;
        }
      }, 30000);
    };

    // Detectar quando o usuário tenta fechar a aba/janela
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasRedirected) {
        // Tenta redirecionar primeiro
        window.location.href = redirectUrl;
        
        // Se o redirecionamento for bloqueado, mostra mensagem
        e.preventDefault();
        e.returnValue = 'Tem certeza que deseja sair? Temos uma oferta especial para você!';
        return 'Tem certeza que deseja sair? Temos uma oferta especial para você!';
      }
    };

    // Detectar quando o usuário usa o botão voltar do navegador
    const handlePopState = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        window.location.href = redirectUrl;
      }
    };

    // Detectar mudança de visibilidade da página (mobile - quando muda de aba/app)
    const handleVisibilityChange = () => {
      if (document.hidden && !hasRedirected) {
        // Marca um timer para redirecionar quando voltar
        setTimeout(() => {
          if (!document.hidden && !hasRedirected) {
            hasRedirected = true;
            window.location.href = redirectUrl;
          }
        }, 100);
      }
    };

    // Adicionar os event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Eventos de atividade para resetar o timer
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('click', resetInactivityTimer);
    document.addEventListener('touchstart', resetInactivityTimer);
    document.addEventListener('scroll', resetInactivityTimer);
    
    // Iniciar timer de inatividade
    resetInactivityTimer();

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('click', resetInactivityTimer);
      document.removeEventListener('touchstart', resetInactivityTimer);
      document.removeEventListener('scroll', resetInactivityTimer);
      clearTimeout(inactivityTimer);
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