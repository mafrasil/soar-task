import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("./routes/_layout.tsx", [
    route("/", "./routes/dashboard/index.tsx"),
    route("settings", "./routes/settings/index.tsx"),
    route("*", "./routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
