import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'jz8p75',
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config): void {
      // e2e testing node events setup code
    },
  },
});
