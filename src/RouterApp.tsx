import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Gerador = lazy(() => import("./pages/Gerador.tsx"));

const RouterApp = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/gerador"
        element={
          <Suspense fallback={null}>
            <Gerador />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </HashRouter>
);

export default RouterApp;
