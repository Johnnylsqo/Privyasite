import { motion } from 'motion/react';
import { Users, Crown, CheckCircle2 } from 'lucide-react';

export const Plans = () => {
  const clientBenefits = [
    'Acesso a todos os perfis verificados',
    'Filtros avançados de pesquisa',
    'Chat privado e discreto',
    'Sistema de favoritos',
    'Avaliações e comentários',
    'Suporte prioritário 24/7',
  ];

  const companionBenefits = [
    'Perfil profissional destacado',
    'Verificação de identidade segura',
    'Gestão de disponibilidade',
    'Sistema de avaliações',
    'Destaque VIP opcional',
    'Proteção de dados pessoais',
    'Ferramentas de marketing',
    'Suporte dedicado',
  ];

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
      {/* Wine background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,30,63,0.05) 0%, transparent 70%)' }} />
      
      <div className="relative text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F)' }} />
          <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
            Planos <span className="italic" style={{ color: '#D4AF37' }}>Premium</span>
          </h2>
          <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </div>
        <p className="text-sm text-white/40 max-w-2xl mx-auto">
          Soluções personalizadas para clientes e acompanhantes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {/* Client Plan */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, rgba(31,31,33,0.7) 0%, rgba(26,26,28,0.5) 100%)', 
            border: '1px solid rgba(139,30,63,0.2)' 
          }}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" 
            style={{ background: 'rgba(212,175,55,0.06)' }} />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#D4AF37] mb-4"
              style={{ background: 'rgba(139,30,63,0.2)', border: '1px solid rgba(139,30,63,0.3)' }}>
              <Users size={24} />
            </div>
            
            <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
              Para Clientes
            </h3>
            <p className="text-xs text-white/40 mb-6">
              Acesso premium à melhor seleção de acompanhantes
            </p>

            <div className="space-y-3 mb-6">
              {clientBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="text-sm text-white/70">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3.5 rounded-xl text-sm text-[#0F0F10] transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              style={{ fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)' }}>
              Começar Agora
            </button>
          </div>
        </motion.div>

        {/* Companion Plan - Highlighted */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #8B1E3F 0%, #6B1730 60%, #4A0F20 100%)', 
            border: '1px solid rgba(212,175,55,0.3)',
            boxShadow: '0 10px 40px rgba(139,30,63,0.3)'
          }}>
          {/* VIP Badge */}
          <div className="absolute -top-1 -right-1 px-4 py-1.5 rounded-bl-xl text-xs text-[#0F0F10] uppercase tracking-widest"
            style={{ background: 'linear-gradient(135deg, #F2D77D, #D4AF37)', fontWeight: 700 }}>
            Destaque
          </div>
          
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl" 
            style={{ background: 'rgba(212,175,55,0.1)' }} />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#D4AF37] mb-4"
              style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Crown size={24} />
            </div>
            
            <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
              Para Acompanhantes
            </h3>
            <p className="text-xs text-white/60 mb-6">
              Ferramentas profissionais para gerir o seu negócio
            </p>

            <div className="space-y-3 mb-6">
              {companionBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="text-sm text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3.5 rounded-xl text-sm text-[#0F0F10] transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
              style={{ fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)' }}>
              Anunciar Perfil
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
