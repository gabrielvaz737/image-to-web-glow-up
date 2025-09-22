import { Check, X, Flame, Users, Target, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import garantia30Dias from "@/assets/garantia-30-dias.png";

const plans = [
  {
    name: "PND - Combo Premium +7 BÔNUS",
    subtitle: "Você leva tudo isso:",
    price: "27,90",
    originalPrice: "129,70",
    badge: "Oferta Premium",
    badgeColor: "bg-gradient-gold",
    discount: "78% OFF",
    features: [
      { text: "+450 Questões Comentadas e Gabaritadas", included: true },
      { text: "Foco total nos temas mais cobrados", included: true },
      { text: "Bônus: Combo ECA Comentado", included: true },
      { text: "Bônus: 350 Questões Pensadores- Educação", included: true },
      { text: "Bônus: 3 Simulados ENADE: 120 Questões", included: true },
      { text: "Bônus: Mapas Mentais: Educação", included: true },
      { text: "Bônus: Simulado INEP Realista", included: true },
      { text: "Bônus: Combo LDB Essencial", included: true },
      { text: "Bônus: Técnicas de Estudo", included: true },
    ],
    popular: true,
    cta: "QUERO A PREMIUM AGORA!",
    payment: "Acesso completo imediato",
    buttonVariant: "destructive" as const,
  },
];

export function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 9,
    seconds: 8,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            // Reset to 30 minutes when timer reaches 0
            return { minutes: 30, seconds: 0 };
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: prev.minutes, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePurchase = (planName: string) => {
    // Usar sempre o link do PND COMBO PREMIUM para o plano único de R$ 27,90
    const checkoutLink = 'https://pay.kiwify.com.br/0FNVG4I';
    window.open(checkoutLink, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-navy-dark text-white">
      <div className="container mx-auto px-4">
        {/* Header with statistics */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <Flame className="w-10 h-10 text-gold animate-pulse" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-lg">
                <strong className="text-gold">4.587</strong> professores já garantiram
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-destructive" />
              <span className="text-lg">
                <strong className="text-destructive">97%</strong> taxa de aprovação
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gold" />
              <span className="text-lg">
                <strong className="text-gold">10x</strong> mais chances de acerto na PND
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-2xl mx-auto flex justify-center">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card/10 backdrop-blur border-2 ${
                plan.popular
                  ? "border-gold shadow-2xl"
                  : "border-white/20"
              } hover:shadow-xl transition-all duration-300`}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className={`${plan.badgeColor} text-white px-4 py-2 text-sm font-bold`}>
                  {plan.badge}
                </Badge>
              </div>

              {plan.popular && (
                <div className="absolute -top-12 right-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-3 py-1 text-xs font-bold">
                    MAIS VENDIDO
                  </Badge>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/80 text-sm">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-white/50 line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-white/50 line-through text-lg">
                    R${plan.originalPrice}
                  </span>
                  {plan.discount && (
                    <Badge className="bg-purple-500 text-white font-bold">
                      {plan.discount}
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-xl text-white">R$</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-xs text-white/60 mt-2">{plan.payment}</p>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full"
                size="lg"
                variant={plan.buttonVariant}
                onClick={() => handlePurchase(plan.name)}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="flex flex-col items-center mt-12">
          <img 
            src={garantia30Dias} 
            alt="Garantia de 30 dias" 
            className="w-48 h-48 object-contain animate-float mb-6"
          />
        </div>

        {/* Footer Timer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-2 text-lg">
            <Clock className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-white">
              <strong className="text-gold">Tempo restante:</strong> {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-sm text-white/60 mt-4 flex items-center justify-center gap-2">
            <span className="text-blue-400">🔒</span>
            Compra 100% segura. Ou você ama, ou devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}