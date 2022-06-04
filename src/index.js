import { StrictMode } from "react";
import ReactDOM from "react-dom";
import create from "zustand";

import App from "./App";

export const frostings = [
  { id: 1, name: "Chocolate", color: "#190C03" },
  { id: 2, name: "Vannila", color: "white" },
  { id: 3, name: "Mint", color: "#55fdc4" },
  { id: 4, name: "None" }
];

export const useFrosting = create((set) => ({
  frosting: frostings[0],
  setFrosting: (val) => set({ frosting: frostings[parseInt(val, 10) - 1] })
}));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
