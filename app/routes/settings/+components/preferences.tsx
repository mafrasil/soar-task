import { Card } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";

export function Preferences() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Email Notifications</h3>
            <p className="text-sm text-slate-500">Receive updates about your account activity</p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Push Notifications</h3>
            <p className="text-sm text-slate-500">Get notified about new transactions</p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-slate-500">Toggle dark mode theme</p>
          </div>
          <Switch />
        </div>
      </div>
    </Card>
  );
}
