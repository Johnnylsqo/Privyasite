import { motion } from 'motion/react';
import { HeartHandshake, Shield, Lock, UserCheck } from 'lucide-react';

export const Values = () => {
  const values = [
    {
      icon: <HeartHandshake size={28} />,
      title: 'Respeito',
      desc: 'Valorizamos e respeitamos todas as profissionais da nossa plataforma. Cada acompanhante é tratada com dignidade, profissionalismo e total respeito pela sua autonomia e escolhas.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Segurança',
      desc: 'A segurança de todos os utilizadores é a nossa prioridade máxima. Implementamos verificação rigorosa de perfis, proteção de dados pessoais e moderação ativa para garantir um ambiente seguro.'
    },
    {
      icon: <Lock size={28} />,
      title: 'Confidencialidade',
      desc: 'Garantimos total discrição e privacidade. Os seus dados são protegidos com encriptação de ponta e nunca são partilhados com terceiros. A sua privacidade é sagrada.'
    },
    {
      icon: <UserCheck size={28} />,
      title: 'Verificação',
      desc: 'Todos os perfis passam por um processo rigoroso de verificação de identidade. Isto protege tanto clientes como acompanhantes, criando uma comunidade confiável e autêntica.'
    },
  ];

  return (
    <section className="relative z-10 py-20 lg:py-24 overflow-hidden">
      {/* Deep wine background */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(180deg, rgba(139,30,63,0.03) 0%, rgba(139,30,63,0.08) 30%, rgba(139,30,63,0.1) 50%, rgba(139,30,63,0.08) 70%, rgba(139,30,63,0.03) 100%)' 
      }} />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HeartHandshake size={20} className="text-[#D4AF37]" />
            <HeartHandshake size={20} className="text-[#D4AF37]" />
            <HeartHandshake size={20} className="text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl lg:text-4xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
            Os Nossos <span className="italic" style={{ color: '#D4AF37' }}>Valores</span>
          </h2>
          <div className="h-[2px] w-20 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F, #D4AF37, #8B1E3F, transparent)' }} />
          <p className="text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
            A PRIVYA foi criada com o compromisso de oferecer uma plataforma ética, segura e respeitosa. 
            Acreditamos no profissionalismo, na dignidade e no respeito mútuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-8 relative overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(31,31,33,0.8) 0%, rgba(26,26,28,0.6) 100%)', 
                border: '1px solid rgba(139,30,63,0.25)',
                borderLeft: '4px solid rgba(139,30,63,0.6)'
              }}>
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(139,30,63,0.12) 0%, transparent 70%)' }} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[#D4AF37] mb-5"
                  style={{ background: 'rgba(139,30,63,0.25)', border: '1px solid rgba(139,30,63,0.4)' }}>
                  {value.icon}
                </div>
                
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  {value.title}
                </h3>
                
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-2xl px-8 py-6 max-w-3xl"
            style={{ background: 'rgba(139,30,63,0.15)', border: '1px solid rgba(139,30,63,0.3)' }}>
            <p className="text-sm text-white/70 leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-[#D4AF37]" style={{ fontWeight: 600 }}>Compromisso com a excelência:</span> A PRIVYA zela pelo bem-estar de todas as profissionais da plataforma. 
              Implementamos políticas rigorosas contra assédio e promovemos um ambiente de trabalho digno, seguro e profissional.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-white/40">
              <Shield size={12} className="text-[#D4AF37]" />
              <span>Plataforma certificada e regulamentada</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
