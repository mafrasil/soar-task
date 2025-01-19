import { create } from "zustand";

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
    dateOfBirth: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
  } | null;
  isAuthenticated: boolean;
  setUser: (user: UserState["user"]) => void;
  updateUser: (data: Partial<NonNullable<UserState["user"]>>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: "1",
    name: "Christina Morillo",
    email: "christina@example.com",
    username: "christina",
    avatar: "/photos/pexels-christina-morillo-1181690.png",
    dateOfBirth: "1990-01-01",
    presentAddress: "123 Main St",
    permanentAddress: "123 Main St",
    city: "New York",
    postalCode: "10001",
    country: "United States",
  },
  isAuthenticated: true,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    })),
}));
