import { test , expect } from '@playwright/test';

test('Css Locator', async ({ page}) => {

    await page.goto('https://www.saucedemo.com/');
    const userName = await page.locator('#user-name');
    await userName.fill('error_user');

    const password = await page.locator('#password');
    await password.fill('secret_sauce');

    const loginButton = await page.locator('#login-button');
    await loginButton.click();

    await expect(page.locator('.title')).toHaveText('Products');

});