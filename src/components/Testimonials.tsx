import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aprovada - Professora Federal",
    content: "Depois de 3 anos tentando, finalmente consegui minha aprovação! O material é completo e o suporte fez toda diferença.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "João Pedro",
    role: "Aprovado - Docente IFSP",
    content: "A metodologia é incrível! Em apenas 6 meses de estudo consegui a aprovação que tanto sonhava. Recomendo muito!",
    rating: 5,
    initials: "JP",
  },
  {
    name: "Ana Costa",
    role: "Aprovada - Professora UFRJ",
    content: "O diferencial foi a mentoria individual. Ter um professor para tirar dúvidas e orientar meus estudos foi fundamental.",
    rating: 5,
    initials: "AC",
  },
  {
    name: "Carlos Oliveira",
    role: "Aprovado - Docente UnB",
    content: "Apostilas atualizadas e simulados idênticos à prova real. Conquistei minha vaga no primeiro concurso que prestei!",
    rating: 5,
    initials: "CO",
  },
  {
    name: "Beatriz Santos",
    role: "Aprovada - Professora UFMG",
    content: "O investimento vale cada centavo! Hoje ganho R$ 5.700 e tenho estabilidade. Mudou minha vida completamente.",
    rating: 5,
    initials: "BS",
  },
  {
    name: "Rafael Mendes",
    role: "Aprovado - Docente UFRGS",
    content: "Suporte 24h é real! Sempre que precisei, recebi ajuda imediata. A equipe está comprometida com nossa aprovação.",
    rating: 5,
    initials: "RM",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Histórias de
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos alunos aprovados têm a dizer sobre a jornada até a conquista
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-gold/10 hover:border-gold/30 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 ring-2 ring-gold/20">
                  <AvatarFallback className="bg-gradient-gold text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-navy-dark">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}