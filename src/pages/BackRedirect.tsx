import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gift, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackRedirect = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleContinue = () => {
    window.location.href = 'https://pay.kiwify.com.br/0FNVG4I'; // Combo Premium com desconto
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6 inline-flex p-4 bg-destructive/10 rounded-full">
            <Gift className="w-12 h-12 text-destructive animate-pulse" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ESPERE! Não vá embora ainda...
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Temos uma <span className="text-destructive font-bold">OFERTA EXCLUSIVA</span> apenas para você!
          </p>

          <div className="bg-primary/5 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              🎁 DESCONTO ESPECIAL DE 40%
            </h2>
            
            <div className="space-y-3 text-left max-w-md mx-auto mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-foreground">Combo Premium Completo</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-foreground">+7 Bônus Exclusivos</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-foreground">Acesso Vitalício</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-foreground">Garantia de 30 Dias</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground line-through">De R$ 97,00</p>
              <p className="text-4xl font-bold text-primary">Por apenas R$ 57,00</p>
            </div>

            <div className="bg-destructive/10 rounded-lg p-3 mb-6 inline-flex items-center gap-2">
              <Clock className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-bold">
                Oferta expira em: {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleContinue}
              size="lg"
              className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
            >
              QUERO APROVEITAR O DESCONTO! 🎯
            </Button>
            
            <Button
              onClick={handleBack}
              variant="ghost"
              size="lg"
              className="w-full text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a página inicial
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            *Esta é uma oferta única e não estará disponível novamente
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackRedirect;