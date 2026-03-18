import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState('pt');
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === selectedLang) || languages[0];

  const handleSelectLanguage = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
    // Aqui você implementaria a lógica de mudança de idioma
    console.log('Idioma selecionado:', code);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
        style={{ border: '1px solid rgba(139,30,63,0.2)' }}
      >
        <Globe size={18} className="text-[#D4AF37]" />
        <span className="text-sm text-white">{currentLang.flag}</span>
        <span className="hidden lg:inline text-sm text-white/80">{currentLang.name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[90]"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden z-[100]"
              style={{
                background: 'linear-gradient(135deg, rgba(15,15,16,0.98) 0%, rgba(20,20,22,0.95) 100%)',
                border: '1px solid rgba(139,30,63,0.3)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
              }}
            >
              <div className="p-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm text-white/80">{lang.name}</span>
                    </div>
                    {selectedLang === lang.code && (
                      <Check size={16} className="text-[#D4AF37]" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
