# SauceDemo Purchase Flow Documentation

## Step 1: Login
- **URL:** https://www.saucedemo.com/
- **Username textbox:** `[data-test="username"]`
- **Password textbox:** `[data-test="password"]`
- **Login button:** `[data-test="login-button"]`
- **Credentials:**
  - Username: `standard_user`
  - Password: `secret_sauce`

## Step 2: Add Products to Cart
- **URL:** https://www.saucedemo.com/inventory.html
- **Add to cart Sauce Labs Backpack:** `[data-test="add-to-cart-sauce-labs-backpack"]`
- **Add to cart Sauce Labs Bike Light:** `[data-test="add-to-cart-sauce-labs-bike-light"]`
- **Add to cart Sauce Labs Bolt T-Shirt:** `[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]`
- **Cart quantity indicator:** `[data-test="shopping-cart-link"]`

## Step 3: Go to Cart
- **URL:** https://www.saucedemo.com/cart.html
- **Remove buttons:** `[data-test="remove-sauce-labs-backpack"]`, `[data-test="remove-sauce-labs-bike-light"]`, `[data-test="remove-sauce-labs-bolt-t-shirt"]`
- **Checkout button:** `[data-test="checkout"]`

## Step 4: Checkout - Your Information
- **URL:** https://www.saucedemo.com/checkout-step-one.html
- **First Name textbox:** `[data-test="firstName"]`
- **Last Name textbox:** `[data-test="lastName"]`
- **Zip/Postal Code textbox:** `[data-test="postalCode"]`
- **Continue button:** `[data-test="continue"]`

## Step 5: Checkout - Overview
- **URL:** https://www.saucedemo.com/checkout-step-two.html
- **Finish button:** `[data-test="finish"]`

## Step 6: Checkout - Complete
- **URL:** https://www.saucedemo.com/checkout-complete.html
- **Confirmation message:** `Thank you for your order!`
- **Back Home button:** `[data-test="back-to-products"]`

---

This document lists all important steps and locators for automating a complete purchase flow on SauceDemo using Playwright MCP.
