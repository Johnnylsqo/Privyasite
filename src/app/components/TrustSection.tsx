import { motion } from 'motion/react';
import { Shield, Phone, Camera, Eye, AlertTriangle, Headphones, BadgeCheck, Lock } from 'lucide-react';

export const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <Shield size={24} />,
      title: 'Perfis Moderados Manualmente',
      desc: 'Cada perfil é revisado por nossa equipa antes de ser publicado, garantindo autenticidade.',
    },
    {
      icon: <Phone size={24} />,
      title: 'Verificação de Telefone',
      desc: 'Todos os perfis passam por verificação de número de telefone para maior segurança.',
    },
    {
      icon: <BadgeCheck size={24} />,
      title: 'Identidade Verificada',
      desc: 'Solicitamos documento de identidade e selfie de verificação para autenticar perfis.',
    },
    {
      icon: <Camera size={24} />,
      title: 'Fotos Verificadas',
      desc: 'Sistema de verificação de fotos garante que as imagens são reais e recentes.',
    },
    {
      icon: <Lock size={24} />,
      title: 'Ambiente Discreto',
      desc: 'Seus dados são protegidos com criptografia e nunca compartilhados com terceiros.',
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'Denúncia Rápida',
      desc: 'Sistema de denúncia ágil para reportar qualquer comportamento inadequado.',
    },
    {
      icon: <Headphones size={24} />,
      title: 'Suporte Ativo 24/7',
      desc: 'Equipa de suporte disponível a qualquer momento para ajudar e resolver problemas.',
    },
    {
      icon: <Eye size={24} />,
      title: 'Moderação Contínua',
      desc: 'Monitorização constante da plataforma para manter um ambiente seguro e respeitoso.',
    },
  ];

  return (
    <section className="relative z-10 py-20 lg:py-24 overflow-hidden">
      {/* Deep wine background */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(180deg, rgba(139,30,63,0.04) 0%, rgba(139,30,63,0.08) 30%, rgba(139,30,63,0.1) 50%, rgba(139,30,63,0.08) 70%, rgba(139,30,63,0.04) 100%)' 
      }} />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield size={20} className="text-[#D4AF37]" />
            <Shield size={20} className="text-[#D4AF37]" />
            <Shield size={20} className="text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl lg:text-4xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
            Por que <span className="italic" style={{ color: '#D4AF37' }}>Confiar</span> na PRIVYA?
          </h2>
          <div className="h-[2px] w-20 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F, #D4AF37, #8B1E3F, transparent)' }} />
          <p className="text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
            Segurança, verificação e privacidade são as nossas prioridades máximas. 
            Implementamos múltiplas camadas de proteção para garantir uma experiência confiável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustFeatures.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, rgba(31,31,33,0.8) 0%, rgba(26,26,28,0.6) 100%)', 
                border: '1px solid rgba(139,30,63,0.25)',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(139,30,63,0.12) 0%, transparent 70%)' }} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(139,30,63,0.25)', border: '1px solid rgba(139,30,63,0.4)' }}>
                  {feature.icon}
                </div>
                
                <h3 className="text-base text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  {feature.title}
                </h3>
                
                <p className="text-xs text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom emphasis message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-2xl px-8 py-6 max-w-3xl"
            style={{ background: 'rgba(139,30,63,0.2)', border: '1px solid rgba(139,30,63,0.4)' }}>
            <p className="text-sm text-white/70 leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-[#D4AF37]" style={{ fontWeight: 600 }}>Zero Tolerância:</span> A PRIVYA não tolera comportamentos abusivos, perfis falsos ou conteúdo inadequado. 
              Nossa equipa trabalha 24/7 para manter a plataforma segura, profissional e confiável.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-white/40">
              <Shield size={12} className="text-[#D4AF37]" />
              <span>Certificado de Segurança e Privacidade</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
