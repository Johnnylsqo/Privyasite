import { Crown, MapPin, Phone, MessageCircle } from "lucide-react";

interface ProfileCardProps {
  name: string;
  age: number;
  city: string;
  image: string;
  isVIP?: boolean;
  phone?: string;
  whatsapp?: string;
  description?: string;
}

export function ProfileCard({ 
  name, 
  age, 
  city, 
  image, 
  isVIP = false,
  phone,
  whatsapp,
  description 
}: ProfileCardProps) {
  return (
    <div className="relative group">
      <div className="bg-[#1F1F21] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* VIP Badge */}
          {isVIP && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <Crown className="w-4 h-4 text-[#0F0F10]" />
              <span className="text-xs font-semibold text-[#0F0F10]" style={{ fontFamily: 'Inter, sans-serif' }}>VIP</span>
            </div>
          )}
          
          {/* Name and Location - Bottom of Image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              {name}, {age}
            </h3>
            <div className="flex items-center gap-1 text-[#D4AF37]">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{city}</span>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-4">
          {description && (
            <p className="text-sm text-[#F5F5F5]/80 mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {description}
            </p>
          )}
          
          {/* Contact Buttons */}
          <div className="flex gap-2">
            {phone && (
              <a 
                href={`tel:${phone}`}
                className="flex-1 bg-[#8B1E3F] hover:bg-[#8B1E3F]/90 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Ligar</span>
              </a>
            )}
            {whatsapp && (
              <a 
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F10] px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-lg opacity-[0.03]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
}
