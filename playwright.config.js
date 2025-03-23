import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  use: {
    browserName: 'chromium', 
    headless: false, 
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure', 
    video: 'on',
  },
  reporter: 'html',
});
