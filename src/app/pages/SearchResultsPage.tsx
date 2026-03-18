import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { 
  Search, 
  MapPin, 
  Star, 
  Crown, 
  Sparkles, 
  Filter,
  X,
  ChevronDown,
  BadgeCheck,
  Zap,
  TrendingUp,
  Heart,
  User,
  LogOut,
  Settings,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import LoginModal from '../components/LoginModal';

// Mock data - Perfis com alguns patrocinados
const profiles = [
  {
    id: 1,
    name: 'Isabella Santos',
    age: 25,
    city: 'Lisboa',
    district: 'Avenidas Novas',
    image: 'https://images.unsplash.com/photo-1765229279946-f265fa703385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21hbiUyMHJlZCUyMGRyZXNzJTIwZ2xhbW91cnxlbnwxfHx8fDE3NzM2MTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewsCount: 156,
    isVIP: true,
    isSponsored: true,
    verified: true,
    isOnline: true,
    services: ['Acompanhamento', 'Jantares', 'Eventos', 'Pernoite'],
  },
  {
    id: 2,
    name: 'Valentina Cruz',
    age: 27,
    city: 'Lisboa',
    district: 'Parque das Nações',
    image: 'https://images.unsplash.com/photo-1710023209229-ec9877bbb95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBldmVuaW5nJTIwZ293bnxlbnwxfHx8fDE3NzM2MTk4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviewsCount: 98,
    isVIP: true,
    isSponsored: true,
    verified: true,
    isOnline: false,
    services: ['Massagem', 'Viagens', 'Strip Tease'],
  },
  {
    id: 3,
    name: 'Amanda Torres',
    age: 27,
    city: 'Lisboa',
    district: 'Avenidas Novas',
    image: 'https://images.unsplash.com/photo-1757607715843-35349ddda681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGhhaXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MTYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewsCount: 127,
    isVIP: true,
    isSponsored: false,
    verified: true,
    isOnline: true,
    services: ['Beijo na Boca', 'Massagem', 'Jantares'],
  },
  {
    id: 4,
    name: 'Sofia Martins',
    age: 24,
    city: 'Lisboa',
    district: 'Chiado',
    image: 'https://images.unsplash.com/photo-1772987292949-4b1bdc01a612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdCUyMGJsYWNrfGVufDF8fHx8MTc3MzYxOTg0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviewsCount: 89,
    isVIP: false,
    isSponsored: false,
    verified: true,
    isOnline: true,
    services: ['Acompanhamento', 'Eventos'],
  },
  {
    id: 5,
    name: 'Carolina Lima',
    age: 26,
    city: 'Lisboa',
    district: 'Belém',
    image: 'https://images.unsplash.com/photo-1764305066080-4eb1823d72ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MzYxOTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviewsCount: 67,
    isVIP: false,
    isSponsored: false,
    verified: true,
    isOnline: false,
    services: ['Massagem', 'Beijo na Boca'],
  },
  {
    id: 6,
    name: 'Mariana Costa',
    age: 28,
    city: 'Lisboa',
    district: 'Santos',
    image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyNzkzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviewsCount: 112,
    isVIP: true,
    isSponsored: false,
    verified: true,
    isOnline: true,
    services: ['Viagens', 'Pernoite', 'Jantares'],
  },
];

const PrivyaLogo = ({ size = 'default' }: { size?: 'default' | 'small' }) => {
  const iconSize = size === 'small' ? 'w-5 h-5' : 'w-6 h-6';
  const textSize = size === 'small' ? 'text-sm' : 'text-xl';
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${iconSize} flex items-center justify-center`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradSearch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2D77D" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8922A" />
            </linearGradient>
          </defs>
          <path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="url(#logoGradSearch)" />
          <path d="M12 16L9 10H15L12 16Z" fill="#0F0F10" />
        </svg>
      </div>
      <span className={`${textSize} tracking-[0.25em] text-white uppercase`} style={{ fontFamily: 'Playfair Display, serif' }}>
        Privya
      </span>
    </div>
  );
};

const BokehParticle = ({ delay, x, y, size, opacity }: { delay: number; x: string; y: string; size: number; opacity: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ 
      left: x, 
      top: y, 
      width: size, 
      height: size, 
      background: `radial-gradient(circle, rgba(212,175,55,${opacity}) 0%, transparent 70%)`,
      filter: `blur(${size / 3}px)` 
    }}
    animate={{ y: [0, -15, 0, 10, 0], opacity: [opacity, opacity * 1.3, opacity, opacity * 0.7, opacity] }}
    transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const cityParam = searchParams.get('city') || 'Lisboa';
  const { user, isAuthenticated, logout } = useAuth();
  
  const [showFilters, setShowFilters] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(cityParam);
  const [onlyVIP, setOnlyVIP] = useState(false);
  const [onlyOnline, setOnlyOnline] = useState(false);

  // Filter logic
  const getFilteredProfiles = () => {
    let filtered = [...profiles];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(profile => 
        profile.name.toLowerCase().includes(query) ||
        profile.city.toLowerCase().includes(query) ||
        profile.district.toLowerCase().includes(query) ||
        profile.services.some(service => service.toLowerCase().includes(query))
      );
    }

    // Filter by city
    if (selectedCity && selectedCity !== 'Todas') {
      filtered = filtered.filter(profile => profile.city === selectedCity);
    }

    // Filter VIP only
    if (onlyVIP) {
      filtered = filtered.filter(profile => profile.isVIP);
    }

    // Filter online only
    if (onlyOnline) {
      filtered = filtered.filter(profile => profile.isOnline);
    }

    return filtered;
  };

  const filteredProfiles = getFilteredProfiles();

  // Separar perfis patrocinados e normais
  const sponsoredProfiles = filteredProfiles.filter(p => p.isSponsored);
  const regularProfiles = filteredProfiles.filter(p => !p.isSponsored);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCity('Lisboa');
    setOnlyVIP(false);
    setOnlyOnline(false);
  };

  // Update URL when city changes
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    if (city !== 'Todas') {
      setSearchParams({ city });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white relative overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(ellipse at 20% 20%, #3a0a1a 0%, #0F0F10 40%), radial-gradient(ellipse at 80% 60%, #5c1329 0%, #0F0F10 50%), linear-gradient(180deg, #1a0510 0%, #0F0F10 30%, #0F0F10 70%, #1a0510 100%)'
        }} />
        <BokehParticle delay={0} x="15%" y="25%" size={100} opacity={0.08} />
        <BokehParticle delay={1.2} x="85%" y="15%" size={120} opacity={0.12} />
        <BokehParticle delay={2.5} x="70%" y="60%" size={80} opacity={0.06} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-[100]" style={{ backdropFilter: 'blur(20px)', background: 'linear-gradient(180deg, rgba(15,15,16,0.95) 0%, rgba(15,15,16,0.85) 100%)', borderBottom: '1px solid rgba(139,30,63,0.15)' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between gap-4">
            <button onClick={() => navigate('/')} className="cursor-pointer">
              <PrivyaLogo size="small" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Pesquisar por nome, cidade, serviço..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-white/40 outline-none transition-all"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)',
                    border: '1px solid rgba(139,30,63,0.2)',
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Button - Mobile */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden p-3 rounded-xl transition-all"
              style={{ 
                background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)',
                border: '1px solid rgba(139,30,63,0.2)',
              }}
            >
              <Filter size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-8">
        <div className="flex gap-8">
          
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-32 space-y-6">
              
              {/* City Filter */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h3 className="text-base text-white mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <MapPin size={16} className="text-[#D4AF37]" />
                  Cidade
                </h3>
                <select 
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
                  style={{ 
                    background: 'rgba(139,30,63,0.1)',
                    border: '1px solid rgba(139,30,63,0.2)',
                  }}
                >
                  <option value="Todas">Todas</option>
                  <option value="Lisboa">Lisboa</option>
                  <option value="Porto">Porto</option>
                  <option value="Faro">Faro</option>
                  <option value="Coimbra">Coimbra</option>
                  <option value="Braga">Braga</option>
                </select>
              </div>

              {/* Quick Filters */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h3 className="text-base text-white mb-4" style={{ fontWeight: 600 }}>
                  Filtros Rápidos
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={onlyVIP}
                      onChange={(e) => setOnlyVIP(e.target.checked)}
                      className="w-4 h-4 rounded border-2 border-[#D4AF37]/30 bg-transparent checked:bg-[#D4AF37]"
                    />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                      <Crown size={14} className="text-[#D4AF37]" />
                      Apenas VIP
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={onlyOnline}
                      onChange={(e) => setOnlyOnline(e.target.checked)}
                      className="w-4 h-4 rounded border-2 border-emerald-400/30 bg-transparent checked:bg-emerald-400"
                    />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      Apenas Online
                    </span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              <button className="w-full py-2.5 rounded-xl text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all" onClick={handleClearFilters}>
                Limpar Filtros
              </button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            
            {/* Results Header */}
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Acompanhantes em <span className="italic" style={{ color: '#D4AF37' }}>{selectedCity}</span>
              </h1>
              <p className="text-sm text-white/50">
                {filteredProfiles.length} perfis encontrados
              </p>
            </div>

            {/* Sponsored Profiles Section */}
            {sponsoredProfiles.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-[#D4AF37]" />
                  <h2 className="text-lg text-white" style={{ fontWeight: 600 }}>Perfis em Destaque</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sponsoredProfiles.map((profile) => (
                    <motion.div
                      key={profile.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => navigate(`/profile/${profile.id}?sponsored=true`)}
                      className="relative rounded-2xl overflow-hidden cursor-pointer group"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(139,30,63,0.12) 100%)',
                        border: '2px solid rgba(212,175,55,0.3)',
                        boxShadow: '0 8px 30px rgba(212,175,55,0.15)',
                      }}
                    >
                      {/* Sponsored Badge */}
                      <div className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg" 
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(212,175,55,0.95) 0%, rgba(212,175,55,0.85) 100%)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <TrendingUp size={12} className="text-[#0F0F10]" />
                        <span className="text-xs text-[#0F0F10] uppercase tracking-wide" style={{ fontWeight: 700 }}>
                          Destaque
                        </span>
                      </div>

                      <div className="flex gap-4 p-6">
                        {/* Image */}
                        <div className="relative w-40 h-52 shrink-0">
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <ImageWithFallback 
                              src={profile.image} 
                              alt={profile.name} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                          
                          {/* Online Badge */}
                          {profile.isOnline && (
                            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md" 
                              style={{ background: 'rgba(34,197,94,0.9)', backdropFilter: 'blur(10px)' }}
                            >
                              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                              <span className="text-xs text-white" style={{ fontWeight: 600 }}>Online</span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                                {profile.name}, {profile.age}
                              </h3>
                              {profile.verified && <BadgeCheck size={18} className="text-[#D4AF37]" />}
                              {profile.isVIP && <Crown size={16} className="text-[#D4AF37]" />}
                            </div>

                            <div className="flex items-center gap-2 text-white/60 mb-3">
                              <MapPin size={14} className="text-[#D4AF37]" />
                              <span className="text-sm">{profile.district}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} size={12} className={i < Math.floor(profile.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/20'} />
                                ))}
                              </div>
                              <span className="text-sm text-[#D4AF37]" style={{ fontWeight: 600 }}>{profile.rating}</span>
                              <span className="text-xs text-white/40">({profile.reviewsCount})</span>
                            </div>

                            {/* Services */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {profile.services.slice(0, 3).map((service, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-1 rounded-md text-xs text-white/70"
                                  style={{ background: 'rgba(139,30,63,0.15)', border: '1px solid rgba(139,30,63,0.25)' }}
                                >
                                  {service}
                                </span>
                              ))}
                              {profile.services.length > 3 && (
                                <span className="px-2 py-1 rounded-md text-xs text-white/50">
                                  +{profile.services.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <div className="flex items-center justify-end">
                            <button className="px-5 py-2 rounded-lg text-sm text-white transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                              style={{ 
                                background: 'linear-gradient(135deg, #D4AF37, #B8922A)',
                                fontWeight: 600,
                              }}
                            >
                              Ver Perfil
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.1) 0%, transparent 70%)' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Profiles Grid */}
            <div className="mb-6">
              <h2 className="text-lg text-white mb-4" style={{ fontWeight: 600 }}>Todos os Perfis</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {regularProfiles.map((profile) => (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => navigate(`/profile/${profile.id}`)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)',
                      border: '1px solid rgba(139,30,63,0.2)',
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <ImageWithFallback 
                        src={profile.image} 
                        alt={profile.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {profile.isVIP && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded-md" 
                            style={{ background: 'rgba(139,30,63,0.9)', backdropFilter: 'blur(10px)' }}
                          >
                            <Crown size={12} className="text-[#D4AF37]" />
                            <span className="text-xs text-[#D4AF37]" style={{ fontWeight: 600 }}>VIP</span>
                          </div>
                        )}
                        {profile.isOnline && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded-md" 
                            style={{ background: 'rgba(34,197,94,0.9)', backdropFilter: 'blur(10px)' }}
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            <span className="text-xs text-white" style={{ fontWeight: 600 }}>Online</span>
                          </div>
                        )}
                      </div>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                            {profile.name}, {profile.age}
                          </h3>
                          {profile.verified && <BadgeCheck size={14} className="text-[#D4AF37]" />}
                        </div>

                        <div className="flex items-center gap-2 text-white/80 mb-2">
                          <MapPin size={12} className="text-[#D4AF37]" />
                          <span className="text-xs">{profile.district}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                            <span className="text-sm text-[#D4AF37]" style={{ fontWeight: 600 }}>{profile.rating}</span>
                            <span className="text-xs text-white/50">({profile.reviewsCount})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button className="px-8 py-3 rounded-xl text-sm text-white border border-white/15 hover:bg-white/5 transition-all">
                Carregar Mais Perfis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(15,15,16,0.98) 0%, rgba(20,20,22,0.95) 100%)',
                borderLeft: '1px solid rgba(139,30,63,0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                    Filtros
                  </h2>
                  <button onClick={() => setShowFilters(false)} className="p-2 rounded-lg hover:bg-white/5">
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile filters content - same as desktop */}
                <div className="space-y-6">
                  {/* City Filter */}
                  <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                    <h3 className="text-base text-white mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                      <MapPin size={16} className="text-[#D4AF37]" />
                      Cidade
                    </h3>
                    <select 
                      value={selectedCity}
                      onChange={(e) => handleCityChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
                      style={{ 
                        background: 'rgba(139,30,63,0.1)',
                        border: '1px solid rgba(139,30,63,0.2)',
                      }}
                    >
                      <option value="Todas">Todas</option>
                      <option value="Lisboa">Lisboa</option>
                      <option value="Porto">Porto</option>
                      <option value="Faro">Faro</option>
                      <option value="Coimbra">Coimbra</option>
                      <option value="Braga">Braga</option>
                    </select>
                  </div>

                  {/* Quick Filters */}
                  <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                    <h3 className="text-base text-white mb-4" style={{ fontWeight: 600 }}>
                      Filtros Rápidos
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={onlyVIP}
                          onChange={(e) => setOnlyVIP(e.target.checked)}
                          className="w-4 h-4 rounded border-2 border-[#D4AF37]/30 bg-transparent checked:bg-[#D4AF37]"
                        />
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                          <Crown size={14} className="text-[#D4AF37]" />
                          Apenas VIP
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox"
                          checked={onlyOnline}
                          onChange={(e) => setOnlyOnline(e.target.checked)}
                          className="w-4 h-4 rounded border-2 border-emerald-400/30 bg-transparent checked:bg-emerald-400"
                        />
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          Apenas Online
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <button className="w-full py-2.5 rounded-xl text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all" onClick={handleClearFilters}>
                    Limpar Filtros
                  </button>

                  {/* Apply and Close */}
                  <button 
                    className="w-full py-3 rounded-xl text-sm text-white transition-all"
                    style={{ background: 'linear-gradient(135deg, #8B1E3F, #6B1730)', fontWeight: 600 }}
                    onClick={() => setShowFilters(false)}
                  >
                    Aplicar Filtros
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* User Menu */}
      {isAuthenticated && (
        <div className="fixed bottom-4 right-4 z-[120]">
          <button
            className="p-3 rounded-full bg-[#0F0F10] shadow-lg"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <User size={20} className="text-white" />
          </button>
          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 bottom-14 w-48 bg-[#0F0F10] shadow-lg rounded-lg"
            >
              <div className="p-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800">
                  <Settings size={16} className="text-white" />
                  <span className="text-sm text-white">Configurações</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800">
                  <LogOut size={16} className="text-white" />
                  <span className="text-sm text-white" onClick={logout}>Sair</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}