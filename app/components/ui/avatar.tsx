import { cn } from "~/lib/utils";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const name = alt.charAt(0);
  const sizeStyles =
    size === "sm" ? "size-8 text-xs" : size === "md" ? "size-12 text-sm" : "size-14 text-base";

  const baseStyles = cn("rounded-full", sizeStyles, className);

  if (!src) {
    return (
      <div className={cn(baseStyles, "bg-gray-200 flex items-center justify-center text-gray-600")}>
        {name}
      </div>
    );
  }

  return (
    <div className={baseStyles}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
        onError={(e) =>
          e.currentTarget.parentElement?.classList.add(
            "bg-gray-200",
            "flex",
            "items-center",
            "justify-center",
            "text-gray-600"
          )
        }
      />
    </div>
  );
}
