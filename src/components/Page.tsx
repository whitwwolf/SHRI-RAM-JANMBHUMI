import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface PageProps {
  number: number;
  children: React.ReactNode;
  isCover?: boolean;
  isBackCover?: boolean;
}

const Particles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 4 + 2}px`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ number, children, isCover, isBackCover }, ref) => {
    return (
      <div
        className={`page bg-[#fdfbf7] shadow-inner overflow-hidden relative ${
          isCover || isBackCover ? 'bg-orange-50 text-orange-900' : ''
        }`}
        ref={ref}
        style={{
          border: '1px solid #e5e5e5',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
        }}
      >
        {/* Spine shadow */}
        <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-black/30 via-black/5 to-transparent pointer-events-none z-20" />
        
        {/* Particles for cover pages */}
        {(isCover || isBackCover) && <Particles />}
        
        {/* Page Content */}
        <div className="h-full w-full p-8 flex flex-col relative z-10">
          {children}
          
          {/* Page Number */}
          {!isCover && !isBackCover && (
            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400 font-serif">
              - {number} -
            </div>
          )}
        </div>
      </div>
    );
  }
);

Page.displayName = 'Page';
