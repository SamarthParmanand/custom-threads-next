'use client';

import { createContext, useContext } from "react";

export type TShirtType = {
    color: string;
    isLogoTexture: boolean;
    isFullTexture: boolean;
    logoDecal: string;
    fullDecal: string;
  }

const tshirtContext = createContext({
  color: "#222",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default tshirtContext;

export const TShirtContext = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: TShirtType;
}) => {
  return (
    <tshirtContext.Provider value={initialState}>
      {children}
    </tshirtContext.Provider>
  );
};

