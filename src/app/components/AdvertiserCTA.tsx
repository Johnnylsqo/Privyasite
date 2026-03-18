import { motion } from 'motion/react';
import { Crown, TrendingUp, Target, Zap, ArrowRight, Shield, Eye, BarChart3, Clock, Users, BadgeCheck, Sparkles, Camera, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';

export const AdvertiserCTA = () => {
  const features = [
    { 
      icon: <Eye size={24} />, 
      title: 'Máxima Visibilidade', 
      desc: 'O seu perfil é exibido para milhares de utilizadores diariamente em toda Portugal.',
      highlight: false,
    },
    { 
      icon: <BadgeCheck size={24} />, 
      title: 'Perfil Verificado', 
      desc: 'Selo de verificação que transmite confiança e credibilidade aos clientes.',
      highlight: false,
    },
    { 
      icon: <BarChart3 size={24} />, 
      title: 'Estatísticas Detalhadas', 
      desc: 'Acompanhe visualizações, contactos e desempenho do seu perfil em tempo real.',
      highlight: false,
    },
    { 
      icon: <Crown size={24} />, 
      title: 'Destaque VIP', 
      desc: 'Posicione-se no topo dos resultados com os nossos planos de destaque premium.',
      highlight: true,
    },
    { 
      icon: <Camera size={24} />, 
      title: 'Galeria Profissional', 
      desc: 'Publique até 20 fotos em alta qualidade no seu perfil para atrair mais clientes.',
      highlight: false,
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: 'Ambiente Seguro', 
      desc: 'Proteção total dos seus dados pessoais e ferramentas de bloqueio e denúncia.',
      highlight: false,
    },
    { 
      icon: <Target size={24} />, 
      title: 'Destaque por Cidade', 
      desc: 'Apareça em destaque na sua cidade de atendimento para clientes locais.',
      highlight: false,
    },
    { 
      icon: <Clock size={24} />, 
      title: 'Suporte Dedicado', 
      desc: 'Equipa de suporte exclusiva para anunciantes com resposta em até 2 horas.',
      highlight: false,
    },
  ];

  return (
    <section className="relative z-10 py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, #8B1E3F 0%, #6B1730 30%, #4A0F20 60%, #2D0913 100%)',
        }} />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 z-[1]" 
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 z-[1]" 
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            <Crown size={18} className="text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Para Anunciantes
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl text-white mb-4" 
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            Porque anunciar na <span className="italic" style={{ color: '#D4AF37' }}>PRIVYA?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto"
          >
            A plataforma premium que oferece as melhores ferramentas para destacar o seu perfil e alcançar clientes de alto padrão
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="relative rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{
                background: feature.highlight 
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(139,30,63,0.2) 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                border: feature.highlight 
                  ? '1px solid rgba(212,175,55,0.35)'
                  : '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {feature.highlight && (
                <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-[9px] text-[#0F0F10] uppercase tracking-wider"
                  style={{ background: 'linear-gradient(135deg, #F2D77D, #D4AF37)', fontWeight: 700 }}>
                  Popular
                </div>
              )}
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)' }} />
              
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#D4AF37] mb-4 relative z-10"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                {feature.icon}
              </div>
              
              <h3 className="text-base text-white mb-2 relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                {feature.title}
              </h3>
              
              <p className="text-xs text-white/50 leading-relaxed relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Approval Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="rounded-xl p-5 mb-10 flex items-start gap-4 max-w-3xl mx-auto"
          style={{ 
            background: 'rgba(212,175,55,0.06)', 
            border: '1px solid rgba(212,175,55,0.15)',
          }}
        >
          <Shield size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-white/80 mb-1" style={{ fontWeight: 600 }}>
              Cadastro sujeito a aprovação
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              Todos os cadastros de anunciantes passam por uma análise criteriosa da nossa equipa. 
              Todo conteúdo enviado (fotos, descrições e documentos) é verificado antes da publicação 
              para garantir a qualidade e segurança da plataforma.
            </p>
          </div>
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button 
              className="px-10 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)',
                color: '#0F0F10',
                fontWeight: 700,
              }}
            >
              Criar Perfil Grátis
              <ArrowRight size={20} />
            </button>
            
            <Link 
              to="/planos"
              className="px-10 py-4 rounded-xl text-base transition-all duration-300 hover:bg-white/5 inline-flex items-center gap-3"
              style={{
                border: '1px solid rgba(212,175,55,0.3)',
                color: '#D4AF37',
                fontWeight: 600,
              }}
            >
              <Sparkles size={18} />
              Ver Planos e Preços
            </Link>
          </div>
          
          <p className="text-xs text-white/40">
            Registo 100% gratuito · Aprovação em até 24h · Todo conteúdo é moderado
          </p>
        </motion.div>
      </div>
    </section>
  );
};
