import React from 'react';

const MagicStars = () => {
  // Generar estrellas aleatorias
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-shimmer"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-magic-gold via-magic-blue to-magic-green rounded-full shadow-glow" />
        </div>
      ))}
    </div>
  );
};

export default MagicStars;
