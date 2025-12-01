// pages/ProductPage.js
export class ProductPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.inventory_item');  // Locator dla produktów
    this.addToCartButtons = page.locator('.btn_inventory');  // Przyciski dodania do koszyka
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html'); // Strona produktów
  }

  async getProductCount() {
    return await this.products.count();  // Liczba produktów na stronie
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.nth(0).click();  // Kliknięcie pierwszego przycisku 'Add to cart'
  }

  async assertProductAdded() {
    const cartBadge = this.page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');  // Sprawdzenie, czy ilość w koszyku jest 1
  }
}
