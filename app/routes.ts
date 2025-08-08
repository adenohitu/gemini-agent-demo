import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("user/:username", "routes/user.$username.tsx"),
    route("settings", "routes/settings.tsx"),
  ]),
  layout("layouts/LoginLayout.tsx", [
    route("login", "routes/login.tsx"),
  ]),
] satisfies RouteConfig;
