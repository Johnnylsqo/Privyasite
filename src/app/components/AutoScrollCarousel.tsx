import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AutoScrollCarouselProps {
  children: React.ReactNode;
  speed?: number; // pixels per frame
  gap?: string;
  className?: string;
  showControls?: boolean;
  pauseOnHover?: boolean;
}

export function AutoScrollCarousel({
  children,
  speed = 0.4,
  gap = 'gap-4',
  className = '',
  showControls = true,
  pauseOnHover = true,
}: AutoScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const manualTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = () => {
      if (!pausedRef.current && container) {
        container.scrollLeft += speed;
        // Loop back when reaching end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
          container.scrollLeft = 0;
        }
        updateScrollState();
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animRef.current);
  }, [speed, updateScrollState]);

  // Pause on hover
  useEffect(() => {
    if (!pauseOnHover) return;
    const container = scrollRef.current;
    if (!container) return;

    const enter = () => { pausedRef.current = true; };
    const leave = () => { pausedRef.current = false; };

    container.addEventListener('mouseenter', enter);
    container.addEventListener('mouseleave', leave);
    container.addEventListener('touchstart', enter, { passive: true });
    container.addEventListener('touchend', leave);

    return () => {
      container.removeEventListener('mouseenter', enter);
      container.removeEventListener('mouseleave', leave);
      container.removeEventListener('touchstart', enter);
      container.removeEventListener('touchend', leave);
    };
  }, [pauseOnHover]);

  const scrollManual = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    // Pause auto-scroll during manual interaction
    pausedRef.current = true;
    clearTimeout(manualTimeoutRef.current);
    el.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
    // Resume auto-scroll after 3s
    manualTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 3000);
    setTimeout(updateScrollState, 350);
  };

  // Handle manual scroll/swipe
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let touching = false;

    const onTouchStart = () => {
      touching = true;
      pausedRef.current = true;
      clearTimeout(manualTimeoutRef.current);
    };
    const onTouchEnd = () => {
      touching = false;
      manualTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 3000);
    };
    const onWheel = () => {
      pausedRef.current = true;
      clearTimeout(manualTimeoutRef.current);
      manualTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 3000);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('scroll', updateScrollState, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', updateScrollState);
      clearTimeout(manualTimeoutRef.current);
    };
  }, [updateScrollState]);

  return (
    <div className="relative group/carousel">
      <div
        ref={scrollRef}
        className={`flex ${gap} overflow-x-auto pb-2 snap-x snap-mandatory ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .group\\/carousel > div:first-child::-webkit-scrollbar { display: none; }
        `}} />
        {children}
      </div>

      {showControls && (
        <>
          <button
            onClick={() => scrollManual('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
              canScrollLeft ? 'opacity-0 group-hover/carousel:opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              background: 'rgba(15,15,16,0.92)',
              border: '1px solid rgba(139,30,63,0.3)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}
          >
            <ChevronLeft size={18} className="text-[#D4AF37]" />
          </button>
          <button
            onClick={() => scrollManual('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
              canScrollRight ? 'opacity-0 group-hover/carousel:opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              background: 'rgba(15,15,16,0.92)',
              border: '1px solid rgba(139,30,63,0.3)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}
          >
            <ChevronRight size={18} className="text-[#D4AF37]" />
          </button>
        </>
      )}
    </div>
  );
}
