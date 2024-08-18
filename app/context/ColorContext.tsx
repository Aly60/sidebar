// app/context/ColorContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ColorContextType = {
  buttonColor: string;
  setColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [buttonColor, setButtonColor] = useState<string>('bg-gray-500');

  return (
    <ColorContext.Provider value={{ buttonColor, setColor: setButtonColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};
