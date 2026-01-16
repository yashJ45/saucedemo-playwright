const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');

test('TC_01 - Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
});

test('TC_06 - Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('invalid_user', 'wrong_password');

  const errorText = await loginPage.getErrorMessage();
  await expect(errorText).toContain('Username and password do not match');
});

const { ProductsPage } = require('../pages/ProductsPage');


