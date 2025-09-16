import { Check, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Básico",
    price: "197",
    originalPrice: "397",
    discount: "50% OFF",
    features: [
      "Apostilas digitais completas",
      "500+ questões comentadas",
      "10 simulados online",
      "Grupo de estudos no WhatsApp",
      "Certificado de conclusão",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "297",
    originalPrice: "597",
    discount: "50% OFF",
    features: [
      "Tudo do plano Básico",
      "Mentoria individual semanal",
      "Correção de redações ilimitada",
      "Aulas ao vivo semanais",
      "Suporte prioritário 24/7",
      "Material impresso (frete grátis)",
      "Garantia de aprovação*",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "497",
    originalPrice: "997",
    discount: "50% OFF",
    features: [
      "Tudo do plano Premium",
      "Coaching personalizado",
      "Plano de estudos individual",
      "Acompanhamento psicológico",
      "Acesso vitalício",
      "2 mentorias por semana",
      "Preparação para prova oral",
      "Bônus: Curso de oratória",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-destructive text-destructive-foreground">
            <Sparkles className="w-4 h-4 mr-1" />
            OFERTA POR TEMPO LIMITADO
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Escolha seu
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Plano de Estudos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investimento único com garantia de satisfação de 30 dias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? "border-gold shadow-2xl scale-105 border-2"
                  : "border-gold/20"
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-navy-dark font-bold">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  MAIS VENDIDO
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy-dark mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-muted-foreground line-through text-lg">
                    R$ {plan.originalPrice}
                  </span>
                  <Badge variant="destructive">{plan.discount}</Badge>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-lg">R$</span>
                  <span className="text-5xl font-bold text-navy-dark">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/único</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                size="lg"
                variant={plan.popular ? "gold" : "outline"}
              >
                <Users className="mr-2" />
                GARANTIR MINHA VAGA
              </Button>

              {plan.popular && (
                <p className="text-center text-xs text-muted-foreground mt-4">
                  👥 23 pessoas compraram nas últimas 2 horas
                </p>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * Garantia de aprovação: caso não seja aprovado em 12 meses, devolvemos 100% do valor investido
          </p>
        </div>
      </div>
    </section>
  );
}