import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'shared',
          root: './shared',
          environment: 'node',
          include: ['src/**/*.test.ts'],
        },
      },
      {
        test: {
          name: 'backend',
          root: './backend',
          environment: 'node',
          include: ['src/**/*.test.ts'],
        },
      },
      './frontend/vitest.config.ts',
    ],
  },
})
