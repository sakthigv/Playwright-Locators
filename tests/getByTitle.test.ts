import { test, expect } from '@playwright/test';

test('getByTitle locator', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');

    const homeTitle = page.getByTitle('Home page link');
    // console.log('count:', await homeTitle.count());
    await expect(homeTitle).toBeVisible();
    await homeTitle.click();



    const htmlTitle = page.getByTitle('HyperText Markup Language');
    await expect(htmlTitle).toBeVisible();
    await htmlTitle.click();

    const tooTipTitle = page.getByTitle('Tooltip text');
    await expect(tooTipTitle).toBeVisible();
    await tooTipTitle.click();

// save button
    const SaveButton = page.getByTitle('Click to save your changes');
    await expect(SaveButton).toBeVisible();
    await SaveButton.click();

});

