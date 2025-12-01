// tests/product.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test('should login and add first product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Przechodzimy do strony logowania i logujemy się
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Sprawdzamy, czy zostaliśmy przeniesieni na stronę produktów
  await productPage.goto();
  
  // Sprawdzamy, czy są produkty na stronie
  const productCount = await productPage.getProductCount();
  expect(productCount).toBeGreaterThan(0);

  // Dodajemy pierwszy produkt do koszyka
  await productPage.addFirstProductToCart();
  
  // Sprawdzamy, czy produkt został dodany do koszyka
  await productPage.assertProductAdded();
});
