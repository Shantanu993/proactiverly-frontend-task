import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WellnessApplication from "./WellnessApplication.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WellnessApplication />
  </StrictMode>
);
