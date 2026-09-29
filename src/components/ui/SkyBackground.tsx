import React, { useEffect, useState } from 'react';

export const SkyBackground = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; duration: string; size: string; color: string }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; left: string; top: string; delay: string }[]>([]);

  useEffect(() => {
    // Generate twinkling stars
    const newStars = Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 3 + 2}s`,
      size: `${Math.random() * 2 + 0.5}px`,
      color: Math.random() > 0.8 ? '#ffecd2' : '#ffffff' // some warm stars
    }));
    setStars(newStars);

    // Generate shooting stars
    const newShootingStars = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100 + 20}%`, // Start slightly right to shoot left
      top: `${Math.random() * 50}%`, // Mostly in top half
      delay: `${Math.random() * 15}s`
    }));
    setShootingStars(newShootingStars);
  }, []);

  return (
    <>
      {/* Absolute Full-height Gradient Background (Miami Sunset -> Deep Purple -> Abyss) */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 z-[-2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #de5d36 0%, #7a2850 15%, #26143c 40%, #050508 100%)'
        }}
      />
      
      {/* Galactic Nebulae / Subtle Background Elements */}
      <div className="absolute top-[10%] left-[10%] w-[40rem] h-[30rem] bg-[#c44536]/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow mix-blend-screen" />
      <div className="absolute top-[30%] right-[10%] w-[50rem] h-[40rem] bg-[#291a40]/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[20%] w-[60rem] h-[40rem] bg-[#583270]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow mix-blend-screen" style={{ animationDelay: '4s' }} />

      {/* Fixed Stars and Shooting Stars Container */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: Math.random() * 0.6 + 0.2
            }}
          />
        ))}

        {/* Shooting Stars */}
        {shootingStars.map(star => (
          <div
            key={star.id}
            className="absolute animate-shooting"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay
            }}
          >
            <div className="shooting-star-tail"></div>
            <div className="shooting-star-head"></div>
          </div>
        ))}
      </div>
    </>
  );
};
