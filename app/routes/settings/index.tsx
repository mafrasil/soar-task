import { Tabs } from "~/components/ui/tabs";
import { EditProfile } from "./+components/edit-profile";
import { Preferences } from "./+components/preferences";
import { Security } from "./+components/security";
import type { Route } from "./+types/settings";

export const handle = {
  title: "Settings",
};

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function SettingsIndex() {
  return (
    <div className="p-10">
      <Tabs defaultValue="profile" className="space-y-6">
        <Tabs.List>
          <Tabs.Trigger value="profile">Edit Profile</Tabs.Trigger>
          <Tabs.Trigger value="preferences">Preferences</Tabs.Trigger>
          <Tabs.Trigger value="security">Security</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="profile">
          <EditProfile />
        </Tabs.Content>
        <Tabs.Content value="preferences">
          <Preferences />
        </Tabs.Content>
        <Tabs.Content value="security">
          <Security />
        </Tabs.Content>
      </Tabs>
    </div>
  );
}
