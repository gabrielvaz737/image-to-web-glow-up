import { Check, X, Flame, Users, Target, TrendingUp, Clock, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import garantia30Dias from "@/assets/garantia-30-dias.png";
import pndMockup from "@/assets/pnd-mockup.png";

const plans = [
  {
    name: "PND - Combo Premium +7 BÔNUS",
    subtitle: "Material completo para sua aprovação:",
    price: "27,90",
    originalPrice: "129,70",
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
    // Usar o novo link de checkout criado para o plano único de R$ 27,90
    const checkoutLink = 'https://pay.kiwify.com.br/QFSZyjq';
    window.open(checkoutLink, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with statistics */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-gold animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Sua Aprovação Começa Aqui
            </h2>
            <Sparkles className="w-8 h-8 text-gold animate-pulse" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-2 rounded-full border border-white/10">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-base md:text-lg">
                <strong className="text-gold">4.587</strong> professores aprovados
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-2 rounded-full border border-white/10">
              <Star className="w-5 h-5 text-success" />
              <span className="text-base md:text-lg">
                <strong className="text-success">97%</strong> de aprovação
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-2 rounded-full border border-white/10">
              <TrendingUp className="w-5 h-5 text-gold" />
              <span className="text-base md:text-lg">
                <strong className="text-gold">10x</strong> mais chances
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-md mx-auto px-4">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 sm:p-8 bg-navy-dark/90 backdrop-blur-xl border-2 ${
                plan.popular
                  ? "border-gold shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                  : "border-white/20"
              } hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:border-gold/60 transition-all duration-500`}
            >

              {/* Plan Name */}
              <div className="text-center mb-6 mt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gold text-sm font-semibold">{plan.subtitle}</p>
              </div>

              {/* Mockup Image */}
              <div className="mb-6 relative px-4 max-w-[240px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-xl blur-xl" />
                <img 
                  src={pndMockup} 
                  alt="Material PND Combo Premium" 
                  className="w-full h-auto object-contain relative z-10 animate-float rounded-lg"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  Material Completo + 7 Bônus
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 bg-navy-dark/80 backdrop-blur p-4 rounded-xl border border-white/10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <div className="relative">
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <div className="absolute -inset-1 bg-success/20 rounded-full blur animate-pulse" />
                      </div>
                    ) : (
                      <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    )}
                    <span className={`text-xs sm:text-sm ${feature.included ? 'text-white' : 'text-white/50 line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="text-center mb-6 p-4 bg-navy-dark/80 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-white/60 line-through text-base">
                    R${plan.originalPrice}
                  </span>
                  {plan.discount && (
                    <Badge className="bg-destructive text-white font-bold px-2 py-0.5 text-xs">
                      {plan.discount}
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-gold">R$</span>
                  <span className="text-4xl sm:text-5xl font-bold text-gold">
                    {plan.price}
                  </span>
                </div>
                <p className="text-xs text-gold/80 mt-2 font-medium">{plan.payment}</p>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full group relative overflow-hidden"
                size="lg"
                variant={plan.buttonVariant}
                onClick={() => handlePurchase(plan.name)}
              >
                <span className="relative z-10 font-bold text-lg flex items-center justify-center gap-2">
                  {plan.cta}
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="flex flex-col items-center mt-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-purple-500/20 to-gold/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src={garantia30Dias} 
              alt="Garantia de 30 dias" 
              className="w-40 h-40 sm:w-52 sm:h-52 object-contain animate-float mb-6 relative z-10"
            />
          </div>
        </div>

        {/* Footer Timer */}
        <div className="text-center mt-12 p-6 bg-navy-dark/80 rounded-2xl">
          <div className="flex items-center justify-center gap-2 text-lg mb-4">
            <Clock className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-white font-medium">
              <strong className="text-gold">Tempo restante:</strong> 
              <span className="text-xl sm:text-2xl font-bold ml-2 text-gold">
                {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </span>
          </div>
          <p className="text-sm text-white/80 mt-4 flex items-center justify-center gap-2 font-medium">
            <span className="text-blue-400">🔒</span>
            Compra 100% segura. Ou você ama, ou devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}