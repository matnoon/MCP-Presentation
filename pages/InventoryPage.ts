// pages/InventoryPage.ts
import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addProduct(product: string) {
    await this.page.click(`[data-test="add-to-cart-${product}"]`);
  }

  async goToCart() {
    await this.page.click('[data-test="shopping-cart-link"]');
  }
}
