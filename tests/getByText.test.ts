import { test , expect } from '@playwright/test';

test('getByText Locator', async({ page }) => {

    // Navigate to the test page :
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const importantText = page.getByText('important', { exact: true });
    await expect(importantText).toBeVisible();

    const clortext = page.getByText('colored text', { exact: true });
    await expect(clortext).toBeVisible();


    // list bullets

    const item1 = page.getByText('List item 1', { exact: true });
    await expect(item1).toBeVisible();

    const item2 = page.getByText('List item 2 with link', { exact: true });
    await expect(item2).toBeVisible();

    const specialText = page.getByText('Special: Unique text identifier', { exact: true });
    await expect(specialText).toBeVisible();

    // Submit buttom

    const submit = page.getByText('Submit Form', {exact : true});
    await expect(submit).toBeVisible();

});