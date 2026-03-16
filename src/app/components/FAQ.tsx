import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como criar um perfil na PRIVYA?',
      answer: 'Para criar um perfil, clique em "Registar" no menu superior, preencha seus dados pessoais, adicione fotos e informações sobre seus serviços. Após o envio, nossa equipa irá revisar e aprovar o perfil em até 24 horas.',
    },
    {
      question: 'Como funciona a verificação de perfis?',
      answer: 'Todos os perfis passam por uma verificação manual rigorosa. Solicitamos documento de identidade, foto de verificação facial e confirmação de telefone. Isso garante autenticidade e segurança para todos os utilizadores.',
    },
    {
      question: 'Como entrar em contacto com uma acompanhante?',
      answer: 'Após encontrar o perfil desejado, você pode contactar diretamente via telefone ou WhatsApp. Os contactos estão disponíveis na página de cada perfil. Recomendamos sempre confirmar disponibilidade antes de agendar.',
    },
    {
      question: 'O que são os destaques VIP?',
      answer: 'Os destaques VIP são planos premium que colocam seu perfil em posição de destaque nas buscas, na página inicial e nas listagens por cidade. Perfis VIP recebem até 10x mais visualizações e aparecem com badges douradas.',
    },
    {
      question: 'Como funcionam os planos de destaque?',
      answer: 'Oferecemos diferentes planos: Destaque 24h, Destaque Semanal, Topo da Cidade e Destaque Home. Cada plano oferece diferentes níveis de visibilidade e pode ser combinado para melhores resultados.',
    },
    {
      question: 'Como denunciar conteúdo inadequado?',
      answer: 'Se você encontrar conteúdo impróprio ou suspeito, clique no botão de denúncia no perfil ou entre em contacto com nosso suporte. Levamos todas as denúncias a sério e agimos rapidamente para manter a plataforma segura.',
    },
    {
      question: 'A PRIVYA é segura e discreta?',
      answer: 'Sim. Utilizamos criptografia de ponta, não compartilhamos dados com terceiros e todos os perfis são verificados. A plataforma é projetada para garantir total privacidade e discrição aos utilizadores.',
    },
    {
      question: 'Quanto tempo leva para aprovar meu perfil?',
      answer: 'O processo de aprovação geralmente leva de 12 a 24 horas. Nossa equipa revisa manualmente cada perfil para garantir qualidade e conformidade com nossas políticas.',
    },
  ];

  return (
    <section className="relative z-10 py-16 lg:py-20 overflow-hidden">
      {/* Wine subtle background */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(180deg, transparent 0%, rgba(139,30,63,0.04) 30%, rgba(139,30,63,0.06) 50%, rgba(139,30,63,0.04) 70%, transparent 100%)' 
      }} />

      <div className="max-w-[900px] mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle size={20} className="text-[#D4AF37]" />
            <HelpCircle size={20} className="text-[#D4AF37]" />
            <HelpCircle size={20} className="text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl lg:text-4xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
            Perguntas <span className="italic" style={{ color: '#D4AF37' }}>Frequentes</span>
          </h2>
          <div className="h-[2px] w-20 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F, #D4AF37, #8B1E3F, transparent)' }} />
          <p className="text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre a plataforma, segurança e funcionalidades
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(31,31,33,0.7) 0%, rgba(26,26,28,0.5) 100%)',
                border: '1px solid rgba(139,30,63,0.15)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm lg:text-base text-white pr-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-[#D4AF37] shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2" style={{ borderTop: '1px solid rgba(139,30,63,0.1)' }}>
                      <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/50 mb-4">Não encontrou a resposta que procurava?</p>
          <button className="px-8 py-3 rounded-xl text-sm text-[#0F0F10] transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            style={{ fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)' }}>
            Entre em Contacto
          </button>
        </motion.div>
      </div>
    </section>
  );
};
