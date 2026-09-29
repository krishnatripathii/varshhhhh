import React, { useEffect, useState } from 'react';

export const SkyBackground = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; duration: string; size: string; color: string; isDeepSpace: boolean }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; left: string; top: string; delay: string }[]>([]);
  const [birds, setBirds] = useState<{ id: number; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate stars for the entire document height
    const newStars = Array.from({ length: 400 }).map((_, i) => {
      const topPercent = Math.random() * 100;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${topPercent}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${Math.random() * 3 + 2}s`,
        size: `${Math.random() * 2 + 0.5}px`,
        color: topPercent < 30 ? '#ffecd2' : '#ffffff', // warmer near sunset
        isDeepSpace: topPercent > 60
      };
    });
    setStars(newStars);

    // Generate shooting stars (ONLY in the lower part of the document - Deep Space)
    const newShootingStars = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 20}%`, 
      top: `${Math.random() * 30 + 70}%`, // 70% to 100% of document height
      delay: `${Math.random() * 20}s` // Slower interval
    }));
    setShootingStars(newShootingStars);

    // Generate flying birds (Middle section)
    const newBirds = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 20 + 35}%`, // 35% to 55%
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 20 + 30}s` // very slow horizontal flying
    }));
    setBirds(newBirds);

  }, []);

  return (
    <>
      {/* Absolute Full-height Gradient Background */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 z-[-2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #de5d36 0%, #7a2850 20%, #26143c 50%, #050508 100%)'
        }}
      />
      
      {/* Galactic Nebulae / Subtle Background Elements - Positioned absolutely along the scroll */}
      <div className="absolute top-[5%] left-[10%] w-[40rem] h-[30rem] bg-[#c44536]/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow mix-blend-screen" />
      <div className="absolute top-[40%] right-[10%] w-[50rem] h-[40rem] bg-[#291a40]/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[80%] left-[20%] w-[60rem] h-[40rem] bg-[#583270]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow mix-blend-screen" style={{ animationDelay: '4s' }} />

      {/* Absolute Container for Scrolling Elements */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        
        {/* Subtle Clouds at Top */}
        <div className="absolute top-[2%] left-[-10%] text-white/5 animate-cloud-slow w-[40rem] h-32 blur-3xl bg-[#ffecd2] rounded-[100%]" style={{ animationDuration: '80s' }} />
        <div className="absolute top-[10%] left-[40%] text-white/5 animate-cloud-med w-[30rem] h-48 blur-3xl bg-[#ffecd2] rounded-[100%]" style={{ animationDuration: '100s' }} />

        {/* Distant Mountains in Middle (Fixed visually or just absolute) */}
        {/* Since it's absolute, they will scroll past. Let's make them faint silhouettes on the edges */}
        <div className="absolute top-[45%] left-0 w-[30vw] h-[20vh] bg-gradient-to-tr from-[#1a0b2e]/40 to-transparent blur-md rounded-tr-[100%] pointer-events-none" />
        <div className="absolute top-[50%] right-0 w-[40vw] h-[25vh] bg-gradient-to-tl from-[#1a0b2e]/40 to-transparent blur-md rounded-tl-[100%] pointer-events-none" />

        {/* Flocks of Birds */}
        {birds.map(bird => (
          <div
            key={bird.id}
            className="absolute opacity-40"
            style={{
              top: bird.top,
              left: '-10%',
              animation: `cloud ${bird.duration} linear infinite`,
              animationDelay: bird.delay
            }}
          >
            {/* Simple SVG Bird */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffecd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c4-4 8-4 10 0 2-4 6-4 10 0" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffecd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-2 left-4">
              <path d="M2 12c4-4 8-4 10 0 2-4 6-4 10 0" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffecd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-2 left-6">
              <path d="M2 12c4-4 8-4 10 0 2-4 6-4 10 0" />
            </svg>
          </div>
        ))}

        {/* Stars */}
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

        {/* Shooting Stars (Slowed down, less frequent, only at bottom) */}
        {shootingStars.map(star => (
          <div
            key={star.id}
            className="absolute animate-shooting"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: '6s' // slower flight
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
