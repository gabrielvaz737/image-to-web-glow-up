import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo-conquista.jpeg";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const whatsappNumber = '5511999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de mais informações sobre os cursos da Conquista Concursos.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openSocialMedia = (platform: string) => {
    const urls: Record<string, string> = {
      instagram: 'https://instagram.com/conquistaconcursos',
      facebook: 'https://facebook.com/conquistaconcursos',
      youtube: 'https://youtube.com/@conquistaconcursos'
    };
    window.open(urls[platform], '_blank');
  };
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Conquista Concursos" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold text-lg">Conquista Concursos</h3>
                <p className="text-xs text-gray-400">Apostilas & Preparação</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Há mais de 12 anos transformando sonhos em aprovações. Sua jornada rumo ao serviço público começa aqui.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-gold/20"
                onClick={() => openSocialMedia('instagram')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-gold/20"
                onClick={() => openSocialMedia('facebook')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-gold/20"
                onClick={() => openSocialMedia('youtube')}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} className="hover:text-gold transition-colors cursor-pointer">Sobre Nós</a></li>
              <li><a href="#materials" onClick={(e) => { e.preventDefault(); scrollToSection('materials'); }} className="hover:text-gold transition-colors cursor-pointer">Nossos Cursos</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="hover:text-gold transition-colors cursor-pointer">Depoimentos</a></li>
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="hover:text-gold transition-colors cursor-pointer">Planos</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="hover:text-gold transition-colors cursor-pointer">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Suporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors" onClick={() => window.location.href = 'mailto:contato@conquistaconcursos.com.br'}>
                <Mail className="w-4 h-4 text-gold" />
                contato@conquistaconcursos.com.br
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors" onClick={openWhatsApp}>
                <Phone className="w-4 h-4 text-gold" />
                (11) 4200-1234
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                São Paulo, SP - Brasil
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gold/10 rounded-lg border border-gold/20">
              <div className="flex items-center gap-2 text-gold text-sm">
                <Shield className="w-4 h-4" />
                Site 100% Seguro
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gold/20 mb-8" />

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-400">
            © 2025 Conquista Concursos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            CNPJ: 12.345.678/0001-90 | Conquista Educação LTDA
          </p>
        </div>
      </div>
    </footer>
  );
}