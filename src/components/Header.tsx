import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Odyssey Exchange</div>
        </div>
      </nav>
    </header>
  );
}