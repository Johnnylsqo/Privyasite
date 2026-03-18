import React, { useState } from 'react';
import { Heart, Star, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GamificationActionsProps {
  profileId: string;
  profileName: string;
  initialLikes?: number;
  initialRating?: number;
  isLiked?: boolean;
  hasReviewed?: boolean;
}

export default function GamificationActions({
  profileId,
  profileName,
  initialLikes = 0,
  initialRating = 0,
  isLiked = false,
  hasReviewed = false,
}: GamificationActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(isLiked);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewed, setReviewed] = useState(hasReviewed);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      setShowLikeAnimation(true);
      setTimeout(() => setShowLikeAnimation(false), 1000);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
    
    // Aqui você enviaria para o backend
    console.log('Like toggled for profile:', profileId);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Por favor, selecione uma avaliação');
      return;
    }

    // Aqui você enviaria para o backend
    console.log({
      profileId,
      rating,
      review: reviewText,
      timestamp: new Date(),
    });

    setReviewed(true);
    setShowReviewModal(false);
    setRating(0);
    setReviewText('');
  };

  return (
    <>
      <div className="flex items-center gap-3">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className="relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
          style={{
            background: liked ? 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(107,23,48,0.2) 100%)' : 'rgba(31,31,33,0.6)',
            border: liked ? '1px solid rgba(139,30,63,0.4)' : '1px solid rgba(139,30,63,0.2)',
          }}
        >
          <Heart
            size={20}
            className={liked ? 'text-[#8B1E3F] fill-[#8B1E3F]' : 'text-white/60'}
          />
          <span className="text-sm text-white" style={{ fontWeight: 600 }}>
            {likes}
          </span>

          {/* Heart Animation */}
          <AnimatePresence>
            {showLikeAnimation && (
              <motion.div
                initial={{ scale: 1, opacity: 1, y: 0 }}
                animate={{ scale: 2, opacity: 0, y: -30 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              >
                <Heart size={20} className="text-[#8B1E3F] fill-[#8B1E3F]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Review Button */}
        <button
          onClick={() => setShowReviewModal(true)}
          disabled={reviewed}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: reviewed ? 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(184,146,42,0.15) 100%)' : 'rgba(31,31,33,0.6)',
            border: reviewed ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(139,30,63,0.2)',
          }}
        >
          <Star
            size={20}
            className={reviewed ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/60'}
          />
          <span className="text-sm text-white" style={{ fontWeight: 600 }}>
            {reviewed ? 'Avaliado' : 'Avaliar'}
          </span>
        </button>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
            onClick={() => setShowReviewModal(false)}
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
              {/* Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, rgba(184,146,42,0.2) 100%)' }}
                >
                  <Star size={32} className="text-[#D4AF37]" />
                </div>

                <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  Avaliar Perfil
                </h2>

                <p className="text-sm text-white/60">
                  Avalie sua experiência com <span className="text-white font-semibold">{profileName}</span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitReview} className="px-8 pb-8">
                {/* Star Rating */}
                <div className="mb-6">
                  <label className="block text-sm text-white mb-3 text-center" style={{ fontWeight: 600 }}>
                    Sua avaliação *
                  </label>
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-all hover:scale-110"
                      >
                        <Star
                          size={36}
                          className={
                            star <= (hoverRating || rating)
                              ? 'text-[#D4AF37] fill-[#D4AF37]'
                              : 'text-white/20'
                          }
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-center text-sm text-white/60 mt-2">
                      {rating === 5 ? 'Excelente!' : rating === 4 ? 'Muito Bom!' : rating === 3 ? 'Bom' : rating === 2 ? 'Regular' : 'Ruim'}
                    </p>
                  )}
                </div>

                {/* Review Text */}
                <div className="mb-6">
                  <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>
                    Comentário (opcional)
                  </label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Compartilhe sua experiência..."
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
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 py-3 rounded-xl text-sm text-white/70 border border-white/20 hover:bg-white/5 transition-all"
                    style={{ fontWeight: 600 }}
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl text-sm text-[#0F0F10] transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    style={{
                      background: 'linear-gradient(135deg, #F2D77D, #D4AF37)',
                      fontWeight: 600,
                    }}
                  >
                    Enviar Avaliação
                  </button>
                </div>

                {/* Info */}
                <p className="text-xs text-white/40 text-center mt-4">
                  Sua avaliação será publicada de forma anônima
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
