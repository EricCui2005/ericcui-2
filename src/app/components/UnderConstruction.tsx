import React from "react";

export default function UnderConstruction() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-violet-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-blue-600/20 rounded-full blur-3xl animate-blob-delayed" />
      <div className="relative flex flex-col items-center gap-5 rounded-2xl border border-edge bg-surface/90 px-10 py-10 shadow-[0_0_48px_rgba(139,92,246,0.25)] backdrop-blur-md max-w-md text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
          status
        </span>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Under Construction
        </h2>
        <p className="text-muted text-sm leading-relaxed">
          This site is getting a revamp. Check back soon for the new look.
        </p>
        <div className="flex gap-1.5 mt-1">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span
            className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
