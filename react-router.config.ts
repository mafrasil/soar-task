import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false, // Disable SSR since this is a SPA
  async buildEnd({ buildManifest }) {
    // Optional
  },
} satisfies Config;
