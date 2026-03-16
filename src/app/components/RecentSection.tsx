import { ProfileCard } from "./ProfileCard";
import { Clock } from "lucide-react";

const recentProfiles = [
  {
    id: 4,
    name: "Sofia",
    age: 26,
    city: "Lisboa",
    image: "https://images.unsplash.com/photo-1768609957288-312bebb31fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMGV2ZW5pbmd8ZW58MXx8fHwxNzczMzIxMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    phone: "+351945678901",
    whatsapp: "351945678901",
    description: "Jovem, carismática e com muito estilo. Adoro novas experiências e momentos especiais."
  },
  {
    id: 5,
    name: "Carolina",
    age: 23,
    city: "Coimbra",
    image: "https://images.unsplash.com/photo-1760532467646-b9e466403862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NzMzMjEzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    phone: "+351956789012",
    whatsapp: "351956789012",
    description: "Simpática e atenciosa, perfeita para quem procura momentos relaxantes e agradáveis."
  },
  {
    id: 6,
    name: "Mariana",
    age: 28,
    city: "Braga",
    image: "https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGFkeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzMyMTM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    phone: "+351967890123",
    whatsapp: "351967890123",
    description: "Elegante e sofisticada. Disponível para encontros discretos e eventos sociais."
  }
];

export function RecentSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0F0F10] to-[#1a1a1c]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#1F1F21] rounded-full border border-[#D4AF37]/20">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#F5F5F5]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Últimas Adições
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Perfis Recentes
          </h2>
          
          <p 
            className="text-lg text-[#F5F5F5]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Conheça as mais recentes acompanhantes que se juntaram à nossa plataforma
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProfiles.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[#1F1F21] hover:bg-[#2a2a2c] text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 rounded-full transition-all shadow-lg">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Explorar mais perfis</span>
          </button>
        </div>
      </div>
    </section>
  );
}
