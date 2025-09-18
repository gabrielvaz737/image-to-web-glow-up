import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Se por qualquer motivo você não ficar satisfeito com nosso material, pode solicitar o reembolso integral em até 30 dias após a compra. Sem perguntas, sem burocracia.",
  },
  {
    question: "O material é atualizado conforme o edital?",
    answer: "Sim! Nosso time de professores acompanha todos os editais e atualiza o material imediatamente. Você sempre terá acesso à versão mais recente sem custo adicional.",
  },
  {
    question: "Quanto tempo tenho acesso ao conteúdo?",
    answer: "O acesso é vitalício! Você pode estudar no seu ritmo, revisar quantas vezes quiser e terá acesso a todas as atualizações futuras do material.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Aceitamos pagamento via cartão de crédito em até 12x sem juros, PIX com 10% de desconto adicional, ou boleto bancário à vista.",
  },
  {
    question: "As mentorias são ao vivo?",
    answer: "Sim! Nos planos Premium e VIP você tem acesso a mentorias ao vivo semanais, além de poder agendar sessões individuais com nossos professores.",
  },
  {
    question: "Vocês corrigem redações?",
    answer: "Nos planos Premium e VIP oferecemos correção ilimitada de redações com feedback detalhado em até 48 horas. No plano Básico, você tem direito a 5 correções.",
  },
  {
    question: "Como funciona o grupo de estudos?",
    answer: "Ao se matricular, você é adicionado em grupos exclusivos no WhatsApp e Telegram, onde pode tirar dúvidas, trocar materiais e interagir com outros concurseiros.",
  },
  {
    question: "Posso trocar de plano depois?",
    answer: "Claro! Você pode fazer upgrade do seu plano a qualquer momento pagando apenas a diferença proporcional. O downgrade não é permitido.",
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
              className="border border-gold/20 rounded-lg px-6 hover:border-gold/40 transition-colors"
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
      </div>
    </section>
  );
}