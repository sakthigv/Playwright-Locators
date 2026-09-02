import {test,expect} from '@playwright/test';

test('getByAltText Locator', async({ page }) => {

    // Navigate to the test page :
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const image1 = page.getByAltText('logo image');
    await expect(image1).toBeVisible();
    await expect(image1).toHaveCount(1);

    const altText = await image1.getAttribute('alt');
    console.log('Founded my image :' + altText);

    const imgaeSrc = page.locator("img[alt='logo image']");
    await expect(imgaeSrc).toBeVisible();
    await expect(imgaeSrc).toHaveCount(1);
    console.log(`i found css Locator :` );

    });