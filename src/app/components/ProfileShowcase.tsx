import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Star, Heart, ChevronRight, ChevronLeft, BadgeCheck, Crown, 
  Flame, Clock, Sparkles, TrendingUp, Eye, ArrowRight, Filter,
  Utensils, Plane, PartyPopper, Gem
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { AutoScrollCarousel } from './AutoScrollCarousel';

// ─── MOCK DATA ───────────────────────────────────────────────

const recentProfiles = [
  { id: 10, name: 'Valentina', age: 24, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?auto=format&fit=crop&w=800&q=80', verified: true, online: true, badge: 'new' as const },
  { id: 11, name: 'Camila', age: 27, city: 'Porto', image: 'https://images.unsplash.com/photo-1622080159621-bfceab50b3e3?auto=format&fit=crop&w=800&q=80', verified: true, online: false, badge: null },
  { id: 12, name: 'Mariana', age: 23, city: 'Faro', image: 'https://images.unsplash.com/photo-1669437959945-cb78531139bc?auto=format&fit=crop&w=800&q=80', verified: true, online: true, badge: 'new' as const },
  { id: 13, name: 'Diana', age: 26, city: 'Braga', image: 'https://images.unsplash.com/photo-1757607715843-35349ddda681?auto=format&fit=crop&w=800&q=80', verified: true, online: false, badge: null },
  { id: 14, name: 'Nicole', age: 25, city: 'Coimbra', image: 'https://images.unsplash.com/photo-1570666291894-f46aef938a73?auto=format&fit=crop&w=800&q=80', verified: false, online: true, badge: 'new' as const },
  { id: 15, name: 'Bia', age: 28, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1758600434169-1c087303d401?auto=format&fit=crop&w=800&q=80', verified: true, online: false, badge: null },
  { id: 16, name: 'Carolina', age: 22, city: 'Aveiro', image: 'https://images.unsplash.com/photo-1671766013268-99dce386a0dc?auto=format&fit=crop&w=800&q=80', verified: true, online: true, badge: null },
  { id: 17, name: 'Lara', age: 29, city: 'Setúbal', image: 'https://images.unsplash.com/photo-1681235853905-036b51f11e8c?auto=format&fit=crop&w=800&q=80', verified: true, online: false, badge: 'new' as const },
];

const trendingProfiles = [
  { id: 20, name: 'Alexandra', age: 27, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1772785950466-f23e40b030bd?auto=format&fit=crop&w=800&q=80', views: 2340, rating: 4.9, verified: true, services: ['Jantares', 'Eventos'] },
  { id: 21, name: 'Jade', age: 25, city: 'Porto', image: 'https://images.unsplash.com/photo-1572224384995-f9529873f379?auto=format&fit=crop&w=800&q=80', views: 1890, rating: 5.0, verified: true, services: ['Viagens', 'Companhia'] },
  { id: 22, name: 'Mia', age: 24, city: 'Faro', image: 'https://images.unsplash.com/photo-1765229283588-94d146872ccd?auto=format&fit=crop&w=800&q=80', views: 1650, rating: 4.8, verified: true, services: ['Massagem', 'Pernoite'] },
  { id: 23, name: 'Teresa', age: 28, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?auto=format&fit=crop&w=800&q=80', views: 1420, rating: 4.9, verified: true, services: ['Eventos', 'Jantares'] },
  { id: 24, name: 'Clara', age: 26, city: 'Coimbra', image: 'https://images.unsplash.com/photo-1731156668887-55909f832904?auto=format&fit=crop&w=800&q=80', views: 1380, rating: 4.7, verified: true, services: ['Companhia', 'Viagens'] },
  { id: 25, name: 'Inês', age: 23, city: 'Braga', image: 'https://images.unsplash.com/photo-1771553468563-d4ee43401821?auto=format&fit=crop&w=800&q=80', views: 1210, rating: 5.0, verified: true, services: ['Massagem', 'Companhia'] },
];

const categoryShowcase = [
  {
    id: 'jantares',
    name: 'Jantares & Encontros',
    icon: <Utensils size={18} />,
    desc: 'Acompanhantes sofisticadas para jantares elegantes e encontros inesquecíveis',
    color: '#D4AF37',
    profiles: [
      { id: 30, name: 'Leonor', age: 27, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
      { id: 31, name: 'Rita', age: 25, city: 'Porto', image: 'https://images.unsplash.com/photo-1765229283588-94d146872ccd?auto=format&fit=crop&w=800&q=80', rating: 4.9 },
      { id: 32, name: 'Sofia', age: 28, city: 'Coimbra', image: 'https://images.unsplash.com/photo-1731156668887-55909f832904?auto=format&fit=crop&w=800&q=80', rating: 4.8 },
      { id: 33, name: 'Daniela', age: 24, city: 'Faro', image: 'https://images.unsplash.com/photo-1757607715843-35349ddda681?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
    ],
  },
  {
    id: 'viagens',
    name: 'Viagens & Experiências',
    icon: <Plane size={18} />,
    desc: 'Companhia perfeita para viagens nacionais e internacionais',
    color: '#8B1E3F',
    profiles: [
      { id: 34, name: 'Helena', age: 26, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?auto=format&fit=crop&w=800&q=80', rating: 4.9 },
      { id: 35, name: 'Marta', age: 29, city: 'Porto', image: 'https://images.unsplash.com/photo-1572224384995-f9529873f379?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
      { id: 36, name: 'Eva', age: 25, city: 'Braga', image: 'https://images.unsplash.com/photo-1671766013268-99dce386a0dc?auto=format&fit=crop&w=800&q=80', rating: 4.8 },
      { id: 37, name: 'Luísa', age: 27, city: 'Faro', image: 'https://images.unsplash.com/photo-1669437959945-cb78531139bc?auto=format&fit=crop&w=800&q=80', rating: 4.9 },
    ],
  },
  {
    id: 'eventos',
    name: 'Eventos & Festas',
    icon: <PartyPopper size={18} />,
    desc: 'Presença marcante para eventos sociais, festas e ocasiões especiais',
    color: '#D4AF37',
    profiles: [
      { id: 38, name: 'Iris', age: 24, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1622080159621-bfceab50b3e3?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
      { id: 39, name: 'Filipa', age: 26, city: 'Porto', image: 'https://images.unsplash.com/photo-1772785950466-f23e40b030bd?auto=format&fit=crop&w=800&q=80', rating: 4.9 },
      { id: 40, name: 'Tatiana', age: 23, city: 'Coimbra', image: 'https://images.unsplash.com/photo-1681235853905-036b51f11e8c?auto=format&fit=crop&w=800&q=80', rating: 4.8 },
      { id: 41, name: 'Renata', age: 28, city: 'Aveiro', image: 'https://images.unsplash.com/photo-1758600434169-1c087303d401?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
    ],
  },
  {
    id: 'premium',
    name: 'Experiências Premium',
    icon: <Gem size={18} />,
    desc: 'As melhores acompanhantes com os mais altos padrões de qualidade',
    color: '#D4AF37',
    profiles: [
      { id: 42, name: 'Victoria', age: 27, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1570666291894-f46aef938a73?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
      { id: 43, name: 'Aurora', age: 25, city: 'Porto', image: 'https://images.unsplash.com/photo-1771553468563-d4ee43401821?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
      { id: 44, name: 'Carmen', age: 29, city: 'Faro', image: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?auto=format&fit=crop&w=800&q=80', rating: 5.0 },
      { id: 45, name: 'Bianca', age: 24, city: 'Braga', image: 'https://images.unsplash.com/photo-1765229283588-94d146872ccd?auto=format&fit=crop&w=800&q=80', rating: 4.9 },
    ],
  },
];

// ─── SMALL PROFILE CARD (compact, for horizontal scrolling) ───

const SmallProfileCard = ({ profile, index }: { profile: { id: number; name: string; age: number; city: string; image: string; verified?: boolean; online?: boolean; badge?: string | null }; index: number }) => (
  <Link to={`/perfil/${profile.id}`}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden group w-[180px] lg:w-[200px] shrink-0 cursor-pointer relative"
      style={{ background: '#1A1A1C', border: '1px solid rgba(139,30,63,0.1)' }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div className="relative h-[230px] lg:h-[250px] overflow-hidden">
        <ImageWithFallback src={profile.image} alt={profile.name} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" />
        
        {/* Online indicator */}
        {profile.online && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full z-10" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[9px] text-white/80">Online</span>
          </div>
        )}

        {/* New badge */}
        {profile.badge === 'new' && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider z-10"
            style={{ background: 'linear-gradient(135deg, #F2D77D, #D4AF37)', color: '#0F0F10', fontWeight: 700 }}>
            Nova
          </div>
        )}

        {/* Heart */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ background: 'rgba(139,30,63,0.6)', backdropFilter: 'blur(8px)', ...(profile.online ? { top: 36 } : {}) }}>
          <Heart size={12} className="text-white/80" />
        </div>

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A1A1C] to-transparent pointer-events-none" />
      </div>

      <div className="p-3.5 pt-2">
        <div className="flex items-center gap-1.5 mb-0.5">
          <h3 className="text-sm text-white" style={{ fontWeight: 600 }}>{profile.name}, {profile.age}</h3>
          {profile.verified && <BadgeCheck size={13} className="text-[#D4AF37]" />}
        </div>
        <div className="flex items-center text-[#D4AF37]">
          <MapPin size={10} className="mr-1" />
          <span className="text-[10px] text-white/50">{profile.city}</span>
        </div>
      </div>
    </motion.div>
  </Link>
);

// ─── TRENDING CARD (larger, with stats) ───

const TrendingCard = ({ profile, rank }: { profile: typeof trendingProfiles[0]; rank: number }) => (
  <Link to={`/perfil/${profile.id}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: rank * 0.1 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] lg:h-[420px]"
      style={{ border: '1px solid rgba(139,30,63,0.15)' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <ImageWithFallback src={profile.image} alt={profile.name} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
      
      {/* Rank badge */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center z-10"
        style={{ 
          background: rank <= 2 ? 'linear-gradient(135deg, #F2D77D, #D4AF37)' : 'rgba(31,31,33,0.8)',
          border: rank <= 2 ? 'none' : '1px solid rgba(212,175,55,0.3)',
          color: rank <= 2 ? '#0F0F10' : '#D4AF37',
          fontWeight: 700,
          fontSize: '13px',
          backdropFilter: rank > 2 ? 'blur(8px)' : undefined,
        }}>
        #{rank + 1}
      </div>

      {/* Trending flame */}
      <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full z-10"
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
        <Flame size={12} className="text-orange-400" />
        <span className="text-[10px] text-white/80">{(profile.views / 1000).toFixed(1)}k</span>
      </div>

      {/* Heart on hover */}
      <div className="absolute top-14 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: 'rgba(139,30,63,0.6)', backdropFilter: 'blur(8px)' }}>
        <Heart size={14} className="text-white/80" />
      </div>

      {/* Bottom info overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 pt-20 z-10"
        style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.95) 10%, rgba(10,10,11,0.7) 50%, transparent 100%)' }}>
        
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
            {profile.name}, {profile.age}
          </h3>
          {profile.verified && <BadgeCheck size={16} className="text-[#D4AF37]" />}
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <MapPin size={11} className="text-[#D4AF37]" />
            <span className="text-[11px] text-white/60">{profile.city}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Star size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[11px] text-white/70" style={{ fontWeight: 600 }}>{profile.rating}</span>
          </div>
        </div>

        {/* Service tags */}
        <div className="flex gap-2">
          {profile.services.map((s, i) => (
            <span key={i} className="text-[9px] px-2 py-0.5 rounded-full text-white/60"
              style={{ background: 'rgba(139,30,63,0.25)', border: '1px solid rgba(139,30,63,0.3)' }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </Link>
);

// ─── CATEGORY CARD (with category label overlay) ───

const CategoryProfileCard = ({ profile, index }: { profile: { id: number; name: string; age: number; city: string; image: string; rating: number }; index: number }) => (
  <Link to={`/perfil/${profile.id}`}>
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative rounded-xl overflow-hidden group cursor-pointer h-[280px] lg:h-[300px]"
      style={{ border: '1px solid rgba(139,30,63,0.1)' }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <ImageWithFallback src={profile.image} alt={profile.name} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
      
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: 'rgba(139,30,63,0.6)', backdropFilter: 'blur(8px)' }}>
        <Heart size={12} className="text-white/80" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 pt-16 z-10"
        style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.95) 5%, rgba(10,10,11,0.6) 50%, transparent 100%)' }}>
        <div className="flex items-center gap-1.5 mb-0.5">
          <h4 className="text-base text-white" style={{ fontWeight: 600 }}>{profile.name}, {profile.age}</h4>
          <BadgeCheck size={13} className="text-[#D4AF37]" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <MapPin size={10} className="text-[#D4AF37]" />
            <span className="text-[10px] text-white/50">{profile.city}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[10px] text-white/70" style={{ fontWeight: 600 }}>{profile.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

// ─── SCROLLABLE ROW WRAPPER ───

const ScrollRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <AutoScrollCarousel speed={0.3} gap="gap-4">
      {children}
    </AutoScrollCarousel>
  );
};

// ═══════════════════════════════════════════════════════════════
// EXPORTED SECTIONS
// ═══════════════════════════════════════════════════════════════

/** Perfis Recentes - horizontal scroll */
export const RecentProfiles = () => (
  <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
    <div className="flex justify-between items-end mb-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Clock size={14} className="text-[#D4AF37]" />
          <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest" style={{ fontWeight: 600 }}>Novos perfis</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #8B1E3F, #D4AF37)' }} />
          <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
            Adicionadas <span className="italic" style={{ color: '#D4AF37' }}>recentemente</span>
          </h2>
        </div>
      </div>
      <a href="#" className="text-sm text-[#D4AF37] hover:text-[#F2D77D] transition-colors flex items-center gap-1 shrink-0">
        Ver Todas <ChevronRight size={14} />
      </a>
    </div>

    <ScrollRow>
      {recentProfiles.map((profile, i) => (
        <div key={profile.id} className="snap-start">
          <SmallProfileCard profile={profile} index={i} />
        </div>
      ))}
    </ScrollRow>
  </section>
);

/** Em Alta / Trending - featured grid */
export const TrendingProfiles = () => (
  <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-16 overflow-hidden">
    {/* Warm subtle background */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(139,30,63,0.04) 0%, transparent 60%)' }} />
    
    <div className="relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Flame size={14} className="text-orange-400" />
            <span className="text-[10px] text-orange-400 uppercase tracking-widest" style={{ fontWeight: 600 }}>Em alta</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #8B1E3F, #D4AF37)' }} />
            <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              As mais <span className="italic" style={{ color: '#D4AF37' }}>procuradas</span> da semana
            </h2>
          </div>
        </div>
        <a href="#" className="text-sm text-[#D4AF37] hover:text-[#F2D77D] transition-colors flex items-center gap-1 shrink-0">
          Ver Ranking <ChevronRight size={14} />
        </a>
      </div>

      {/* Bento-style grid: first 2 large, rest smaller */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {/* Featured large cards */}
        <div className="col-span-2 lg:col-span-2 grid grid-cols-2 gap-4 lg:gap-5">
          {trendingProfiles.slice(0, 2).map((profile, i) => (
            <TrendingCard key={profile.id} profile={profile} rank={i} />
          ))}
        </div>
        {/* Smaller cards */}
        <div className="col-span-2 grid grid-cols-2 gap-4 lg:gap-5">
          {trendingProfiles.slice(2, 6).map((profile, i) => (
            <Link to={`/perfil/${profile.id}`} key={profile.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-[182px] lg:h-[198px]"
                style={{ border: '1px solid rgba(139,30,63,0.12)' }}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
              >
                <ImageWithFallback src={profile.image} alt={profile.name} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                
                {/* Rank */}
                <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] z-10"
                  style={{ background: 'rgba(31,31,33,0.8)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', fontWeight: 700, backdropFilter: 'blur(8px)' }}>
                  #{i + 3}
                </div>

                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full z-10"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}>
                  <Eye size={9} className="text-white/60" />
                  <span className="text-[8px] text-white/70">{(profile.views / 1000).toFixed(1)}k</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 pt-10 z-10"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.95) 5%, transparent 100%)' }}>
                  <div className="flex items-center gap-1 mb-0.5">
                    <h4 className="text-sm text-white" style={{ fontWeight: 600 }}>{profile.name}, {profile.age}</h4>
                    {profile.verified && <BadgeCheck size={11} className="text-[#D4AF37]" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <MapPin size={9} className="text-[#D4AF37]" />
                      <span className="text-[9px] text-white/50">{profile.city}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star size={9} className="text-[#D4AF37] fill-[#D4AF37]" />
                      <span className="text-[9px] text-white/70" style={{ fontWeight: 600 }}>{profile.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/** Explorar por Categoria - tabs with profile grids */
export const CategoryExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeCat = categoryShowcase[activeCategory];

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.03) 0%, transparent 50%)' }} />

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F)' }} />
            <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              Explorar por <span className="italic" style={{ color: '#D4AF37' }}>Categoria</span>
            </h2>
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <p className="text-sm text-white/40 max-w-xl mx-auto">
            Encontre acompanhantes especializadas no tipo de experiência que procura
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-8 hide-scrollbar justify-center">
          {categoryShowcase.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(i)}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all duration-300 whitespace-nowrap shrink-0"
              style={{
                background: activeCategory === i 
                  ? 'linear-gradient(135deg, #8B1E3F, #6B1730)' 
                  : 'rgba(31,31,33,0.6)',
                border: activeCategory === i 
                  ? '1px solid rgba(212,175,55,0.3)' 
                  : '1px solid rgba(139,30,63,0.15)',
                color: activeCategory === i ? '#F2D77D' : 'rgba(255,255,255,0.6)',
                fontWeight: activeCategory === i ? 600 : 400,
                boxShadow: activeCategory === i ? '0 4px 20px rgba(139,30,63,0.3)' : 'none',
              }}
            >
              <span className={activeCategory === i ? 'text-[#D4AF37]' : 'text-white/40'}>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <motion.p 
          key={activeCat.id}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-white/40 mb-8 max-w-lg mx-auto"
        >
          {activeCat.desc}
        </motion.p>

        {/* Profiles Grid */}
        <motion.div
          key={activeCat.id + '-grid'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {activeCat.profiles.map((profile, i) => (
            <CategoryProfileCard key={profile.id} profile={profile} index={i} />
          ))}
        </motion.div>

        {/* View all link */}
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#F2D77D] transition-colors px-6 py-3 rounded-full"
            style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
            Ver todas em "{activeCat.name}"
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

/** Featured Mosaic - visual mosaic/masonry style grid */
export const FeaturedMosaic = () => {
  const mosaicProfiles = [
    { id: 50, name: 'Elisa', age: 27, city: 'Lisboa', image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?auto=format&fit=crop&w=800&q=80', featured: true },
    { id: 51, name: 'Joana', age: 24, city: 'Porto', image: 'https://images.unsplash.com/photo-1572224384995-f9529873f379?auto=format&fit=crop&w=800&q=80', featured: false },
    { id: 52, name: 'Patrícia', age: 26, city: 'Faro', image: 'https://images.unsplash.com/photo-1765229283588-94d146872ccd?auto=format&fit=crop&w=800&q=80', featured: false },
    { id: 53, name: 'Andreia', age: 25, city: 'Coimbra', image: 'https://images.unsplash.com/photo-1622080159621-bfceab50b3e3?auto=format&fit=crop&w=800&q=80', featured: true },
    { id: 54, name: 'Sara', age: 28, city: 'Braga', image: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?auto=format&fit=crop&w=800&q=80', featured: false },
    { id: 55, name: 'Débora', age: 23, city: 'Aveiro', image: 'https://images.unsplash.com/photo-1669437959945-cb78531139bc?auto=format&fit=crop&w=800&q=80', featured: false },
  ];

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest" style={{ fontWeight: 600 }}>Seleção editorial</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(90deg, #8B1E3F, #D4AF37)' }} />
            <h2 className="text-2xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              Perfis em <span className="italic" style={{ color: '#D4AF37' }}>destaque</span>
            </h2>
          </div>
        </div>
        <a href="#" className="text-sm text-[#D4AF37] hover:text-[#F2D77D] transition-colors flex items-center gap-1 shrink-0">
          Ver Mais <ChevronRight size={14} />
        </a>
      </div>

      {/* Mosaic Grid - asymmetric */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[180px] lg:auto-rows-[200px]">
        {mosaicProfiles.map((profile, i) => (
          <Link to={`/perfil/${profile.id}`} key={profile.id}
            className={`${i === 0 ? 'row-span-2 col-span-1 lg:col-span-2' : i === 3 ? 'row-span-2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
              style={{ border: '1px solid rgba(139,30,63,0.12)' }}
            >
              <ImageWithFallback src={profile.image} alt={profile.name} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              
              {/* VIP ribbon for featured */}
              {profile.featured && (
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden z-10">
                  <div className="absolute top-3 -left-5 w-24 text-center py-[2px] -rotate-45 shadow-lg"
                    style={{ background: 'linear-gradient(90deg, #B8922A, #D4AF37, #F2D77D, #D4AF37, #B8922A)' }}>
                    <span className="text-[7px] text-[#0F0F10] uppercase tracking-[0.15em]" style={{ fontWeight: 700 }}>VIP</span>
                  </div>
                </div>
              )}

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ background: 'rgba(139,30,63,0.5)', backdropFilter: 'blur(8px)' }}>
                <Heart size={14} className="text-white/80" />
              </div>

              {/* Info */}
              <div className="absolute inset-x-0 bottom-0 p-4 pt-16 z-10"
                style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.95) 5%, rgba(10,10,11,0.5) 50%, transparent 100%)' }}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className={`${i === 0 || i === 3 ? 'text-xl' : 'text-sm'} text-white`} style={{ fontWeight: 600 }}>
                    {profile.name}, {profile.age}
                  </h3>
                  <BadgeCheck size={i === 0 || i === 3 ? 16 : 12} className="text-[#D4AF37]" />
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={10} className="text-[#D4AF37]" />
                  <span className="text-[10px] text-white/50">{profile.city}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};
