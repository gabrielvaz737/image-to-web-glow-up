import { FileText, Video, Headphones, PenTool, BookMarked, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const materials = [
  {
    icon: FileText,
    title: "Apostilas Digitais",
    count: "1.200+ páginas",
    description: "Material completo e atualizado conforme último edital",
    badge: "PDF",
  },
  {
    icon: Video,
    title: "Videoaulas",
    count: "300+ horas",
    description: "Aulas gravadas com os melhores professores do Brasil",
    badge: "HD",
  },
  {
    icon: PenTool,
    title: "Questões Comentadas",
    count: "5.000+ questões",
    description: "Banco de questões de provas anteriores com gabarito",
    badge: "Atualizado",
  },
  {
    icon: Brain,
    title: "Simulados",
    count: "50+ provas",
    description: "Simulados no mesmo formato da prova oficial",
    badge: "Online",
  },
  {
    icon: Headphones,
    title: "Audiobooks",
    count: "100+ horas",
    description: "Estude enquanto dirige ou pratica exercícios",
    badge: "MP3",
  },
  {
    icon: BookMarked,
    title: "Resumos",
    count: "200+ mapas",
    description: "Mapas mentais e resumos para revisão rápida",
    badge: "Visual",
  },
];

export function StudyMaterials() {
  return (
    <section className="py-20 bg-muted/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}