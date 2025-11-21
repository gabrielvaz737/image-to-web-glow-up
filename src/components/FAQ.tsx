import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O material é atualizado?",
    answer: "Sim! O Guia é sempre atualizado conforme os últimos concursos da FGV. Você tem acesso vitalício e recebe todas as atualizações sem custo adicional.",
  },
  {
    question: "Serve para concursos de qual estado?",
    answer: "Para QUALQUER estado onde a banca é FGV. SP, RJ, CE, PA, MG, BA, GO, AM, PR, RS, MA… 👉 A FGV pode mudar de estado, mas não muda o estilo da prova.",
  },
  {
    question: "E se o edital ainda não saiu?",
    answer: "Perfeito! O guia funciona justamente antes do edital para te dar vantagem. Você já começa estudando o que realmente importa antes mesmo do edital sair.",
  },
  {
    question: "Tenho acesso imediato?",
    answer: "Sim! O material completo (PDF, mapas, simulados e audiobook) chega no seu e-mail assim que o pagamento é aprovado.",
  },
  {
    question: "É digital ou físico?",
    answer: "Totalmente digital. Você recebe tudo em PDF e pode imprimir se preferir. Inclui também áudio para estudar em qualquer lugar.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Você tem 30 dias para usar o guia, estudar, fazer simulados e testar o método. Se não amar o conteúdo, devolvemos 100% do seu dinheiro sem perguntas.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Aceitamos cartão de crédito com parcelamento, PIX à vista, ou boleto bancário.",
  },
  {
    question: "Como sei que o guia realmente funciona?",
    answer: "Analisamos centenas de provas FGV e mapeamos os temas mais cobrados, as pegadinhas clássicas e o estilo da banca. É um estudo científico do padrão FGV.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-navy">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Frequentes</span>
          </h2>
          <p className="text-xl text-white/80">
            Tire suas dúvidas sobre nosso método de aprovação
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-navy-light/60 border border-white/10 rounded-lg px-6 hover:border-gold/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-white hover:text-gold hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.open('https://pay.kiwify.com.br/QFSZyjq', '_blank')}
            className="bg-gradient-to-r from-gold-light to-gold text-navy-dark hover:from-gold hover:to-gold-dark font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            COMEÇAR AGORA POR R$ 27,90
          </button>
        </div>
      </div>
    </section>
  );
}