"use client";

import React, { useState } from "react";

const LandingSection = () => {
  const [spot, setSpot] = useState({ x: -1000, y: -1000 });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setSpot({ x: -1000, y: -1000 })}
    >
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-blue-600/20 rounded-full blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${spot.x}px ${spot.y}px, rgba(139, 92, 246, 0.18), rgba(59, 130, 246, 0.08) 45%, transparent 70%)`,
        }}
      />

      <div className="relative text-center px-4 pointer-events-none">
        <p className="text-muted text-lg mb-4">Hi, I&apos;m</p>
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent pb-2">
          Eric Cui
        </h1>
        <p className="text-xl text-muted mt-4">CS &amp; EE at Stanford</p>
      </div>

      <div className="absolute bottom-10 text-muted text-sm animate-bounce">
        ↓ scroll
      </div>
    </section>
  );
};

export default LandingSection;
