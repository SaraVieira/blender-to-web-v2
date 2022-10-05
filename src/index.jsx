import { StrictMode } from "react";
import create from "zustand";

import App from "./App";

export const frostings = [
  { id: 1, name: "Chocolate", color: "#190C03" },
  { id: 2, name: "Vannila", color: "white" },
  { id: 3, name: "Mint", color: "#55fdc4" },
  { id: 4, name: "None" },
];

export const useFrosting = create((set) => ({
  frosting: frostings[0],
  setFrosting: (val) => set({ frosting: frostings[parseInt(val, 10) - 1] }),
}));

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
