import {test, expect } from '@playwright/test';

test('getByLabel Locator', async({ page }) => {

    // Navigate to the test page :
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const email = page.getByLabel('Email Address:');
    await expect(email).toBeVisible();
    await email.fill('xyz@gmail.com');

    const password = page.getByLabel('Password:');
    await expect(password).toBeVisible();
    await password.fill('123456');

    const age = page.getByLabel('Your Age:');
    await expect(age).toBeVisible();
    await age.fill('25');


    const checButton = page.getByLabel('Standard');
    await expect(checButton).toBeVisible();
    await checButton.check();

    await expect(checButton).toBeChecked();

    const checButton2 = page.getByLabel('Express');
    await expect(checButton2).toBeVisible();

});