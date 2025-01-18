import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

export function Security() {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Change Password</h3>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Current Password</label>
            <Input type="password" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">New Password</label>
            <Input type="password" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Confirm New Password</label>
            <Input type="password" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Update Password</Button>
        </div>
      </form>
    </Card>
  );
}
