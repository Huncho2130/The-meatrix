"use client";

import { useState } from "react";

interface Props {
  phone?: string;
  message?: string;
}

export default function WhatsAppButton({
  phone = "254789609951",
  message = "Hi, I'd like your price list and available cuts today",
}: Props) {
  const [hovered, setHovered] = useState(false);

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50"
    >
      <div
        className={`
          flex items-center gap-2 px-4 py-3 rounded-full
          bg-neutral-900/80 backdrop-blur-md text-white
          shadow-lg border border-white/10
          transition-all duration-200
          ${hovered ? "scale-105 pr-5" : "scale-100"}
        `}
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 0C7.163 0 0 6.955 0 15.533c0 2.737.73 5.402 2.119 7.75L0 32l8.967-2.341A16.13 16.13 0 0 0 16 31.066c8.837 0 16-6.955 16-15.533S24.837 0 16 0z" />
        </svg>

        {hovered && (
          <span className="text-sm font-medium whitespace-nowrap">
            Order on WhatsApp
          </span>
        )}
      </div>
    </a>
  );
}
