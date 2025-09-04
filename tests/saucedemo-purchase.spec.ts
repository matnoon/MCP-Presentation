import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

declare const process: any;

const USERNAME = process.env.SAUCE_USERNAME || 'standard_user';
const PASSWORD = process.env.SAUCE_PASSWORD || 'secret_sauce';
const FIRST_NAME = process.env.FIRST_NAME || 'John';
const LAST_NAME = process.env.LAST_NAME || 'Doe';
const POSTAL_CODE = process.env.POSTAL_CODE || '12345';
const PRODUCTS = [
  'sauce-labs-backpack',
  'sauce-labs-bike-light',
  'sauce-labs-bolt-t-shirt',
];

test('Complete purchase flow on SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(USERNAME, PASSWORD);
  await expect(page).toHaveURL(/inventory/);

  // Add products to cart
  for (const product of PRODUCTS) {
    await inventoryPage.addProduct(product);
  }
  await inventoryPage.goToCart();
  await expect(page).toHaveURL(/cart/);

  // Checkout
  await cartPage.checkout();
  await expect(page).toHaveURL(/checkout-step-one/);
  await checkoutPage.fillInfo(FIRST_NAME, LAST_NAME, POSTAL_CODE);
  await expect(page).toHaveURL(/checkout-step-two/);
  await checkoutPage.finish();
  await expect(page).toHaveURL(/checkout-complete/);
  await expect(page.locator('h2')).toHaveText('Thank you for your order!');
});
