import { CheckCircle, BookOpen, Users, Award, Clock, Shield, Zap, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: BookOpen,
    title: "Guia Completo FGV",
    description: "Material direcionado com temas mais cobrados, questões comentadas e simulados padrão FGV",
  },
  {
    icon: Users,
    title: "Padrão FGV Decodificado",
    description: "Entenda como a FGV formula questões e aprenda a linguagem da banca",
  },
  {
    icon: Award,
    title: "97% de Satisfação",
    description: "Nossa metodologia direcionada já ajudou mais de 5.780 professores em concursos",
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Estude no seu ritmo com acesso ilimitado e todas as atualizações futuras",
  },
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Não gostou? Devolvemos 100% do seu investimento sem burocracia",
  },
  {
    icon: Zap,
    title: "Estudo Direcionado",
    description: "Roteiros prontos de 7, 15 e 30 dias focados no que realmente cai",
  },
  {
    icon: HeartHandshake,
    title: "Suporte 24/7",
    description: "Time de suporte sempre disponível para tirar suas dúvidas quando precisar",
  },
  {
    icon: CheckCircle,
    title: "Mapas + Audiobook",
    description: "+120 mapas mentais e audiobook para revisar em qualquer lugar",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Por que o Guia
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Direcionado FGV funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Porque a FGV tem um padrão. E quando você entende o padrão, você acerta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gold/10 hover:border-gold/30 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-navy-dark">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}