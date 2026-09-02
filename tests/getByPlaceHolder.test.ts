import { test , expect } from '@playwright/test';

test('getByPlaceHolder Locator', async({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const  textBeforeTitle = page.getByText('Locate input elements by their placeholder text.',{ exact : true});
    await expect(textBeforeTitle).toBeVisible();

    const fullNameText = page.getByPlaceholder('Enter your full name');
    await fullNameText.fill('Sakthi GV');
    
    const phoneNumber = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    await phoneNumber.fill('1234567890');
     
    const statement = page.getByPlaceholder('Type your message here');
    await statement.fill('QA automation uses software code and tools to run predefined tests on applications automatically without human intervention');
    
    const searchProducts = page.getByPlaceholder('Search products');
    await searchProducts.fill('Electronics');

    await page.getByRole('button', { name: 'Search' }).click();
    await expect(searchProducts).toHaveValue('Electronics');

});