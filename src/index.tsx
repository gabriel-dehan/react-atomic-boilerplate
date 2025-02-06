import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import Main from "./pages/Main.tsx";

// Global styles
import "@assets/styles/global.css";

// Create a new router instance
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    // Infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

// Render the app
const rootElement = document.querySelector("#root") as Element;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <Suspense fallback="loading">
        <Main router={router} />
      </Suspense>
    </StrictMode>,
  );
}
