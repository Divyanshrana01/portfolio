import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// NOTE: StrictMode is intentionally omitted. The 3D character (Character/Scene.tsx)
// sets up Three.js and GSAP imperatively and is not safe under StrictMode. During
// StrictMode's dev only double mount, the async model load adds a second character
// (the avatar overlaps itself) and registers duplicate ScrollTriggers (layout glitches).
// Removing it makes dev match the production build, which already mounts effects once.
createRoot(document.getElementById("root")!).render(<App />);
