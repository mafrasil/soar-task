import type { Route } from "./+types/settings";

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function SettingsIndex() {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}
