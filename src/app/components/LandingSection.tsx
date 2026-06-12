import React from "react";

const LandingSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center grid-bg relative"
    >
      <div className="font-mono">
        <p className="text-muted text-lg mb-3">
          <span className="text-accent-dim">$</span> whoami
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-foreground flex items-center">
          <span className="typing">Eric Cui</span>
          <span className="cursor-blink ml-1">&nbsp;</span>
        </h1>
        <p className="text-xl text-muted mt-4">
          <span className="text-accent-dim">{"//"}</span> CS &amp; EE at
          Stanford <span className="text-accent">🌲</span>
        </p>
      </div>

      <div className="absolute bottom-10 font-mono text-muted text-sm animate-bounce">
        ↓ scroll
      </div>
    </section>
  );
};

export default LandingSection;
