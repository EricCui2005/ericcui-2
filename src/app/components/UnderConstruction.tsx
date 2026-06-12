import React from "react";

export default function UnderConstruction() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-gray-900/90 px-10 py-8 shadow-2xl border border-gray-700 backdrop-blur-sm">
        <div className="construction-tape w-full rounded" />
        <span className="text-5xl animate-bounce">🚧</span>
        <h2 className="text-2xl font-bold text-yellow-400 font-mono">
          Under Construction
        </h2>
        <p className="text-gray-300 text-sm">
          This site is getting a revamp — check back soon!
        </p>
        <div className="construction-tape w-full rounded" />
      </div>
    </div>
  );
}
