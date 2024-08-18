// components/ColorButtons.tsx
import React from 'react';
import { Button } from './button';
import { useColor } from '../app/context/ColorContext';

const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
];

export default function ColorButtons() {
  const { setColor } = useColor();

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <Button key={color} onClick={() => setColor(color)}>
          {color.replace('bg-', '').replace('-500', '')}
        </Button>
      ))}
    </div>
  );
}
