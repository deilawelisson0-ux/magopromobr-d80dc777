import { createRoot } from "react-dom/client";
import Index from "./pages/Index.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
const hash = window.location.hash;

if (hash && hash !== "#" && hash !== "#/") {
  // Only load the router (and secondary pages) when a sub-route is requested.
  import("./RouterApp.tsx").then(({ default: RouterApp }) => root.render(<RouterApp />));
} else {
  root.render(<Index />);
}
