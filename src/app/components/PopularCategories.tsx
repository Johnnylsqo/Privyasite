import { motion } from 'motion/react';
import { 
  Utensils, 
  Plane, 
  PartyPopper, 
  Coffee, 
  Briefcase, 
  Sparkles,
  Heart,
  Camera
} from 'lucide-react';

export const PopularCategories = () => {
  const categories = [
    { name: 'Jantares', icon: <Utensils size={16} /> },
    { name: 'Eventos', icon: <PartyPopper size={16} /> },
    { name: 'Viagens', icon: <Plane size={16} /> },
    { name: 'Companhia', icon: <Coffee size={16} /> },
    { name: 'Presencial', icon: <Briefcase size={16} /> },
    { name: 'Massagem', icon: <Sparkles size={16} /> },
    { name: 'Experiências Premium', icon: <Heart size={16} /> },
    { name: 'Ensaios Fotográficos', icon: <Camera size={16} /> },
  ];

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F)' }} />
            <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              Serviços <span className="italic" style={{ color: '#D4AF37' }}>Populares</span>
            </h2>
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <p className="text-sm text-white/40 max-w-xl mx-auto">
            Encontre acompanhantes especializadas nos serviços que procura
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {categories.map((category, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)',
                border: '1px solid rgba(139,30,63,0.2)',
              }}
            >
              <span className="text-[#D4AF37] group-hover:text-[#F2D77D] transition-colors">
                {category.icon}
              </span>
              <span className="text-sm text-white/80 group-hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};