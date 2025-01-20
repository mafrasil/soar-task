import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { PencilIcon } from "lucide-react";
import { Tabs } from "~/components/ui/tabs";
import { Preferences } from "./+components/preferences";
import { Security } from "./+components/security";
import type { Route } from "./+types/settings";
import { EditProfile } from "./+components/edit-profile";

export const handle = {
  title: "Settings",
};

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function Settings() {
  return (
    <div className="p-4 sm:p-6 xl:p-10">
      <Card className="p-4 sm:p-6">
        <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
          <Tabs.List className="border-b border-slate-200 w-full flex scrollbar-none overflow-x-auto">
            <Tabs.Trigger value="profile" className="whitespace-nowrap">
              Edit Profile
            </Tabs.Trigger>
            <Tabs.Trigger value="preferences" className="whitespace-nowrap">
              Preferences
            </Tabs.Trigger>
            <Tabs.Trigger value="security" className="whitespace-nowrap">
              Security
            </Tabs.Trigger>
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
      </Card>
    </div>
  );
}
