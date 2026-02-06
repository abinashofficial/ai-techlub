import React from "react";
import { useUIEffects } from "../hooks/useUIEffects";

export const UIEffectsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useUIEffects(); // now safe, inside BrowserRouter
  return <>{children}</>;
};
