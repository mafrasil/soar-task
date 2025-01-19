import { PencilIcon } from "lucide-react";
import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { useUserStore } from "~/stores/user.store";
import { api } from "~/services/api.service";
import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileFormData } from "~/schemas/profile.schema";

export function EditProfile() {
  const user = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      dateOfBirth: user?.dateOfBirth,
      presentAddress: user?.presentAddress,
      permanentAddress: user?.permanentAddress,
      city: user?.city,
      postalCode: user?.postalCode,
      country: user?.country,
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      await api.updateProfile(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset any previous errors
    setUploadError(null);

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload an image file");
      return;
    }

    // Validate file size (e.g., max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      setUploadError("Image must be less than 5MB");
      return;
    }

    setIsLoading(true);
    try {
      await api.uploadAvatar(file);
    } catch (error) {
      setUploadError("Failed to upload image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-start gap-8">
      {/* Profile Photo */}
      <div className="relative w-fit">
        <Avatar src={user?.avatar} alt="Profile" className="h-24 w-24" />
        <Button
          variant="ghost"
          size="sm"
          className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-white shadow cursor-pointer"
          disabled={isLoading}
          onClick={handleEditClick}
        >
          <PencilIcon className="h-4 w-4" />
        </Button>
        <input
          ref={fileInputRef}
          id="avatar-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        {uploadError && (
          <p className="text-sm text-red-500 mt-2 absolute -bottom-8 whitespace-nowrap">
            {uploadError}
          </p>
        )}
      </div>

      {/* Form Content */}
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Your Name</label>
              <Input variant="outline" {...register("name")} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">User Name</label>
              <Input variant="outline" {...register("username")} />
              {errors.username && (
                <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Email</label>
              <Input variant="outline" {...register("email")} type="email" />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Password</label>
              <Input variant="outline" type="password" value="**********" disabled />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Date of Birth</label>
              <Input variant="outline" {...register("dateOfBirth")} placeholder="YYYY-MM-DD" />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Present Address</label>
              <Input variant="outline" {...register("presentAddress")} />
              {errors.presentAddress && (
                <p className="text-sm text-red-500 mt-1">{errors.presentAddress.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Permanent Address</label>
              <Input variant="outline" {...register("permanentAddress")} />
              {errors.permanentAddress && (
                <p className="text-sm text-red-500 mt-1">{errors.permanentAddress.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">City</label>
              <Input variant="outline" {...register("city")} />
              {errors.city && <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Postal Code</label>
              <Input variant="outline" {...register("postalCode")} />
              {errors.postalCode && (
                <p className="text-sm text-red-500 mt-1">{errors.postalCode.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Country</label>
              <Input variant="outline" {...register("country")} />
              {errors.country && (
                <p className="text-sm text-red-500 mt-1">{errors.country.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
