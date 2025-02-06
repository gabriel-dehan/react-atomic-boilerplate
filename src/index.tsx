import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, Link } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "@utils/i18n";
import Main from "./pages/Main.tsx";
import Loader from "@components/atoms/Loader/Loader";

// Global styles
import "@assets/styles/global.css";

// Create a new router instance
const router = createRouter({
  routeTree,
  ...{
    defaultPendingComponent: () => {
      return <Loader />;
    },
    defaultNotFoundComponent: () => {
      return (
        <div>
          <p>Not found!</p>
          <Link to="/">Go home</Link>
        </div>
      );
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
const rootElement = document.querySelector("#root") as Element;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <Main router={router} />
    </StrictMode>,
  );
}
