import { Check, X, Flame, Users, Target, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "PND - Guia Essencial",
    subtitle: "Você recebe:",
    price: "10,90",
    originalPrice: "49,90",
    badge: "Oferta Básica",
    badgeColor: "bg-destructive",
    features: [
      { text: "+350 Questões Comentadas da PND", included: true },
      { text: "Foco total nos temas mais cobrados", included: true },
      { text: "Bônus: 3 Simulados ENADE: 120 Questões", included: true },
      { text: "Bônus: Combo ECA", included: false },
      { text: "Bônus: Combo LDB", included: false },
      { text: "Bônus: Simulado INEP", included: false },
      { text: "Bônus: Mapas Mentais: Educação", included: false },
      { text: "Bônus: Técnicas de Estudo", included: false },
    ],
    popular: false,
    cta: "ESSA SERVE PARA MIM!",
    payment: "Pagamento único, acesso imediato",
    buttonVariant: "success" as const,
  },
  {
    name: "PND - Combo Premium +7 BÔNUS",
    subtitle: "Você leva tudo isso:",
    price: "22,90",
    originalPrice: "129,70",
    badge: "Oferta Premium",
    badgeColor: "bg-gradient-gold",
    discount: "86% OFF",
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
  return (
    <section className="py-20 bg-navy-dark text-white">
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Footer Timer */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-lg">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-white">
              <strong className="text-gold">Tempo restante:</strong> 9:08
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