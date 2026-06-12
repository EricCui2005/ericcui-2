import React from "react";

const LandingSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative text-center px-4">
        <p className="text-muted text-lg mb-4">Hi, I&apos;m</p>
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent pb-2">
          Eric Cui
        </h1>
        <p className="text-xl text-muted mt-4">CS &amp; EE at Stanford 🌲</p>
      </div>

      <div className="absolute bottom-10 text-muted text-sm animate-bounce">
        ↓ scroll
      </div>
    </section>
  );
};

export default LandingSection;
