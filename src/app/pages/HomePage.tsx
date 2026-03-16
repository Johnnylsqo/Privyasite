import React, { useState } from 'react';
import { 
  MapPin, 
  ChevronDown, 
  Shield, 
  Clock, 
  Star, 
  Globe, 
  Award, 
  MessageCircle, 
  Menu,
  EyeOff,
  X,
  Heart,
  Sparkles,
  Users,
  ChevronRight,
  Smartphone,
  Crown,
  HeartHandshake,
  BadgeCheck,
  Headphones,
  Gem,
  Search,
  Filter,
  TrendingUp,
  Camera,
  CheckCircle2,
  UserCheck,
  Lock,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Plans } from '../components/Plans';
import { Values } from '../components/Values';
import { SocialProof } from '../components/SocialProof';
import { TrustSection } from '../components/TrustSection';
import { PopularCategories } from '../components/PopularCategories';
import { Testimonials } from '../components/Testimonials';
import { AdvertiserCTA } from '../components/AdvertiserCTA';
import { FAQ } from '../components/FAQ';

// --- MOCK DATA ---
const vipProfiles = [
  { id: 1, name: 'Beatriz', age: 26, city: 'Porto', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', rating: 5 },
  { id: 2, name: 'Isabela', age: 29, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', rating: 5 },
  { id: 3, name: 'Maya', age: 25, city: 'Coimbra', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', rating: 5 },
  { id: 4, name: 'Catarina', age: 28, city: 'Faro', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', rating: 5 },
  { id: 5, name: 'Laura', age: 26, city: 'Braga', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', rating: 5 },
  { id: 6, name: 'Ana', age: 24, city: 'Aveiro', image: 'https://images.unsplash.com/photo-1593202301839-1fda01b38456?auto=format&fit=crop&w=800&q=80', rating: 5 },
];

const cityCards = [
  { name: 'Lisboa', profiles: 467, image: 'https://images.unsplash.com/photo-1714233806875-4f4199fe1cf4?auto=format&fit=crop&w=800&q=80' },
  { name: 'Porto', profiles: 259, image: 'https://images.unsplash.com/photo-1699481623460-996ce39fab21?auto=format&fit=crop&w=800&q=80' },
  { name: 'Braga', profiles: 45, image: 'https://images.unsplash.com/photo-1571786500662-7574dd0756bd?auto=format&fit=crop&w=800&q=80' },
];

// --- COMPONENTS ---

const PrivyaLogo = ({ size = 'default' }: { size?: 'default' | 'small' | 'large' }) => {
  const iconSize = size === 'small' ? 'w-5 h-5' : size === 'large' ? 'w-8 h-8' : 'w-6 h-6';
  const textSize = size === 'small' ? 'text-sm' : size === 'large' ? 'text-2xl' : 'text-xl';
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${iconSize} flex items-center justify-center`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2D77D" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8922A" />
            </linearGradient>
          </defs>
          <path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="url(#logoGrad)" />
          <path d="M12 16L9 10H15L12 16Z" fill="#0F0F10" />
        </svg>
      </div>
      <span className={`${textSize} tracking-[0.25em] text-white uppercase`} style={{ fontFamily: 'Playfair Display, serif' }}>
        Privya
      </span>
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-[100]" style={{ backdropFilter: 'blur(20px)', background: 'linear-gradient(180deg, rgba(15,15,16,0.92) 0%, rgba(15,15,16,0.75) 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">
        <PrivyaLogo />
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="relative text-sm text-[#D4AF37] pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#F2D77D]" style={{ fontFamily: 'Inter, sans-serif' }}>Início</a>
          <a href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Explorar</a>
          <a href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Planos</a>
          <a href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Como Funciona</a>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-7 py-2.5 text-sm text-white/90 border border-white/15 rounded-lg hover:bg-white/5 hover:border-white/25 transition-all duration-300">Entrar</button>
          <button className="px-7 py-2.5 text-sm text-[#0F0F10] rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]" style={{ fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)' }}>Registar</button>
        </div>
        <button className="lg:hidden text-white/80 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden px-6 py-6 flex flex-col gap-4" style={{ background: 'rgba(15,15,16,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <a href="#" className="text-[#D4AF37] py-2">Início</a>
          <a href="#" className="text-white/60 py-2">Explorar</a>
          <a href="#" className="text-white/60 py-2">Planos</a>
          <a href="#" className="text-white/60 py-2">Como Funciona</a>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-3 text-sm text-white border border-white/15 rounded-lg">Entrar</button>
            <button className="flex-1 py-3 text-sm text-black rounded-lg" style={{ background: 'linear-gradient(135deg, #F2D77D, #D4AF37)' }}>Registar</button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const BokehParticle = ({ delay, x, y, size, opacity, color = 'rgba(212,175,55,' }: { delay: number; x: string; y: string; size: number; opacity: number; color?: string }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, background: `radial-gradient(circle, ${color}${opacity}) 0%, ${color}0) 70%)`, filter: `blur(${size / 3}px)` }}
    animate={{ y: [0, -15, 0, 10, 0], opacity: [opacity, opacity * 1.3, opacity, opacity * 0.7, opacity] }}
    transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden">
    {/* Warm Background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F0F10 0%, #1a120e 30%, #150d0a 60%, #0F0F10 100%)' }} />
      {/* Wine + Gold glow overlays */}
      <div className="absolute -top-[20%] right-0 w-[70%] h-[80%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(180,140,40,0.14) 0%, rgba(140,100,20,0.06) 35%, transparent 70%)' }} />
      <div className="absolute top-[20%] right-[5%] w-[50%] h-[60%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.1) 0%, rgba(139,30,63,0.04) 35%, transparent 65%)' }} />
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.06) 0%, transparent 60%)' }} />
      
      {/* Bokeh particles - gold and wine mix */}
      <BokehParticle delay={0} x="75%" y="15%" size={120} opacity={0.14} />
      <BokehParticle delay={1} x="85%" y="30%" size={80} opacity={0.1} />
      <BokehParticle delay={2} x="65%" y="45%" size={60} opacity={0.12} color="rgba(139,30,63," />
      <BokehParticle delay={0.5} x="80%" y="55%" size={100} opacity={0.08} />
      <BokehParticle delay={3} x="70%" y="10%" size={50} opacity={0.16} />
      <BokehParticle delay={1.5} x="90%" y="40%" size={70} opacity={0.08} color="rgba(139,30,63," />
      <BokehParticle delay={2.5} x="55%" y="25%" size={40} opacity={0.12} />
      <BokehParticle delay={0.8} x="60%" y="60%" size={90} opacity={0.06} color="rgba(139,30,63," />
    </div>

    <div className="relative z-10 pt-[120px] pb-20 px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-[1440px] mx-auto min-h-screen">
      {/* Left Content */}
      <div className="w-full lg:w-[55%] flex flex-col pt-8 lg:pt-16 z-20">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.12] text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
          Descubra encontros<br />
          <span className="italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #F2D77D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>exclusivos</span>
          <span> na sua cidade</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/45 text-base lg:text-lg mb-10 tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          Perfis verificados. Experiências privadas. Discrição total.
        </motion.p>

        {/* Search Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row rounded-2xl md:rounded-full p-1.5 mb-10 max-w-2xl"
          style={{ background: 'rgba(31,31,33,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(139,30,63,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(139,30,63,0.06), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
          <div className="flex-1 px-5 py-3 border-b md:border-b-0 md:border-r border-white/[0.08] cursor-pointer group">
            <label className="text-[11px] text-white/40 block mb-0.5 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Cidade</label>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#D4AF37]" />
              <span className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Lisboa</span>
              <ChevronDown size={13} className="text-white/40 ml-auto group-hover:text-white/70 transition-colors" />
            </div>
          </div>
          <div className="flex-1 px-5 py-3 cursor-pointer group">
            <label className="text-[11px] text-white/40 block mb-0.5 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Tipo de encontro</label>
            <div className="flex items-center gap-2">
              <span className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Todos</span>
              <ChevronDown size={13} className="text-white/40 ml-auto group-hover:text-white/70 transition-colors" />
            </div>
          </div>
          <button className="mt-1.5 md:mt-0 w-full md:w-auto px-10 py-4 text-[#0F0F10] text-sm rounded-xl md:rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-[0.98]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)' }}>
            Pesquisar
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-2.5">
            <Shield size={17} className="text-[#D4AF37]" />
            <span className="text-sm text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>Perfis Verificados</span>
          </div>
          <div className="flex items-center gap-2.5">
            <EyeOff size={17} className="text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>100% Discreto</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={17} className="text-[#D4AF37]" />
            <span className="text-sm text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>Atendimento 24h</span>
          </div>
        </motion.div>
      </div>

      {/* Right - Phone Mockup */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}
        className="w-full lg:w-[42%] flex justify-center lg:justify-end mt-16 lg:mt-4 relative z-20">
        {/* Big warm glow behind phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.15) 0%, rgba(212,175,55,0.1) 25%, rgba(139,30,63,0.05) 50%, transparent 70%)' }} />
        
        {/* Phone frame */}
        <div className="relative w-[220px] md:w-[240px] lg:w-[260px]" style={{ perspective: '1000px' }}>
          <div className="relative rounded-[40px] overflow-hidden"
            style={{ 
              aspectRatio: '9/19.5',
              background: '#0a0a0b',
              border: '5px solid #1c1c1e',
              boxShadow: '0 35px 70px rgba(0,0,0,0.65), 0 0 45px rgba(139,30,63,0.15), 0 0 90px rgba(212,175,55,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)',
            }}>
            
            {/* Dynamic Island */}
            <div className="absolute top-2 inset-x-0 z-50 flex justify-center">
              <div className="w-[100px] h-[26px] bg-black rounded-full flex justify-center items-center" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05)' }}>
                <div className="w-2.5 h-2.5 bg-[#1a1a1c] rounded-full border border-white/10 mr-2" />
                <div className="w-1.5 h-1.5 bg-[#1a1a1c] rounded-full" />
              </div>
            </div>

            {/* Phone screen content */}
            <div className="w-full h-full relative">
              {/* Profile image */}
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
                alt="Sofia Profile"
                className="w-full h-[65%] object-cover object-top"
              />
              
              {/* Top gradient */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              
              {/* PRIVYA logo in phone */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="#D4AF37" /></svg>
                <span className="text-[10px] tracking-[0.2em] text-white/90 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>Privya</span>
              </div>

              {/* VIP ribbon */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden z-20">
                <div className="absolute top-4 -left-4 w-24 text-center py-[2px] -rotate-45 shadow-lg"
                  style={{ background: 'linear-gradient(90deg, #B8922A, #D4AF37, #F2D77D, #D4AF37, #B8922A)' }}>
                  <span className="text-[8px] text-[#0F0F10] uppercase tracking-[0.15em]" style={{ fontWeight: 700 }}>VIP</span>
                </div>
              </div>

              {/* Online indicator */}
              <div className="absolute top-10 right-4 flex items-center gap-1 px-2 py-1 rounded-full z-30" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[8px] text-white/80">Online</span>
              </div>

              {/* Bottom profile info */}
              <div className="absolute bottom-0 inset-x-0 h-[45%] flex flex-col justify-end p-5 pb-5"
                style={{ background: 'linear-gradient(to top, #0a0a0b 25%, rgba(10,10,11,0.97) 50%, rgba(10,10,11,0.7) 75%, transparent 100%)' }}>
                
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Sofia, 27</h2>
                  <BadgeCheck size={16} className="text-[#D4AF37]" />
                </div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <MapPin size={12} className="text-[#D4AF37]" />
                  <span className="text-[11px] text-white/65">Lisboa</span>
                </div>
                <div className="flex items-center gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-[#D4AF37] fill-[#D4AF37]" />)}
                </div>
                
                <button className="w-full py-3 rounded-xl text-sm text-white transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #8B1E3F, #6B1730)', border: '1px solid rgba(212,175,55,0.2)', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Contactar
                </button>
              </div>

              {/* Bottom navigation bar in phone */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 rounded-full mx-auto w-1/3 mb-1.5" />
            </div>
          </div>

          {/* Floating notification card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -left-8 lg:-left-16 top-[30%] flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(31,31,33,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(139,30,63,0.3)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(139,30,63,0.3)' }}>
              <Heart size={14} className="text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-[10px] text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Novo match!</p>
              <p className="text-[9px] text-white/40">há 2 minutos</p>
            </div>
          </motion.div>

          {/* Floating stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute -right-4 lg:-right-12 bottom-[35%] flex items-center gap-2 px-3 py-2.5 rounded-xl"
            style={{ background: 'rgba(31,31,33,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(212,175,55,0.15)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.15)' }}>
              <Shield size={12} className="text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-[10px] text-[#D4AF37]" style={{ fontWeight: 600 }}>Verificada</p>
              <p className="text-[9px] text-white/40">Perfil Premium</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const CitySection = () => (
  <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
    <div className="flex items-center gap-4 mb-8">
      <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #8B1E3F, #D4AF37)' }} />
      <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
        Encontre acompanhantes <span className="italic" style={{ color: '#D4AF37' }}>na sua cidade</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
      {cityCards.map((city, i) => (
        <motion.div key={city.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }}
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
          style={{ aspectRatio: i === 0 ? '16/10' : '4/3', border: '1px solid rgba(139,30,63,0.15)' }}>
          <ImageWithFallback src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(139,30,63,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)' }} />
          <div className="absolute bottom-0 inset-x-0 p-5">
            <h3 className="text-2xl text-white mb-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>{city.name}</h3>
            <div className="flex items-center gap-2 text-white/70">
              <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#D4AF37' }}>+{city.profiles} perfis</span>
              <ChevronRight size={14} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 2px rgba(139,30,63,0.5)' }} />
        </motion.div>
      ))}
    </div>
  </section>
);

const VIPCard = ({ profile, index }: { profile: typeof vipProfiles[0]; index: number }) => (
  <Link to={`/perfil/${profile.id}`}>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden flex flex-col group w-[220px] lg:w-[240px] shrink-0 h-[320px] lg:h-[340px] cursor-pointer"
      style={{ background: '#1A1A1C', border: '1px solid rgba(139,30,63,0.1)' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}>
      <div className="relative h-[210px] lg:h-[225px] overflow-hidden">
        <ImageWithFallback src={profile.image} alt={profile.name} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out" />
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden z-10">
          <div className="absolute top-3 -left-5 w-24 text-center py-[3px] -rotate-45 shadow-lg" style={{ background: 'linear-gradient(90deg, #B8922A, #D4AF37, #F2D77D, #D4AF37, #B8922A)' }}>
            <span className="text-[8px] text-[#0F0F10] uppercase tracking-[0.15em]" style={{ fontWeight: 700 }}>VIP</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(139,30,63,0.6)', backdropFilter: 'blur(8px)' }}>
          <Heart size={14} className="text-white/80" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A1A1C] to-transparent pointer-events-none" />
      </div>
      <div className="p-4 pt-3 flex flex-col flex-1">
        <h3 className="text-lg text-white mb-0.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{profile.name}, {profile.age}</h3>
        <div className="flex items-center text-[#D4AF37] mb-2.5">
          <MapPin size={11} className="mr-1" />
          <span className="text-[11px] text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>{profile.city}</span>
        </div>
        <div className="flex items-center gap-0.5 mt-auto">
          {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-[#D4AF37] fill-[#D4AF37]" />)}
        </div>
      </div>
    </motion.div>
  </Link>
);

const VIPSection = () => (
  <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
    <div className="flex justify-between items-end mb-8">
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #8B1E3F, #D4AF37)' }} />
        <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
          Acompanhantes <span style={{ color: '#D4AF37', fontWeight: 600 }}>VIP</span>
        </h2>
      </div>
      <a href="#" className="text-sm text-[#D4AF37] hover:text-[#F2D77D] transition-colors flex items-center gap-1">Ver Todas <ChevronRight size={14} /></a>
    </div>
    <div className="flex overflow-x-auto gap-5 pb-6 hide-scrollbar snap-x snap-mandatory">
      {vipProfiles.map((profile, index) => (
        <div key={profile.id} className="snap-start"><VIPCard profile={profile} index={index} /></div>
      ))}
      <div className="w-[60px] shrink-0 flex items-center justify-center">
        <div className="w-11 h-11 rounded-full flex items-center justify-center text-white/30 hover:text-[#D4AF37] hover:border-[#8B1E3F] transition-all cursor-pointer" style={{ border: '1px solid rgba(139,30,63,0.2)' }}>
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  </section>
);

const StatsBar = () => (
  <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-8">
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex-1 rounded-2xl p-6 lg:p-7 flex flex-wrap justify-between items-center gap-6"
        style={{ background: 'linear-gradient(135deg, rgba(26,26,28,0.8) 0%, rgba(21,21,22,0.8) 100%)', border: '1px solid rgba(139,30,63,0.12)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 30px rgba(0,0,0,0.25)' }}>
        {[
          { icon: <MapPin size={18} />, value: 'Lisboa', label: 'Perfis' },
          { icon: <Globe size={18} />, value: '50+', label: 'Cidades' },
          { icon: <Award size={18} />, value: '98%', label: 'Satisfação' },
          { icon: <MessageCircle size={18} />, value: '24/7', label: 'Suporte' },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#D4AF37]" style={{ background: 'rgba(139,30,63,0.15)', border: '1px solid rgba(139,30,63,0.25)' }}>
              {stat.icon}
            </div>
            <div>
              <div className="text-lg text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>{stat.value}</div>
              <div className="text-[10px] text-white/40 tracking-wide">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:w-[360px] rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8B1E3F 0%, #5C1329 60%, #3A0B19 100%)', border: '1px solid rgba(212,175,55,0.12)', boxShadow: '0 8px 30px rgba(139,30,63,0.2)' }}>
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full blur-2xl" style={{ background: 'rgba(212,175,55,0.08)' }} />
        <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full blur-xl" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <h3 className="text-lg text-white mb-1 z-10" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Quer ser destaque?</h3>
        <p className="text-[11px] text-white/60 mb-4 z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Promova o seu perfil e ganhe visibilidade</p>
        <button className="self-start px-6 py-2.5 text-sm text-[#0F0F10] rounded-lg z-10 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          style={{ fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)' }}>
          Promover Perfil
        </button>
      </div>
    </div>
  </section>
);

const WineDivider = () => (
  <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4">
    <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,30,63,0.3) 20%, rgba(139,30,63,0.3) 80%, transparent)' }} />
  </div>
);

const HowItWorks = () => {
  const steps = [
    { number: '01', icon: <Search size={24} />, title: 'Explore e Descubra', desc: 'Navegue pelos perfis verificados em várias cidades de Portugal. Use filtros avançados para encontrar a acompanhante ideal.' },
    { number: '02', icon: <BadgeCheck size={24} />, title: 'Verifique o Perfil', desc: 'Veja fotos, avaliações reais, serviços oferecidos e disponibilidade. Todos os perfis são verificados pela nossa equipa.' },
    { number: '03', icon: <MessageCircle size={24} />, title: 'Entre em Contacto', desc: 'Comunique-se diretamente via WhatsApp, chamada ou chat privado. Agende o seu encontro com total discrição.' },
    { number: '04', icon: <Shield size={24} />, title: 'Encontro Seguro', desc: 'Desfrute de uma experiência premium com total privacidade e segurança. Avalie após o encontro para ajudar a comunidade.' },
  ];

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,30,63,0.04) 0%, transparent 60%)' }} />
      
      <div className="relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F)' }} />
            <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              Como <span className="italic" style={{ color: '#D4AF37' }}>Funciona</span>
            </h2>
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <p className="text-sm text-white/40 max-w-xl mx-auto">
            Processo simples e seguro para encontros exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-2rem)] w-[calc(100%-2rem)] h-[2px] z-0"
                  style={{ background: 'linear-gradient(90deg, rgba(139,30,63,0.3), rgba(139,30,63,0.1))' }} />
              )}
              
              <div className="relative rounded-2xl p-6 h-full"
                style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-sm text-[#0F0F10]"
                  style={{ background: 'linear-gradient(135deg, #F2D77D, #D4AF37)', fontWeight: 700 }}>
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#D4AF37] mb-4"
                  style={{ background: 'rgba(139,30,63,0.2)', border: '1px solid rgba(139,30,63,0.3)' }}>
                  {step.icon}
                </div>
                
                <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  {step.title}
                </h3>
                
                <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: <BadgeCheck size={20} />, title: 'Perfis Verificados', desc: 'Acompanhantes com perfis profissionais, verificados e com identidade confirmada.' },
    { icon: <Crown size={20} />, title: 'Ambiente Premium', desc: 'Design exclusivo e experiência refinada para utilizadores exigentes.' },
    { icon: <Smartphone size={20} />, title: 'Experiência Mobile', desc: 'Plataforma otimizada para dispositivos móveis com navegação intuitiva.' },
    { icon: <Gem size={20} />, title: 'Destaques VIP', desc: 'Sistema de destaque para os perfis mais populares e bem avaliados.' },
    { icon: <HeartHandshake size={20} />, title: 'Suporte', desc: 'Equipa dedicada com atendimento personalizado e respostas rápidas.' },
    { icon: <Sparkles size={20} />, title: 'Funcionalidades Exclusivas', desc: 'Filtros avançados, chat privado e sistema de favoritos integrado.' },
  ];

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex gap-1">
          <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
          <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
          <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #8B1E3F, #D4AF37)' }} />
        <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
          Benefícios da <span style={{ color: '#D4AF37', fontWeight: 600 }}>PRIVYA</span>
        </h2>
      </div>
      <div className="h-[1px] mb-10" style={{ background: 'linear-gradient(90deg, rgba(139,30,63,0.4), rgba(212,175,55,0.2), transparent)' }} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl p-6 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(31,31,33,0.5) 0%, rgba(26,26,28,0.3) 100%)',
              border: '1px solid rgba(139,30,63,0.15)',
              borderLeft: '3px solid rgba(139,30,63,0.4)',
            }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(139,30,63,0.08) 0%, transparent 60%)' }} />
            
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[#D4AF37]" style={{ background: 'rgba(139,30,63,0.15)', border: '1px solid rgba(139,30,63,0.2)' }}>
                {b.icon}
              </div>
              <h3 className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                {b.title.split(' ').map((word, wi) => (
                  <span key={wi}>{wi === b.title.split(' ').length - 1 ? <span style={{ color: '#D4AF37' }}>{word}</span> : word + ' '}</span>
                ))}
              </h3>
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="relative z-10 mt-4" style={{ borderTop: '1px solid rgba(139,30,63,0.15)' }}>
    <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F, #D4AF37, #8B1E3F, transparent)' }} />
    
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <PrivyaLogo size="small" />
          <p className="text-xs text-white/25 mt-4 leading-relaxed max-w-[250px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            A plataforma premium de encontros exclusivos em Portugal. Discrição, elegância e segurança.
          </p>
        </div>
        <div>
          <h4 className="text-xs text-[#8B1E3F] uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Plataforma</h4>
          {['Explorar', 'Planos Premium', 'Como Funciona', 'Registo'].map((link, i) => (
            <a key={i} href="#" className="block text-xs text-white/30 hover:text-white/60 py-1.5 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
          ))}
        </div>
        <div>
          <h4 className="text-xs text-[#8B1E3F] uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Legal</h4>
          {['Termos de Uso', 'Política de Privacidade', 'Cookies', 'Contacto'].map((link, i) => (
            <a key={i} href="#" className="block text-xs text-white/30 hover:text-white/60 py-1.5 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
          ))}
        </div>
        <div>
          <h4 className="text-xs text-[#8B1E3F] uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Cidades</h4>
          {['Lisboa', 'Porto', 'Faro', 'Coimbra', 'Braga'].map((city, i) => (
            <a key={i} href="#" className="block text-xs text-white/30 hover:text-white/60 py-1.5 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{city}</a>
          ))}
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(139,30,63,0.1)' }}>
        <p className="text-[10px] text-white/20 tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          © 2026 PRIVYA — Encontros Privados. Experiências Exclusivas.
        </p>
        <p className="text-[10px] text-white/15" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          Plataforma destinada a maiores de 18 anos.
        </p>
      </div>
    </div>
  </footer>
);

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <div className="min-h-screen bg-[#0F0F10] text-white selection:bg-[#8B1E3F]/40 selection:text-white relative overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <main>
          {/* 1. Hero com busca */}
          <Hero />
          
          {/* 2. Selos de confiança (embutidos no Hero - Trust badges) */}
          
          {/* 3. Bloco de prova social */}
          <SocialProof />
          <WineDivider />
          
          {/* 4. Perfis em destaque */}
          <VIPSection />
          <WineDivider />
          
          {/* 5. Explorar por cidade */}
          <CitySection />
          <WineDivider />
          
          {/* 6. Como funciona */}
          <HowItWorks />
          <WineDivider />
          
          {/* 7. Segurança e verificação */}
          <TrustSection />
          <WineDivider />
          
          {/* 8. Categorias populares */}
          <PopularCategories />
          <WineDivider />
          
          {/* 9. Avaliações/depoimentos */}
          <Testimonials />
          
          {/* 10. CTA para anunciantes */}
          <AdvertiserCTA />
          <WineDivider />
          
          {/* 11. Planos/destaques (já incluído em AdvertiserCTA) */}
          {/* Valores da empresa */}
          <Values />
          <WineDivider />
          
          {/* Benefícios gerais */}
          <Benefits />
          <WineDivider />
          
          {/* 12. FAQ */}
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
