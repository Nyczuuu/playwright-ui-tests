// playwright.config.js
module.exports = {
  testDir: './tests',  // Ścieżka do folderu z testami
  timeout: 30000,      // Domyślny czas oczekiwania na test
  retries: 2,          // Liczba prób powtórzenia testu w przypadku błędu
  workers: 2,          // Liczba równoczesnych procesów
  use: {
    headless: true,    // Uruchamianie testów w trybie bez GUI (headless)
    viewport: { width: 1280, height: 720 },  // Rozdzielczość ekranu
    video: 'on-first-retry',  // Nagrywanie wideo przy pierwszej próbie błędu
    screenshot: 'only-on-failure',  // Zrzuty ekranu tylko przy błędach
  },
};
