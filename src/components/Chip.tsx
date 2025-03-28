import React from 'react';

interface ChipProps {
  text: string;
  type?: 'light' | 'dark';
}

export function Chip({ text, type = 'light'}: ChipProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-normal font-code
      ${type && type === 'dark' ? 'bg-white/[.05] text-beige-100' : 'bg-orange-100 text-orange-600'}`}
    >
      {text}
    </span>
  );
}
