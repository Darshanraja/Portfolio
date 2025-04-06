import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add this to enhance the global styles
document.documentElement.style.scrollBehavior = "smooth";

createRoot(document.getElementById("root")!).render(<App />);
