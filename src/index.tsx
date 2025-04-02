import Loader from "@components/atoms/Loader/Loader";
import Main from "@pages/Main.tsx";
import NotFound from "@pages/NotFound/NotFound";
import { createRouter } from "@tanstack/react-router";
import "@utils/i18n";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";

// Global styles
import "@assets/styles/global.css";
import "@assets/styles/theme.css";

// Create a new router instance
const router = createRouter({
  routeTree,
  ...{
    defaultPendingComponent: () => {
      return <Loader />;
    },
    defaultNotFoundComponent: () => {
      return <NotFound />;
    },
  },
});
declare module "@tanstack/react-router" {
  interface Register {
    // Infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

// Render the app
const rootElement = document.querySelector("#app") as Element;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <Main router={router} />
    </StrictMode>
  );
}
