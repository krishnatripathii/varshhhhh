import React, { useEffect, useState } from 'react';

export const SkyBackground = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; duration: string; size: string; color: string }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; left: string; top: string; delay: string; duration: string }[]>([]);
  const [satellites, setSatellites] = useState<{ id: number; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate massive amount of twinkling stars for a dense, living sky
    const newStars = Array.from({ length: 1200 }).map((_, i) => {
      const topPercent = Math.random() * 100;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${topPercent}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 4 + 2}s`, // Varied twinkling speeds
        size: `${Math.random() * 2 + 0.5}px`, // Varied sizes
        color: '#ffffff'
      };
    });
    setStars(newStars);

    // Generate fast, random shooting stars all over
    const newShootingStars = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100 + 20}%`, 
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 2 + 2}s`
    }));
    setShootingStars(newShootingStars);

    // Generate slow-moving satellites
    const newSatellites = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 30}s`,
      duration: `${Math.random() * 30 + 40}s` // 40-70 seconds to cross the screen
    }));
    setSatellites(newSatellites);
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
      
      {/* Living Sky Elements: Auroras and Galactic Nebulae */}
      <div className="absolute inset-0 z-[-2] pointer-events-none overflow-hidden">
        {/* Deep pulsing galaxy dust */}
        <div className="absolute top-[5%] left-[10%] w-[40rem] h-[30rem] bg-[#c44536]/30 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />
        <div className="absolute top-[40%] right-[10%] w-[50rem] h-[40rem] bg-[#291a40]/40 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[80%] left-[20%] w-[60rem] h-[40rem] bg-[#583270]/20 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '4s' }} />
        
        {/* Dynamic sweeping Auroras */}
        <div className="absolute top-[30%] left-[-10%] w-[120vw] h-[20vh] bg-gradient-to-r from-transparent via-[#7a2850]/20 to-transparent blur-[80px] animate-aurora mix-blend-screen" />
        <div className="absolute top-[60%] left-[-10%] w-[120vw] h-[15vh] bg-gradient-to-r from-transparent via-[#26143c]/30 to-transparent blur-[80px] animate-aurora mix-blend-screen" style={{ animationDelay: '7s' }} />
      </div>

      {/* Absolute Container for Stars, Shooting Stars, Satellites */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        
        {/* Massive Starfield */}
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
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}

        {/* Slow-moving Satellites */}
        {satellites.map(sat => (
          <div
            key={sat.id}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-satellite shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            style={{
              top: sat.top,
              animationDelay: sat.delay,
              animationDuration: sat.duration
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
              animationDelay: star.delay,
              animationDuration: star.duration
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
