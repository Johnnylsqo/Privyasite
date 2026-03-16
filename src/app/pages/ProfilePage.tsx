import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router';
import {
  ArrowLeft,
  MapPin,
  Star,
  Heart,
  Clock,
  Phone,
  MessageCircle,
  Shield,
  Crown,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Check,
  XCircle,
  BadgeCheck,
  Zap,
  Award,
  ChevronDown,
  ChevronUp,
  Video,
  Image as ImageIcon,
  TrendingUp,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

// Serviços com descrições detalhadas
const servicesDatabase = {
  'Beijo na Boca': { desc: 'Beijo romântico durante o encontro', icon: '💋' },
  'Beijo Grego': { desc: 'Estimulação oral na região anal', icon: '🔥' },
  'Oral sem Preservativo': { desc: 'Sexo oral sem proteção', icon: '👄' },
  'Oral com Preservativo': { desc: 'Sexo oral com proteção', icon: '🛡️' },
  'Sexo Anal': { desc: 'Penetração anal', icon: '🍑' },
  'Massagem': { desc: 'Massagem relaxante e sensual', icon: '💆' },
  'Acompanhamento': { desc: 'Acompanhamento em eventos e jantares', icon: '🥂' },
  'Pernoite': { desc: 'Disponibilidade para passar a noite', icon: '🌙' },
  'Viagens': { desc: 'Disponível para viagens nacionais/internacionais', icon: '✈️' },
  'Fetiche': { desc: 'Práticas fetichistas personalizadas', icon: '🎭' },
  'Strip Tease': { desc: 'Performance erótica com dança', icon: '💃' },
  'Dominação': { desc: 'Práticas de dominação', icon: '⛓️' },
  'Submissão': { desc: 'Práticas de submissão', icon: '🎀' },
  'Casal': { desc: 'Atendimento a casais', icon: '👫' },
  'Jantares': { desc: 'Acompanhamento em jantares românticos', icon: '🍽️' },
  'Eventos': { desc: 'Presença em eventos sociais', icon: '🎉' },
};

// Mock data expandido
const profileData = {
  id: '1',
  name: 'Amanda Torres',
  age: 27,
  city: 'Lisboa',
  district: 'Avenidas Novas',
  country: 'Portugal',
  rating: 4.9,
  reviewsCount: 127,
  isOnline: true,
  isVIP: true,
  verified: true,
  
  // Dados físicos
  physical: {
    height: '1,68m',
    weight: '56kg',
    measurements: '90-62-92',
    bust: '90cm (Seios Naturais)',
    waist: '62cm',
    hips: '92cm',
    hair: 'Castanho Escuro',
    eyes: 'Castanhos',
    skin: 'Morena Clara',
    bodyType: 'Atlética',
    tattoos: 'Pequena tatuagem discreta',
    piercings: 'Não',
  },
  
  languages: ['Português', 'Inglês', 'Espanhol'],
  nationality: 'Portuguesa',
  about: 'Elegante, simpática e comunicativa. Adoro viagens, jantares em restaurantes sofisticados e boas conversas. Sou discreta, educada e ofereço um atendimento de alto nível para clientes exigentes que valorizam qualidade e profissionalismo.',
  
  coverImage: 'https://images.unsplash.com/photo-1740047957758-24c66b4468e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBlbGVnYW50JTIwZGFya3xlbnwxfHx8fDE3NzM2MTk0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  mainImage: 'https://images.unsplash.com/photo-1757607715843-35349ddda681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGhhaXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MTYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  
  photos: [
    'https://images.unsplash.com/photo-1757607715843-35349ddda681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGhhaXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MTYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765229279658-7335ee3cdaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21hbiUyMGV2ZW5pbmclMjBkcmVzc3xlbnwxfHx8fDE3NzM2MTYyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759090988109-2ed7abd1eefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBibGFjayUyMGRyZXNzfGVufDF8fHx8MTc3MzYxNjIwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767396857453-c02aeae61a30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzczNjE2MjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1769650795569-e51a6e9580c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzM2MTYyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  ],
  
  videos: [
    'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  ],
  
  schedule: {
    start: '10:00',
    end: '22:00',
  },
  
  // Serviços com status (faz/recebe/não oferece)
  services: [
    { name: 'Beijo na Boca', status: 'offers' },
    { name: 'Oral sem Preservativo', status: 'offers' },
    { name: 'Oral com Preservativo', status: 'offers' },
    { name: 'Sexo Anal', status: 'receives' },
    { name: 'Massagem', status: 'offers' },
    { name: 'Acompanhamento', status: 'offers' },
    { name: 'Pernoite', status: 'offers' },
    { name: 'Viagens', status: 'offers' },
    { name: 'Strip Tease', status: 'offers' },
    { name: 'Jantares', status: 'offers' },
    { name: 'Eventos', status: 'offers' },
    { name: 'Beijo Grego', status: 'no' },
    { name: 'Dominação', status: 'no' },
    { name: 'Submissão', status: 'receives' },
  ],
  
  prices: {
    '1h': '150€',
    '2h': '280€',
    'Pernoite': '800€',
  },
  
  reviews: [
    {
      pseudonym: 'Cavalheiro_Lisboa',
      rating: 5,
      date: '2 dias atrás',
      comment: 'Experiência maravilhosa, ambiente sofisticado e atendimento impecável. Muito educada e carismática. Recomendo!',
    },
    {
      pseudonym: 'Voyageur_PT',
      rating: 5,
      date: '1 semana atrás',
      comment: 'Atendimento de alto nível, super atenciosa e discreta. Superou todas as expectativas.',
    },
    {
      pseudonym: 'Cliente_Premium',
      rating: 5,
      date: '2 semanas atrás',
      comment: 'Noite inesquecível, muito profissional e sofisticada. Exatamente como nas fotos.',
    },
    {
      pseudonym: 'Anon_Porto',
      rating: 4,
      date: '3 semanas atrás',
      comment: 'Ótima companhia, conversa interessante e muito elegante. Valeu cada momento.',
    },
  ],
};

const PrivyaLogo = ({ size = 'default' }: { size?: 'default' | 'small' }) => {
  const iconSize = size === 'small' ? 'w-5 h-5' : 'w-6 h-6';
  const textSize = size === 'small' ? 'text-sm' : 'text-xl';
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${iconSize} flex items-center justify-center`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradProfile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2D77D" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8922A" />
            </linearGradient>
          </defs>
          <path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="url(#logoGradProfile)" />
          <path d="M12 16L9 10H15L12 16Z" fill="#0F0F10" />
        </svg>
      </div>
      <span className={`${textSize} tracking-[0.25em] text-white uppercase`} style={{ fontFamily: 'Playfair Display, serif' }}>
        Privya
      </span>
    </div>
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

export default function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSponsored = searchParams.get('sponsored') === 'true';
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [galleryTab, setGalleryTab] = useState<'photos' | 'videos'>('photos');

  // Combine photos and videos for modal navigation
  const allMedia = [...profileData.photos, ...profileData.videos];
  const currentGallery = galleryTab === 'photos' ? profileData.photos : profileData.videos;

  const handlePrevImage = () => {
    if (expandedImage !== null) {
      setExpandedImage(expandedImage === 0 ? currentGallery.length - 1 : expandedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (expandedImage !== null) {
      setExpandedImage(expandedImage === currentGallery.length - 1 ? 0 : expandedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white relative overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(ellipse at 20% 20%, #3a0a1a 0%, #0F0F10 40%), radial-gradient(ellipse at 80% 60%, #5c1329 0%, #0F0F10 50%), linear-gradient(180deg, #1a0510 0%, #0F0F10 30%, #0F0F10 70%, #1a0510 100%)'
        }} />
        <div className="absolute top-0 right-0 w-[60%] h-[50%] rounded-full" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.18) 0%, rgba(139,30,63,0.08) 35%, transparent 65%)',
          filter: 'blur(80px)'
        }} />
        <div className="absolute bottom-0 left-0 w-[50%] h-[40%] rounded-full" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(92,19,41,0.15) 0%, rgba(58,10,26,0.06) 40%, transparent 70%)',
          filter: 'blur(70px)'
        }} />
        <BokehParticle delay={0} x="15%" y="25%" size={100} opacity={0.08} color="rgba(139,30,63," />
        <BokehParticle delay={1.2} x="85%" y="15%" size={120} opacity={0.12} />
        <BokehParticle delay={2.5} x="70%" y="60%" size={80} opacity={0.06} color="rgba(139,30,63," />
        <BokehParticle delay={1.8} x="25%" y="70%" size={90} opacity={0.1} />
      </div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-[100]" style={{ backdropFilter: 'blur(20px)', background: 'linear-gradient(180deg, rgba(15,15,16,0.95) 0%, rgba(15,15,16,0.85) 100%)', borderBottom: '1px solid rgba(139,30,63,0.15)' }}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Voltar</span>
          </button>
          <PrivyaLogo size="small" />
          <button onClick={() => setIsFavorite(!isFavorite)} className="p-2 rounded-full hover:bg-white/5 transition-all">
            <Heart size={20} className={isFavorite ? 'text-[#8B1E3F] fill-[#8B1E3F]' : 'text-white/70'} />
          </button>
        </div>
      </header>

      {/* Mobile Floating Contact Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-[90]" style={{ backdropFilter: 'blur(20px)', background: 'linear-gradient(180deg, rgba(15,15,16,0.85) 0%, rgba(15,15,16,0.95) 100%)', borderTop: '1px solid rgba(139,30,63,0.2)' }}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm text-white truncate" style={{ fontWeight: 600 }}>
                {profileData.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-base text-[#D4AF37]" style={{ fontWeight: 700 }}>
                  {profileData.prices['1h']}
                </span>
                <span className="text-xs text-white/40">/ hora</span>
              </div>
            </div>
            <button 
              className="px-6 py-2.5 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_20px_rgba(139,30,63,0.4)] flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #8B1E3F, #6B1730)', fontWeight: 600 }}
            >
              <Phone size={16} />
              Ver Telefone
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 lg:pt-[72px] pb-24 lg:pb-16">
        {/* Desktop Cover Photo Layout (Facebook Style) - Only Desktop */}
        <div className="hidden lg:block">
          {/* Cover Image */}
          <div className="relative w-full h-[400px] overflow-hidden">
            <ImageWithFallback 
              src={profileData.coverImage} 
              alt="Capa do perfil" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0F10]/80" />
          </div>

          {/* Profile Info Container - Overlapping Cover */}
          <div className="max-w-[1200px] mx-auto px-10 -mt-24 relative z-20">
            <div className="flex items-end gap-6 mb-6">
              {/* Profile Picture */}
              <div className="relative shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden" style={{ border: '4px solid #0F0F10', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                  <ImageWithFallback 
                    src={profileData.mainImage} 
                    alt={profileData.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Badge on Photo */}
                {profileData.isOnline && (
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-emerald-400 rounded-full" style={{ border: '3px solid #0F0F10' }}>
                    <div className="w-full h-full bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              {/* Name and Info */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                    {profileData.name}, {profileData.age}
                  </h1>
                  {profileData.verified && <BadgeCheck size={28} className="text-[#D4AF37]" />}
                </div>
                
                <div className="flex items-center gap-2 text-white/60 mb-3">
                  <MapPin size={18} className="text-[#D4AF37]" />
                  <span className="text-base">{profileData.district}, {profileData.city}</span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className={i < Math.floor(profileData.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/20'} />
                      ))}
                    </div>
                    <span className="text-base text-[#D4AF37]" style={{ fontWeight: 600 }}>{profileData.rating.toFixed(1)}</span>
                    <span className="text-sm text-white/40">({profileData.reviewsCount})</span>
                  </div>

                  {/* VIP Badge */}
                  {profileData.isVIP && (
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(107,23,48,0.2) 100%)',
                        border: '1px solid rgba(212,175,55,0.4)',
                      }}>
                      <Crown size={16} className="text-[#D4AF37]" />
                      <span className="text-sm text-[#D4AF37] uppercase tracking-wider" style={{ fontWeight: 700 }}>VIP</span>
                    </div>
                  )}

                  {/* Online Status */}
                  {profileData.isOnline && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs text-emerald-400" style={{ fontWeight: 600 }}>Online Agora</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pb-4">
                <button onClick={() => setIsFavorite(!isFavorite)} className="p-3 rounded-xl hover:bg-white/5 transition-all" style={{ border: '1px solid rgba(139,30,63,0.3)' }}>
                  <Heart size={24} className={isFavorite ? 'text-[#8B1E3F] fill-[#8B1E3F]' : 'text-white/70'} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-6 lg:pt-0">
          
          {/* Header Section - Mobile Only */}
          <div className="mb-8 lg:hidden">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                    {profileData.name}, {profileData.age}
                  </h1>
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                    <MapPin size={14} className="text-[#D4AF37]" />
                    <span>{profileData.city}</span>
                  </div>
                </div>
                
                {/* Status Online */}
                {profileData.isOnline && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}>
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400" style={{ fontWeight: 600 }}>Online</span>
                  </div>
                )}
              </div>

              {/* Tags Row - Mobile */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {profileData.verified && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                    <BadgeCheck size={12} className="text-[#D4AF37]" />
                    <span className="text-xs text-[#D4AF37]" style={{ fontWeight: 600 }}>Verificado</span>
                  </div>
                )}
                {profileData.isVIP && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#8B1E3F]/20 border border-[#8B1E3F]/40">
                    <Crown size={12} className="text-[#D4AF37]" />
                    <span className="text-xs text-white" style={{ fontWeight: 600 }}>VIP</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className={i < Math.floor(profileData.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/20'} />
                  ))}
                  <span className="text-xs text-[#D4AF37] ml-1" style={{ fontWeight: 600 }}>{profileData.rating}</span>
                  <span className="text-xs text-white/40">({profileData.reviewsCount})</span>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                      {profileData.name}, {profileData.age}
                    </h1>
                    {profileData.verified && <BadgeCheck size={24} className="text-[#D4AF37]" />}
                  </div>
                  
                  {/* VIP Badge */}
                  {profileData.isVIP && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-3"
                      style={{ 
                        background: 'linear-gradient(135deg, #8B1E3F 0%, #6B1730 100%)',
                        border: '2px solid rgba(212,175,55,0.4)',
                        boxShadow: '0 8px 30px rgba(139,30,63,0.4), 0 0 40px rgba(212,175,55,0.15)'
                      }}>
                      <Crown size={18} className="text-[#D4AF37]" />
                      <span className="text-sm text-white uppercase tracking-wider" style={{ fontWeight: 700 }}>Membro VIP Premium</span>
                      <Sparkles size={16} className="text-[#D4AF37]" />
                    </motion.div>
                  )}
                  
                  <div className="flex items-center gap-2 text-white/60 mb-2">
                    <MapPin size={16} className="text-[#D4AF37]" />
                    <span className="text-sm">{profileData.district}, {profileData.city}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(profileData.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/20'} />
                      ))}
                    </div>
                    <span className="text-sm text-[#D4AF37]" style={{ fontWeight: 600 }}>{profileData.rating.toFixed(1)}</span>
                    <span className="text-xs text-white/40">({profileData.reviewsCount} avaliações)</span>
                  </div>
                </div>

                {/* Status Online */}
                {profileData.isOnline && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400" style={{ fontWeight: 600 }}>Online Agora</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Gallery with Tabs */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Galeria
              </h2>
              
              {/* Gallery Tabs */}
              <div className="flex items-center gap-2 p-1 rounded-lg" style={{ background: 'rgba(31,31,33,0.6)', border: '1px solid rgba(139,30,63,0.2)' }}>
                <button
                  onClick={() => setGalleryTab('photos')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all ${
                    galleryTab === 'photos' 
                      ? 'bg-[#8B1E3F] text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  <ImageIcon size={14} />
                  Fotos ({profileData.photos.length})
                </button>
                <button
                  onClick={() => setGalleryTab('videos')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all ${
                    galleryTab === 'videos' 
                      ? 'bg-[#8B1E3F] text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  <Video size={14} />
                  Vídeos ({profileData.videos.length})
                </button>
              </div>
            </div>

            {/* Gallery Grid - Mobile: Instagram Style, Desktop: Regular Grid */}
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
              {currentGallery.map((image, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setExpandedImage(i)}
                  style={{ border: '1px solid rgba(139,30,63,0.2)' }}
                >
                  <ImageWithFallback src={image} alt={`${galleryTab === 'photos' ? 'Foto' : 'Vídeo'} ${i + 1}`} className="w-full h-full object-cover" />
                  {galleryTab === 'videos' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Video size={20} className="text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Modal de Imagem Expandida */}
          <AnimatePresence>
            {expandedImage !== null && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
                onClick={() => setExpandedImage(null)}
              >
                <button 
                  onClick={(e) => { e.stopPropagation(); setExpandedImage(null); }}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <X size={24} className="text-white" />
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <ChevronLeft size={28} className="text-white" />
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <ChevronRight size={28} className="text-white" />
                </button>

                <motion.div 
                  initial={{ scale: 0.9 }} 
                  animate={{ scale: 1 }}
                  className="max-w-5xl max-h-[90vh] relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ImageWithFallback 
                    src={currentGallery[expandedImage]} 
                    alt="Foto expandida" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md">
                    <span className="text-sm text-white">{expandedImage + 1} / {currentGallery.length}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Sobre */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h2 className="text-xl text-white mb-3 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  Sobre Mim
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">{profileData.about}</p>
              </section>

              {/* Características Físicas */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h2 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  Características Físicas
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Altura</span>
                    <p className="text-sm text-white/80">{profileData.physical.height}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Peso</span>
                    <p className="text-sm text-white/80">{profileData.physical.weight}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Medidas</span>
                    <p className="text-sm text-white/80">{profileData.physical.measurements}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Busto</span>
                    <p className="text-sm text-white/80">{profileData.physical.bust}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Cabelo</span>
                    <p className="text-sm text-white/80">{profileData.physical.hair}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Olhos</span>
                    <p className="text-sm text-white/80">{profileData.physical.eyes}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Tom de Pele</span>
                    <p className="text-sm text-white/80">{profileData.physical.skin}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Tipo Físico</span>
                    <p className="text-sm text-white/80">{profileData.physical.bodyType}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Tatuagens</span>
                    <p className="text-sm text-white/80">{profileData.physical.tattoos}</p>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Piercings</span>
                    <p className="text-sm text-white/80">{profileData.physical.piercings}</p>
                  </div>
                </div>
              </section>

              {/* Serviços Oferecidos - Accordion Style */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h2 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  Serviços
                </h2>
                <div className="space-y-2">
                  {profileData.services.map((service, i) => {
                    const serviceInfo = servicesDatabase[service.name as keyof typeof servicesDatabase];
                    const isExpanded = expandedService === service.name;
                    return (
                      <div key={i}>
                        <button
                          onClick={() => setExpandedService(isExpanded ? null : service.name)}
                          className="w-full flex items-center justify-between p-3 rounded-lg group hover:bg-white/5 transition-all" 
                          style={{ border: '1px solid rgba(139,30,63,0.1)' }}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <span className="text-lg">{serviceInfo?.icon}</span>
                            <span className="text-sm text-white">{service.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {service.status === 'offers' && (
                              <span className="px-2.5 py-1 rounded-md text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" style={{ fontWeight: 600 }}>
                                <Check size={12} className="inline mr-1" />
                                Faz
                              </span>
                            )}
                            {service.status === 'receives' && (
                              <span className="px-2.5 py-1 rounded-md text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20" style={{ fontWeight: 600 }}>
                                <Check size={12} className="inline mr-1" />
                                Recebe
                              </span>
                            )}
                            {service.status === 'no' && (
                              <span className="px-2.5 py-1 rounded-md text-xs bg-red-500/10 text-red-400 border border-red-500/20" style={{ fontWeight: 600 }}>
                                <XCircle size={12} className="inline mr-1" />
                                Não
                              </span>
                            )}
                            {isExpanded ? (
                              <ChevronUp size={16} className="text-white/40" />
                            ) : (
                              <ChevronDown size={16} className="text-white/40" />
                            )}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-3 py-2 text-xs text-white/60 leading-relaxed">
                                {serviceInfo?.desc}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Avaliações Anônimas */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                    Avaliações ({profileData.reviewsCount})
                  </h2>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#8B1E3F]/10 border border-[#8B1E3F]/20">
                    <Shield size={14} className="text-[#D4AF37]" />
                    <span className="text-xs text-white/60">Anônimas</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {profileData.reviews.map((review, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ background: 'rgba(139,30,63,0.08)', border: '1px solid rgba(139,30,63,0.15)' }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#8B1E3F]/20 flex items-center justify-center">
                            <span className="text-xs text-[#D4AF37]">👤</span>
                          </div>
                          <span className="text-sm text-white/70" style={{ fontWeight: 600 }}>{review.pseudonym}</span>
                        </div>
                        <span className="text-xs text-white/40">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} className={s < review.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/20'} />
                        ))}
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Premium */}
              <section className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #8B1E3F 0%, #6B1730 100%)', border: '1px solid rgba(212,175,55,0.3)' }}>
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl" style={{ background: 'rgba(212,175,55,0.15)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown size={24} className="text-[#D4AF37]" />
                    <h3 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                      Torne-se Premium
                    </h3>
                  </div>
                  <p className="text-sm text-white/70 mb-4">
                    Destaque o seu perfil, receba mais visitas e aumente os seus rendimentos com os recursos exclusivos VIP.
                  </p>
                  <ul className="space-y-2 mb-5">
                    {['Destaque no topo das buscas', 'Badge VIP dourado', 'Estatísticas avançadas', 'Suporte prioritário'].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <Zap size={14} className="text-[#D4AF37]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl text-sm text-[#0F0F10] transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    style={{ fontWeight: 600, background: 'linear-gradient(135deg, #F2D77D, #D4AF37)' }}>
                    Upgrade para VIP
                  </button>
                </div>
              </section>
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block space-y-6">
              
              {/* Preços */}
              <section className="rounded-2xl p-6 sticky top-24" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.8) 0%, rgba(26,26,28,0.6) 100%)', border: '1px solid rgba(139,30,63,0.2)' }}>
                <h3 className="text-lg text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Valores</h3>
                <div className="space-y-3 mb-5">
                  {Object.entries(profileData.prices).map(([duration, price]) => (
                    <div key={duration} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'rgba(139,30,63,0.1)', border: '1px solid rgba(139,30,63,0.2)' }}>
                      <span className="text-sm text-white/70">{duration}</span>
                      <span className="text-lg text-[#D4AF37]" style={{ fontWeight: 700 }}>{price}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_20px_rgba(139,30,63,0.4)] flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #8B1E3F, #6B1730)', fontWeight: 600 }}>
                    <Phone size={16} />
                    Ligar Agora
                  </button>
                  <button className="w-full py-3 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', fontWeight: 600 }}>
                    <MessageCircle size={16} />
                    WhatsApp
                  </button>
                </div>
              </section>

              {/* Horário */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} className="text-[#D4AF37]" />
                  <h3 className="text-sm text-white" style={{ fontWeight: 600 }}>Horário de Atendimento</h3>
                </div>
                <p className="text-sm text-white/70">{profileData.schedule.start} - {profileData.schedule.end}</p>
              </section>

              {/* Idiomas */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h3 className="text-sm text-white mb-3" style={{ fontWeight: 600 }}>Idiomas</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.languages.map((lang, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs text-white/80 bg-[#8B1E3F]/10 border border-[#8B1E3F]/20">
                      {lang}
                    </span>
                  ))}
                </div>
              </section>

              {/* Badges de Confiança */}
              <section className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
                <h3 className="text-sm text-white mb-3" style={{ fontWeight: 600 }}>Segurança</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <Shield size={14} className="text-emerald-400" />
                    <span>Perfil Verificado</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <BadgeCheck size={14} className="text-[#D4AF37]" />
                    <span>Identidade Confirmada</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <Award size={14} className="text-blue-400" />
                    <span>Membro desde 2023</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}