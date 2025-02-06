import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@pages/home/Home";

export const Route = createFileRoute("/home")({
  component: Home,
});
