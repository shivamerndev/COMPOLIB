import React from 'react';
import { Code2, Package, Play } from 'lucide-react';

export default function ShowcaseCards() {
    
  const cards = [
    {
      id: 1,
      icon: Code2,
      title: 'Clean JSX Code',
      description: 'Copy production-ready JSX directly into your project — zero boilerplate.',
    },
    {
      id: 2,
      icon: Package,
      title: 'NPM Library',
      description: 'Import VirtualUI components with a simple npm install command.',
    },
    {
      id: 3,
      icon: Play,
      title: 'Live Preview',
      description: 'Instantly preview AI-generated components before exporting your code.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-slate-700 transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-teal-900/40 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-teal-400" strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}