import { motion } from 'motion/react';
import { Crown, TrendingUp, Target, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AdvertiserCTA = () => {
  const benefits = [
    { icon: <TrendingUp size={20} />, text: 'Maior visibilidade' },
    { icon: <Target size={20} />, text: 'Destaque por cidade' },
    { icon: <Crown size={20} />, text: 'Destaque na home' },
    { icon: <Zap size={20} />, text: 'Perfil premium' },
  ];

  const plans = [
    {
      name: 'Destaque 24h',
      price: '25€',
      features: ['Posição de destaque por 24h', 'Badge destaque', 'Até 3x mais visualizações'],
    },
    {
      name: 'Topo da Cidade',
      price: '80€/semana',
      features: ['Sempre no topo da sua cidade', 'Badge VIP dourado', 'Até 5x mais visualizações'],
      popular: true,
    },
    {
      name: 'Destaque Home',
      price: '150€/semana',
      features: ['Destaque na página inicial', 'Badge Premium', 'Até 10x mais visualizações'],
    },
  ];

  return (
    <section className="relative z-10 py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1750841896972-7e78c4ba21d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ29sZCUyMHdpbmUlMjB0ZXh0dXJlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNjE5MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            filter: 'blur(2px)',
            opacity: 0.08
          }}
        />
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
        <div className="text-center mb-12">
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
            Quer <span className="italic" style={{ color: '#D4AF37' }}>Promover</span> o seu Perfil?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-8"
          >
            Destaque-se da concorrência e aumente significativamente as suas reservas com os nossos planos premium
          </motion.p>

          {/* Benefits Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <span className="text-[#D4AF37]">{benefit.icon}</span>
                <span className="text-sm text-white/80">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="relative rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-300"
              style={{
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(139,30,63,0.2) 100%)'
                  : 'linear-gradient(135deg, rgba(31,31,33,0.8) 0%, rgba(26,26,28,0.6) 100%)',
                border: plan.popular 
                  ? '2px solid rgba(212,175,55,0.4)'
                  : '1px solid rgba(139,30,63,0.3)',
                boxShadow: plan.popular 
                  ? '0 10px 40px rgba(212,175,55,0.2)'
                  : '0 8px 30px rgba(0,0,0,0.3)',
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs uppercase tracking-wider"
                  style={{ 
                    background: 'linear-gradient(135deg, #F2D77D, #D4AF37)',
                    color: '#0F0F10',
                    fontWeight: 700,
                  }}
                >
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl text-[#D4AF37]" style={{ fontWeight: 700 }}>
                    {plan.price.split('/')[0]}
                  </span>
                  {plan.price.includes('/') && (
                    <span className="text-sm text-white/50">
                      /{plan.price.split('/')[1]}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="w-full py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                style={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #F2D77D, #D4AF37)'
                    : 'rgba(212,175,55,0.1)',
                  color: plan.popular ? '#0F0F10' : '#D4AF37',
                  border: plan.popular ? 'none' : '1px solid rgba(212,175,55,0.3)',
                  fontWeight: 600,
                }}
              >
                Escolher Plano
                <ArrowRight size={16} className="transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-sm text-white/50 mb-6">
            Ainda não tem perfil na PRIVYA?
          </p>
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
          <p className="text-xs text-white/40 mt-4">
            Registo 100% gratuito • Aprovação em até 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};