import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Enables globals for your tests
    environment: 'happy-dom', // Use 'jsdom' or 'happy-dom' based on your project needs
    // Use "environmentMatchGlobs" for file-based environment configuration
    environmentMatchGlobs: [
      ['**/*.test.ts', 'jsdom'], // Example: Apply jsdom to .test.ts files
      ['**/*.spec.ts', 'happy-dom'] // Example: Apply happy-dom to .spec.ts files
    ]
  }
})
