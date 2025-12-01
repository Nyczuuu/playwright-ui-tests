import { test, expect } from '@playwright/test';

test('should login successfully', async ({ page }) => {
  // Przechodzimy do strony
  await page.goto('https://www.saucedemo.com/');

  // Wypełniamy formularz logowania
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Sprawdzamy, czy przekierowuje do strony z produktami
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
