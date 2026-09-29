import React, { useEffect, useState } from 'react';

export const SkyBackground = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    // We create stars that will be distributed over the entire document height.
    // However, since we might not know the exact document height here easily, 
    // we use `vh` units up to say 1000vh or we just fix the stars to the viewport.
    // If they are fixed to the viewport, the stars stay still while scrolling. This is usually more aesthetic.
    // The gradient itself can be absolute (full document height) while stars are fixed.
    const newStars = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 3 + 2}s`,
      size: `${Math.random() * 2 + 1}px`
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      {/* Absolute Full-height Gradient Background */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 z-[-2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #ff8a76 0%, #583270 20%, #1a1c2c 50%, #030510 100%)'
        }}
      />
      
      {/* Fixed Stars and Clouds Container */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}

        {/* Floating Clouds */}
        <div className="absolute top-[10%] left-[-20%] text-white/5 animate-cloud-slow w-96 h-32 blur-3xl bg-white rounded-[100%]" />
        <div className="absolute top-[30%] left-[-30%] text-white/5 animate-cloud-med w-[30rem] h-48 blur-3xl bg-white rounded-[100%]" />
        <div className="absolute top-[60%] left-[-10%] text-white/5 animate-cloud-slow w-[40rem] h-64 blur-3xl bg-white/10 rounded-[100%]" />
      </div>
    </>
  );
};
