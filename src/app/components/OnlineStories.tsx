import React, { useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Crown, BadgeCheck } from 'lucide-react';
import { useNavigate } from 'react-router';
import { AutoScrollCarousel } from './AutoScrollCarousel';

interface Story {
  id: number;
  name: string;
  image: string;
  isVIP: boolean;
  verified: boolean;
  city: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: 'Isabella',
    image: 'https://images.unsplash.com/photo-1765229279946-f265fa703385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21hbiUyMHJlZCUyMGRyZXNzJTIwZ2xhbW91cnxlbnwxfHx8fDE3NzM2MTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: true,
    verified: true,
    city: 'Lisboa',
  },
  {
    id: 2,
    name: 'Valentina',
    image: 'https://images.unsplash.com/photo-1710023209229-ec9877bbb95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBldmVuaW5nJTIwZ293bnxlbnwxfHx8fDE3NzM2MTk4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: true,
    verified: true,
    city: 'Lisboa',
  },
  {
    id: 3,
    name: 'Amanda',
    image: 'https://images.unsplash.com/photo-1757607715843-35349ddda681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGhhaXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MTYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: true,
    verified: true,
    city: 'Lisboa',
  },
  {
    id: 4,
    name: 'Sofia',
    image: 'https://images.unsplash.com/photo-1772987292949-4b1bdc01a612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdCUyMGJsYWNrfGVufDF8fHx8MTc3MzYxOTg0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: false,
    verified: true,
    city: 'Porto',
  },
  {
    id: 5,
    name: 'Carolina',
    image: 'https://images.unsplash.com/photo-1764305066080-4eb1823d72ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MzYxOTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: false,
    verified: true,
    city: 'Faro',
  },
  {
    id: 6,
    name: 'Mariana',
    image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyNzkzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: true,
    verified: true,
    city: 'Lisboa',
  },
  {
    id: 1,
    name: 'Isabella',
    image: 'https://images.unsplash.com/photo-1765229279946-f265fa703385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21hbiUyMHJlZCUyMGRyZXNzJTIwZ2xhbW91cnxlbnwxfHx8fDE3NzM2MTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: true,
    verified: true,
    city: 'Lisboa',
  },
  {
    id: 3,
    name: 'Amanda',
    image: 'https://images.unsplash.com/photo-1757607715843-35349ddda681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGhhaXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MTYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isVIP: true,
    verified: true,
    city: 'Lisboa',
  },
];

export default function OnlineStories() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden mb-12">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <h2 className="text-lg text-white" style={{ fontWeight: 600 }}>
          Online Agora
        </h2>
      </div>

      <AutoScrollCarousel speed={0.4} gap="gap-4" showControls={true} className="pt-3">
        {/* Duplicate stories for seamless loop */}
        {[...stories, ...stories].map((story, index) => (
          <button
            key={`${story.id}-${index}`}
            onClick={() => navigate(`/profile/${story.id}`)}
            className="shrink-0 group cursor-pointer snap-start"
          >
            <div className="relative">
              {/* Story Ring */}
              <div className="relative p-1 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #8B1E3F 50%, #D4AF37 100%)',
                }}
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-[#0F0F10] p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <ImageWithFallback 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Online Badge */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full" 
                  style={{ border: '2px solid #0F0F10' }}
                >
                  <div className="w-full h-full bg-emerald-400 rounded-full animate-pulse" />
                </div>

                {/* VIP Crown */}
                {story.isVIP && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #B8922A)', border: '2px solid #0F0F10' }}
                  >
                    <Crown size={12} className="text-[#0F0F10]" />
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="mt-2 text-center">
                <p className="text-xs text-white truncate w-20 flex items-center justify-center gap-1">
                  <span>{story.name}</span>
                  {story.verified && <BadgeCheck size={10} className="text-[#D4AF37]" />}
                </p>
                <p className="text-[10px] text-white/40">{story.city}</p>
              </div>
            </div>
          </button>
        ))}
      </AutoScrollCarousel>
    </div>
  );
}