import { FileText, BookOpen, Headphones, PenTool, BookMarked, Brain } from "lucide-react";
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
    title: "Guia Digital Completo",
    count: "300+ páginas",
    description: "Todo conteúdo essencial da FGV, mapeado e organizado por relevância — estude só o que importa.",
    badge: "PDF",
  },
  {
    icon: Brain,
    title: "Simulados FGV",
    count: "10+ provas",
    description: "Simulados com o mesmo padrão de cobrança da FGV — treine com realismo total.",
    badge: "Online",
  },
  {
    icon: PenTool,
    title: "Questões Comentadas",
    count: "350+ questões",
    description: "Questões selecionadas e explicadas no estilo FGV — você aprende o padrão da banca.",
    badge: "Atualizado",
  },
  {
    icon: BookOpen,
    title: "Roteiros de Estudo",
    count: "3 roteiros",
    description: "Planejamento pronto de 7, 15 e 30 dias — estude de forma estratégica e direcionada.",
    badge: "Pronto",
  },
  {
    icon: Headphones,
    title: "Audiobook",
    count: "Bônus incluso",
    description: "Ouça os principais tópicos no carro, caminhando ou lavando louça — aproveite cada minuto.",
    badge: "MP3",
  },
  {
    icon: BookMarked,
    title: "Mapas Mentais",
    count: "120+ mapas",
    description: "Revisão rápida e visual — perfeito para o dia anterior à prova.",
    badge: "Visual",
  },
];

const apostilas = [
  { 
    src: apostila1, 
    title: "Conhecimentos Pedagógicos FGV",
    description: "Temas mais cobrados pela banca"
  },
  { 
    src: apostila2, 
    title: "Legislação Educacional",
    description: "Material direcionado e comentado"
  },
];

export function StudyMaterials() {
  return (
    <section id="materials" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Material de Estudo
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Completo</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Tudo que você precisa para conquistar sua aprovação em um só lugar
          </p>
        </div>

        {/* Grid de Materiais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materials.map((material, index) => (
            <Card
              key={index}
              className="p-6 bg-navy-light/80 backdrop-blur-sm text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-white/10 hover:border-gold/30 group relative overflow-hidden"
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
                
                <h3 className="font-semibold text-lg mb-1 text-white">{material.title}</h3>
                <p className="text-gold font-bold text-sm mb-2">{material.count}</p>
                <p className="text-white/80 text-sm">{material.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Carousel de Apostilas */}
        <div>
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            Nosso Material Direcionado (exemplos)
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
                  <Card className="p-4 bg-navy-light/80 text-white hover:shadow-xl transition-all duration-300 border-white/10 hover:border-gold/30">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={apostila.src}
                        alt={apostila.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{apostila.title}</h4>
                    <p className="text-sm text-white/80">{apostila.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold-light to-gold text-navy-dark hover:from-gold hover:to-gold-dark font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            QUERO MEU GUIA AGORA
          </button>
        </div>
      </div>
    </section>
  );
}