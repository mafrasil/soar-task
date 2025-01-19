import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers and underscores"),
  email: z.string().email("Please enter a valid email address"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format"),
  presentAddress: z.string().min(5, "Address must be at least 5 characters"),
  permanentAddress: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().min(3, "Postal code must be at least 3 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
