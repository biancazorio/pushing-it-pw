import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Carpeta donde se encuentran los tests
  use: {
    browserName: 'chromium', // Puede ser 'firefox' o 'webkit'
    headless: false, // Cambia a true si quieres ejecución en segundo plano
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure', // Captura pantallas solo en fallos
    video: 'retain-on-failure', // Guarda video si la prueba falla
  },
  reporter: 'html',
});
