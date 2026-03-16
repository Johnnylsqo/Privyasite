import { ProfileCard } from "./ProfileCard";
import { Crown } from "lucide-react";

const vipProfiles = [
  {
    id: 1,
    name: "Isabella",
    age: 25,
    city: "Lisboa",
    image: "https://images.unsplash.com/photo-1760532467646-b9e466403862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBsdXh1cnl8ZW58MXx8fHwxNzczMzIxMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVIP: true,
    phone: "+351912345678",
    whatsapp: "351912345678",
    description: "Elegância e sofisticação em cada momento. Disponível para jantares e eventos exclusivos."
  },
  {
    id: 2,
    name: "Valentina",
    age: 27,
    city: "Porto",
    image: "https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyNzkzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVIP: true,
    phone: "+351923456789",
    whatsapp: "351923456789",
    description: "Charme e inteligência. Perfeita para ocasiões especiais que exigem classe."
  },
  {
    id: 3,
    name: "Gabriela",
    age: 24,
    city: "Faro",
    image: "https://images.unsplash.com/photo-1692482386532-7a3c6a051144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVsZWdhbmNlfGVufDF8fHx8MTc3MzMyMTM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVIP: true,
    phone: "+351934567890",
    whatsapp: "351934567890",
    description: "Beleza natural e personalidade cativante. Experiências inesquecíveis garantidas."
  }
];

export function VIPSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1754782827370-83c57ee898dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBsdXh1cnklMjBsaWZlc3R5bGUlMjBibHVycmVkfGVufDF8fHx8MTc3MzYxOTE2OHww&ixlib=rb-4.1.0&q=80&w=1080)',
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/95 via-[#0F0F10]/90 to-[#0F0F10]/95" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(139,30,63,0.15) 0%, transparent 70%)' }} />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl z-[1]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full border border-[#D4AF37]/20">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Membros Premium
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Perfis VIP
          </h2>
          
          <p 
            className="text-lg text-[#F5F5F5]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Acompanhantes de luxo selecionadas com os mais altos padrões de elegância e discrição
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vipProfiles.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-[#8B1E3F] to-[#8B1E3F]/90 hover:from-[#8B1E3F]/90 hover:to-[#8B1E3F] text-white rounded-full transition-all shadow-lg hover:shadow-xl">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Ver todos os perfis VIP</span>
          </button>
        </div>
      </div>
    </section>
  );
}