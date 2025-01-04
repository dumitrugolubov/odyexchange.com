import React from 'react';
import { Rocket, TrendingUp, Coins, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Trade Memes.
            </span>
            <span className="block">Make Dreams.</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to Odyssey Exchange - the world's first meme-focused cryptocurrency exchange.
            Trade 150+ meme coins with zero commission and join the future of crypto culture.
          </p>
          
          <a 
            href="https://ody.lol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Trading Memes
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Coins className="w-8 h-8" />,
              title: "0% Spot Fees",
              description: "Trade your favorite meme coins without any commission"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "10% Liquidation Rebate",
              description: "Get rewarded even when the market moves against you"
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "150+ Meme Coins",
              description: "Access the largest selection of meme cryptocurrencies"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "50% Commission Share",
              description: "Earn big through our partnership program"
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-purple-400">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}