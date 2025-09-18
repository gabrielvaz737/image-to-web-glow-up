import { FileText, Video, Headphones, PenTool, BookMarked, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import apostila images
import apostila1 from "@/assets/apostila-1.jpeg";
import apostila2 from "@/assets/apostila-2.jpeg";

const materials = [
  {
    icon: FileText,
    title: "Apostilas Digitais",
    count: "1.200+ páginas",
    description: "Todo conteúdo já atualizado, direto do edital, pronto pra você estudar sem perder tempo.",
    badge: "PDF",
  },
  {
    icon: Video,
    title: "Videoaulas",
    count: "300+ horas",
    description: "Aulas rápidas e diretas, explicadas no mesmo estilo que a banca cobra.",
    badge: "HD",
  },
  {
    icon: PenTool,
    title: "Questões Comentadas",
    count: "450+ questões",
    description: "Mais de 450 questões comentadas no estilo INEP — você estuda já sabendo como a banca cobra.",
    badge: "Atualizado",
  },
  {
    icon: Brain,
    title: "Simulados",
    count: "50+ provas",
    description: "Treine com simulados iguais aos da prova real — sem surpresa no dia.",
    badge: "Online",
  },
  {
    icon: Headphones,
    title: "Audiobooks",
    count: "100+ horas",
    description: "Estude ouvindo no carro ou lavando a louça — aproveite cada minuto.",
    badge: "MP3",
  },
  {
    icon: BookMarked,
    title: "Resumos",
    count: "200+ mapas",
    description: "Resumo mastigado e direto ao ponto — perfeito pra revisar na véspera.",
    badge: "Visual",
  },
];

const apostilas = [
  { 
    src: apostila1, 
    title: "Conhecimentos Didático-Pedagógicos",
    description: "Apostila completa com teorias educacionais"
  },
  { 
    src: apostila2, 
    title: "Filosofia da Educação",
    description: "Material aprofundado em filosofia educacional"
  },
];

export function StudyMaterials() {
  return (
    <section id="materials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Material de Estudo
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Completo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para conquistar sua aprovação em um só lugar
          </p>
        </div>

        {/* Grid de Materiais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materials.map((material, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gold/10 hover:border-gold/30 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <material.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-gold/10 text-gold-dark border-gold/20">
                    {material.badge}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-1 text-navy-dark">{material.title}</h3>
                <p className="text-gold font-bold text-sm mb-2">{material.count}</p>
                <p className="text-muted-foreground text-sm">{material.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Carousel de Apostilas */}
        <div>
          <h3 className="text-2xl font-semibold text-navy-dark text-center mb-6">
            Nossas Apostilas Exclusivas (exemplos)
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {[...apostilas, ...apostilas, ...apostilas].map((apostila, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 hover:shadow-xl transition-all duration-300 border-gold/10 hover:border-gold/30">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={apostila.src}
                        alt={apostila.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h4 className="font-semibold text-navy-dark mb-1">{apostila.title}</h4>
                    <p className="text-sm text-muted-foreground">{apostila.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}