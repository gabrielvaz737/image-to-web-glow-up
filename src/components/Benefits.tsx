import { CheckCircle, BookOpen, Users, Award, Clock, Shield, Zap, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: BookOpen,
    title: "Apostilas Completas",
    description: "Material atualizado com todo conteúdo do edital, questões comentadas e simulados exclusivos",
  },
  {
    icon: Users,
    title: "Mentoria Individual",
    description: "Acompanhamento personalizado com professores especialistas em concursos públicos",
  },
  {
    icon: Award,
    title: "93% de Aprovação",
    description: "Nossa metodologia comprovada já aprovou mais de 5.780 alunos em concursos federais",
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Estude no seu ritmo com acesso ilimitado ao conteúdo até sua aprovação",
  },
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Não gostou? Devolvemos 100% do seu investimento sem burocracia",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Metodologia acelerada para você conquistar sua vaga em tempo recorde",
  },
  {
    icon: HeartHandshake,
    title: "Suporte 24/7",
    description: "Time de suporte sempre disponível para tirar suas dúvidas quando precisar",
  },
  {
    icon: CheckCircle,
    title: "Certificado Incluso",
    description: "Receba certificado de conclusão válido em todo território nacional",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Por que escolher a
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Conquista Concursos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa metodologia exclusiva combina tecnologia, experiência e suporte personalizado
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