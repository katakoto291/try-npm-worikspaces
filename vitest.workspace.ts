import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      name: "shared",
      root: "./shared",
      environment: "node",
      include: ["src/**/*.test.ts"]
    }
  },
  {
    test: {
      name: "backend",
      root: "./backend",
      environment: "node",
      include: ["src/**/*.test.ts"]
    }
  },
  "./frontend/vitest.config.ts"
]);
