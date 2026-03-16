import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Miguel R.',
      city: 'Lisboa',
      rating: 5,
      text: 'A PRIVYA é incrível! Perfis elegantes, acompanhantes reais e verificadas. Recomendo a todos que procuram qualidade e discrição.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Sofia M.',
      city: 'Porto',
      rating: 5,
      text: 'Já sou membro há 6 meses e a experiência tem sido fantástica. O suporte é excecional e muito discreto. Plataforma séria e profissional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Ricardo P.',
      city: 'Coimbra',
      rating: 5,
      text: 'Excelente plataforma! Encontrei exatamente o que procurava. As acompanhantes são de alto nível e tudo funciona perfeitamente.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Beatriz L.',
      city: 'Lisboa',
      rating: 5,
      text: 'Como acompanhante, a PRIVYA mudou meu negócio. Recebo muito mais contactos de clientes sérios e respeitosos. Recomendo!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const stats = {
    averageRating: 4.9,
    totalReviews: 2847,
  };

  return (
    <section className="relative z-10 py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1764358868789-400fb3d39fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwcmVzdGF1cmFudCUyMGFtYmlhbmNlJTIwZGFya3xlbnwxfHx8fDE3NzM2MTkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            filter: 'blur(3px)',
            opacity: 0.12
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/98 via-[#0F0F10]/92 to-[#0F0F10]/98" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
            <Star size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
            <Star size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
          </div>
          <h2 className="text-2xl lg:text-3xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
            O que dizem sobre a <span className="italic" style={{ color: '#D4AF37' }}>PRIVYA</span>
          </h2>
          <div className="h-[2px] w-16 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F, #D4AF37, #8B1E3F, transparent)' }} />
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-2xl text-[#D4AF37]" style={{ fontWeight: 700 }}>{stats.averageRating}</span>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div>
              <span className="text-sm text-white/60">{stats.totalReviews.toLocaleString('pt-PT')} avaliações</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(139,30,63,0.12) 0%, rgba(31,31,33,0.5) 100%)',
                border: '1px solid rgba(139,30,63,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Quote decoration */}
              <Quote size={32} className="absolute top-3 right-3 text-[#8B1E3F]/20 group-hover:text-[#8B1E3F]/30 transition-colors" />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0" style={{ border: '2px solid rgba(139,30,63,0.4)' }}>
                  <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{t.name}</h4>
                  <p className="text-xs text-white/40">{t.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mb-3 relative z-10">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <p className="text-xs text-white/50 leading-relaxed italic relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA para ver mais */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-xl text-sm text-white border border-white/15 hover:bg-white/5 transition-all">
            Ver Todas as Avaliações
          </button>
        </div>
      </div>
    </section>
  );
};