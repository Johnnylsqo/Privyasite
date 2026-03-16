import { motion } from 'motion/react';
import { Users, MapPin, BadgeCheck, Star } from 'lucide-react';

export const SocialProof = () => {
  const metrics = [
    {
      icon: <Users size={28} />,
      value: '2.500+',
      label: 'Perfis Ativos',
      gradient: 'from-[#D4AF37] to-[#B8922A]',
    },
    {
      icon: <MapPin size={28} />,
      value: '50+',
      label: 'Cidades Atendidas',
      gradient: 'from-[#8B1E3F] to-[#6B1730]',
    },
    {
      icon: <BadgeCheck size={28} />,
      value: '98%',
      label: 'Perfis Verificados',
      gradient: 'from-[#D4AF37] to-[#B8922A]',
    },
    {
      icon: <Star size={28} />,
      value: '12.500+',
      label: 'Avaliações Verificadas',
      gradient: 'from-[#8B1E3F] to-[#6B1730]',
    },
  ];

  return (
    <section className="relative z-10 py-12 lg:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1760224254117-7a40f7f03fe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwYWJzdHJhY3QlMjBlbGVnYW50JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzM2MTkxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10] via-[#0F0F10]/80 to-[#0F0F10]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 lg:p-8 text-center group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(31,31,33,0.8) 0%, rgba(26,26,28,0.6) 100%)',
                border: '1px solid rgba(139,30,63,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              {/* Subtle glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.08) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                {/* Icon with gradient */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? 'rgba(212,175,55,0.15)' : 'rgba(139,30,63,0.2)'}`,
                      border: `1px solid ${i % 2 === 0 ? 'rgba(212,175,55,0.3)' : 'rgba(139,30,63,0.3)'}`,
                    }}
                  >
                    {metric.icon}
                  </div>
                </div>

                {/* Value */}
                <div 
                  className="text-3xl lg:text-4xl mb-2 bg-clip-text text-transparent"
                  style={{ 
                    background: `linear-gradient(135deg, #D4AF37, #F2D77D)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                  }}
                >
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-xs lg:text-sm text-white/60 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};