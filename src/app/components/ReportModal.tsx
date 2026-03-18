import React, { useState } from 'react';
import { X, AlertTriangle, Flag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileName: string;
}

export default function ReportModal({ isOpen, onClose, profileName }: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const reasons = [
    'Fotos falsas ou enganosas',
    'Perfil falso ou fraudulento',
    'Comportamento inadequado',
    'Preços abusivos',
    'Conteúdo ofensivo',
    'Menor de idade',
    'Outros',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedReason) {
      alert('Por favor, selecione um motivo');
      return;
    }

    // Aqui seria enviada a denúncia para o backend
    console.log({
      profileName,
      reason: selectedReason,
      details,
      timestamp: new Date(),
    });

    setSubmitted(true);
    
    // Fechar modal após 2 segundos
    setTimeout(() => {
      setSubmitted(false);
      setSelectedReason('');
      setDetails('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(15,15,16,0.98) 0%, rgba(20,20,22,0.95) 100%)',
              border: '1px solid rgba(139,30,63,0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <X size={18} />
            </button>

            {submitted ? (
              // Success State
              <div className="px-8 py-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(22,163,74,0.2) 100%)' }}
                >
                  <Flag size={32} className="text-emerald-400" />
                </div>
                
                <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  Denúncia Enviada
                </h2>
                
                <p className="text-sm text-white/60">
                  Sua denúncia foi recebida e será analisada pela nossa equipa em até 48 horas.
                </p>
              </div>
            ) : (
              // Form State
              <>
                {/* Header */}
                <div className="px-8 pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(212,175,55,0.3) 100%)' }}
                  >
                    <AlertTriangle size={32} className="text-[#D4AF37]" />
                  </div>
                  
                  <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                    Denunciar Perfil
                  </h2>
                  
                  <p className="text-sm text-white/60">
                    Denunciar perfil de <span className="text-white font-semibold">{profileName}</span>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 pb-8">
                  <div className="mb-6">
                    <label className="block text-sm text-white mb-3" style={{ fontWeight: 600 }}>
                      Motivo da denúncia *
                    </label>
                    <div className="space-y-2">
                      {reasons.map((reason) => (
                        <label
                          key={reason}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all hover:bg-white/5"
                          style={{ 
                            background: selectedReason === reason ? 'rgba(139,30,63,0.15)' : 'rgba(31,31,33,0.5)',
                            border: selectedReason === reason ? '1px solid rgba(139,30,63,0.4)' : '1px solid rgba(139,30,63,0.1)',
                          }}
                        >
                          <input
                            type="radio"
                            name="reason"
                            value={reason}
                            checked={selectedReason === reason}
                            onChange={(e) => setSelectedReason(e.target.value)}
                            className="w-4 h-4 accent-[#8B1E3F]"
                          />
                          <span className="text-sm text-white/80">{reason}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>
                      Detalhes adicionais (opcional)
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Descreva o que aconteceu..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none resize-none"
                      style={{ 
                        background: 'rgba(31,31,33,0.5)',
                        border: '1px solid rgba(139,30,63,0.2)',
                      }}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-3 rounded-xl text-sm text-white/70 border border-white/20 hover:bg-white/5 transition-all"
                      style={{ fontWeight: 600 }}
                    >
                      Cancelar
                    </button>
                    
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_25px_rgba(139,30,63,0.5)]"
                      style={{ 
                        background: 'linear-gradient(135deg, #8B1E3F, #6B1730)',
                        fontWeight: 600,
                      }}
                    >
                      Enviar Denúncia
                    </button>
                  </div>

                  {/* Warning */}
                  <p className="text-xs text-white/40 text-center mt-4">
                    Denúncias falsas podem resultar na suspensão da sua conta.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}