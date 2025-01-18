import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { PencilIcon } from "lucide-react";

type ProfileFormData = {
  name: string;
  username: string;
  email: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  postalCode: string;
  city: string;
  country: string;
};

export function EditProfile() {
  const { register, handleSubmit } = useForm<ProfileFormData>({
    defaultValues: {
      name: "Charlene Reed",
      username: "Charlene Reed",
      email: "charlenereed@gmail.com",
      dateOfBirth: "25 January 1990",
      presentAddress: "San Jose, California, USA",
      permanentAddress: "San Jose, California, USA",
      postalCode: "45962",
      city: "San Jose",
      country: "USA",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Profile Photo */}
        <div className="relative w-fit">
          <Avatar src="/avatars/charlene.jpg" alt="Profile" className="h-24 w-24" />
          <Button className="absolute bottom-0 right-0 rounded-full">
            <PencilIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Your Name</label>
            <Input {...register("name")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">User Name</label>
            <Input {...register("username")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Email</label>
            <Input {...register("email")} type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Password</label>
            <Input type="password" value="**********" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Date of Birth</label>
            <Input {...register("dateOfBirth")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Present Address</label>
            <Input {...register("presentAddress")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Permanent Address</label>
            <Input {...register("permanentAddress")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">City</label>
            <Input {...register("city")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Postal Code</label>
            <Input {...register("postalCode")} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Country</label>
            <Input {...register("country")} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
}
