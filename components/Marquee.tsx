
import React from 'react';

interface MarqueeProps {
  onSelect: (id: string) => void;
}

const Marquee: React.FC<MarqueeProps> = ({ onSelect }) => {
  const items = [
    { label: "Sobre Mim", id: "sobre" },
    { label: "Prova Visual", id: "galeria" },
    { label: "Harmonização de Arte", id: "harmonizacao" },
    { label: "Onde nos Encontrar", id: "local" },
    { label: "Contato", id: "contato" },
    { label: "Feedback", id: "feedback" },
  ];

  // Doubled items for seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap flex select-none">
      <div className="animate-marquee flex gap-12 items-center">
        {displayItems.map((item, i) => (
          <button
            key={i}
            onClick={() => onSelect(item.id)}
            className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-emerald-400 transition cursor-pointer px-4"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
