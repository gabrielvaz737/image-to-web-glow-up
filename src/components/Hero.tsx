import { Check, Trophy, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import logo from "@/assets/logo-conquista.jpeg";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    scrollToSection('pricing');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239ca3af' fill-opacity='0.5'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-float">
            <img 
              src={logo} 
              alt="Conquista Concursos" 
              className="w-32 h-32 rounded-full shadow-2xl ring-4 ring-gold/20"
            />
          </div>

          {/* Badge */}
          <Badge className="bg-success text-success-foreground px-6 py-2 text-lg font-semibold">
            🎯 EDITAL PUBLICADO
          </Badge>

          {/* Main heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-navy-dark leading-tight">
            PROVA NACIONAL
            <span className="block text-transparent bg-clip-text bg-gradient-gold">
              DOCENTE
            </span>
          </h1>

          {/* Impact Headline */}
          <div className="bg-gradient-gold p-1 rounded-2xl max-w-4xl mx-auto my-6">
            <div className="bg-background rounded-xl p-6">
              <p className="text-lg md:text-2xl font-bold text-foreground">
                🎯 Quem já decifrou o INEP entrega tudo mastigado pra você chegue na PND sabendo exatamente o que vai cair
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Conquiste sua aprovação no concurso dos seus sonhos com a preparação mais completa do Brasil
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">93%</div>
              <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">5.780</div>
              <div className="text-sm text-muted-foreground">Alunos Aprovados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">12+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold">R$ 5.700</div>
              <div className="text-sm text-muted-foreground">Salário Inicial</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="gold" 
              className="text-lg px-8 py-6"
              onClick={handleCTAClick}
            >
              <Trophy className="mr-2" />
              GARANTIR MINHA VAGA
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2"
              onClick={() => scrollToSection('testimonials')}
            >
              <Calendar className="mr-2" />
              VER DEPOIMENTOS
            </Button>
          </div>

          {/* Countdown */}
          <CountdownTimer targetDate="2025-12-01T10:00:00" />

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
            {["Apostilas Atualizadas", "Suporte 24h", "Garantia de 30 dias", "Certificado Incluso"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-gold rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    </section>
  );
}