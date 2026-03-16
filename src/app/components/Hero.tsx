import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [city, setCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search functionality
    console.log("Searching for:", city);
  };

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B1E3F]/20 via-[#0F0F10] to-[#0F0F10]" />
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />
      
      {/* Decorative glow elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#8B1E3F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo/Title */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          <h1 
            className="text-5xl md:text-7xl text-white tracking-wider"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            PRIVYA
          </h1>
          <Sparkles className="w-8 h-8 text-[#D4AF37]" />
        </div>
        
        <p 
          className="text-lg md:text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A plataforma premium de acompanhantes de luxo em Portugal. 
          <span className="block mt-2 text-[#D4AF37]">Elegância, discrição e sofisticação.</span>
        </p>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B1E3F] to-[#D4AF37] rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            
            <div className="relative flex items-center bg-[#1F1F21] rounded-full overflow-hidden shadow-2xl border border-[#D4AF37]/20">
              <div className="pl-6 pr-3">
                <Search className="w-5 h-5 text-[#D4AF37]" />
              </div>
              
              <input
                type="text"
                placeholder="Buscar por cidade (Lisboa, Porto, Faro...)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 bg-transparent py-4 pr-4 text-[#F5F5F5] placeholder-[#F5F5F5]/40 focus:outline-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              
              <button
                type="submit"
                className="m-1 px-8 py-3 bg-gradient-to-r from-[#8B1E3F] to-[#8B1E3F]/90 hover:from-[#8B1E3F]/90 hover:to-[#8B1E3F] text-white rounded-full transition-all shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Pesquisar
              </button>
            </div>
          </div>
        </form>
        
        {/* Popular cities */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-[#F5F5F5]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            Popular:
          </span>
          {["Lisboa", "Porto", "Faro", "Coimbra", "Braga"].map((popularCity) => (
            <button
              key={popularCity}
              onClick={() => setCity(popularCity)}
              className="text-sm px-4 py-1.5 bg-[#1F1F21] hover:bg-[#8B1E3F]/20 text-[#D4AF37] hover:text-[#D4AF37] rounded-full border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {popularCity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
