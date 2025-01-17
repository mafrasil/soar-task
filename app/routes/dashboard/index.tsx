import type { Route } from "./+types/dashboard";

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function DashboardIndex() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
