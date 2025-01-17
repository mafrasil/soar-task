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
    size === "sm" ? "w-8 h-8 text-xs" : size === "md" ? "w-10 h-10 text-sm" : "w-12 h-12 text-base";

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
