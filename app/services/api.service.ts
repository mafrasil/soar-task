import { useUserStore } from "~/stores/user.store";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async updateProfile(
    data: Partial<NonNullable<ReturnType<typeof useUserStore.getState>["user"]>>
  ) {
    // Simulate API call
    await delay(1000);

    // Update store
    useUserStore.getState().updateUser(data);

    return { success: true };
  },

  async uploadAvatar(file: File) {
    // Simulate API call
    await delay(1000);

    // Create object URL (in real app, this would be a server URL)
    const avatarUrl = URL.createObjectURL(file);
    useUserStore.getState().updateUser({ avatar: avatarUrl });

    return { success: true };
  },
};
