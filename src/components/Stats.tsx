import React from 'react';

export default function Stats() {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "$2B+", label: "24h Trading Volume" },
            { value: "1M+", label: "Active Traders" },
            { value: "150+", label: "Meme Coins Listed" },
            { value: "<0.1s", label: "Trade Execution" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-400">{stat.value}</div>
              <div className="mt-2 text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}