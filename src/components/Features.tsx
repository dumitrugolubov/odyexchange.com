import React from 'react';
import { Shield, Zap, Trophy, Wallet } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Why Choose Odyssey Exchange?</h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience the next evolution in meme cryptocurrency trading
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Shield className="w-12 h-12" />,
              title: "Bank-Grade Security",
              description: "Your assets are protected by military-grade encryption and multi-signature wallets"
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Lightning Fast Trades",
              description: "Execute trades in milliseconds with our high-performance matching engine"
            },
            {
              icon: <Trophy className="w-12 h-12" />,
              title: "Exclusive Listings",
              description: "Get early access to the hottest new meme coins before they moon"
            },
            {
              icon: <Wallet className="w-12 h-12" />,
              title: "Multi-Wallet Support",
              description: "Connect with MetaMask, WalletConnect, and more"
            }
          ].map((feature, index) => (
            <div key={index} className="relative p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors">
              <div className="text-purple-400">{feature.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}