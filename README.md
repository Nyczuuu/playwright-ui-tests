# playwright-ui-tests
Automated tests for Playwright UI
# Playwright UI Tests – Projekt Demonstracyjny

Ten projekt prezentuje kompletną konfigurację automatycznych testów end‑to‑end z wykorzystaniem **Playwright**, **Page Object Model** oraz **CI/CD w GitHub Actions**.

## 🚀 Cel projektu

Celem jest automatyczne testowanie procesów logowania oraz funkcjonalności produktowych na przykładowej aplikacji webowej. Projekt jest przygotowany tak, aby wyglądał profesjonalnie w portfolio – z pełną automatyzacją i integracją z ciągłą weryfikacją jakości.

---

## 📁 Struktura projektu

```
playwright-ui-tests/
├─ pages/               # Page Object Model
│  ├─ LoginPage.js
│  └─ ProductPage.js
├─ tests/               # Testy automatyczne
│  ├─ login.test.js
│  └─ product.test.js
├─ node_modules/        # zależności (nie trafiają do repo)
├─ package.json         # zależności i skrypty
├─ package-lock.json    # zamrożone wersje zależności
├─ playwright.config.js # konfiguracja Playwrighta
├─ README.md
└─ .github/workflows/playwright.yml  # CI/CD
```

---

## 🧩 Page Object Model (POM)

Projekt wykorzystuje POM, aby testy były czytelne i łatwe w utrzymaniu.

**Przykład konstrukcji klasy:**

```js
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoggedIn() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}
```

---

## 🧪 Przykładowy test

```js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login user successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoggedIn();
});
```

---

## 🔧 Konfiguracja Playwright

Plik `playwright.config.js` zawiera konfigurację testów, przeglądarek i raportowania.

---

## 🤖 GitHub Actions – CI/CD

Automatyczne uruchamianie testów odbywa się przez workflow:

```yaml
name: Playwright Tests

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: 20

    - name: Install dependencies
      run: npm install

    - name: Install Playwright Browsers
      run: npx playwright install

    - name: Run Playwright tests
      run: npx playwright test
```

Każdy push automatycznie uruchamia testy na Ubuntu w środowisku CI. Jeśli coś się wywali – zobaczysz to w zakładce **Actions**.

---

## 🧠 Przydatne komendy Git

```
git status
git add .
git commit -m "Opis zmian"
git push origin main
```

---

## ✔️ Podsumowanie

Projekt pokazuje kompletną ścieżkę automatyzacji:

* struktura oparta o Page Object Model,
* testy Playwright,
* pełna integracja CI/CD dzięki GitHub Actions,
* profesjonalny setup do portfolio.

Możesz go rozwijać o kolejne strony, scenariusze testowe oraz integracje raportowania (np. HTML Report, Allure).
