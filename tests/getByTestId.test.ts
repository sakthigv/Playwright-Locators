import { test , expect } from '@playwright/test';

test('getByTestId Locator', async ({ page }) => {
 
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');

    const userProfileShell = page.getByTestId('user-profile-card');
    await expect(userProfileShell).toBeVisible();
    console.log('is Visible ');

    const userProfileName = page.getByTestId('profile-name');
    await expect(userProfileName).toBeVisible();
    await expect(userProfileName).toHaveText('John Doe');
    console.log(`user name : `, await userProfileName.textContent());


    const userProfileEmail = page.getByTestId('profile-email');
    await expect(userProfileEmail).toBeVisible();
    await expect(userProfileEmail).toHaveText('john.doe@example.com');
    console.log(`user email : `, await userProfileEmail.textContent());

    const editButton = page.getByTestId('edit-profile-btn');
    await expect(editButton).toBeVisible();
    await expect(editButton).toHaveText('Edit Profile');
    console.log('edit button is visible');

    const productAShell = page.getByTestId('product-card-1');
    await expect(productAShell).toBeVisible();
    const productAName = productAShell.getByTestId('product-name');
    await expect(productAName).toHaveText('Product A');
    console.log(`product A : `, await productAName.textContent());
   

    const productBShell = page.getByTestId('product-card-2');
    await expect(productBShell).toBeVisible();
    const productB = productBShell.getByTestId('product-name');
    await expect(productB).toHaveText('Product B');
    console.log(`product B : `, await productB.textContent());  

    const productCShell = page.getByTestId('product-card-3');
    await expect(productCShell).toBeVisible();
    const productC = productCShell.getByTestId('product-name');
    await expect(productC).toHaveText('Product C');
    console.log(`product C : `, await productC.textContent());
    
    const productPriceA = productAShell.getByTestId('product-price');
    await expect(productPriceA).toHaveText('$19.99');
    console.log(`product price A : `, await productPriceA.textContent());  

    const productPriceB = productBShell.getByTestId('product-price');
    await expect(productPriceB).toHaveText('$29.99');
    console.log(`product price B : `, await productPriceB.textContent());

    const productPriceC = productCShell.getByTestId('product-price');
    await expect(productPriceC).toHaveText('$39.99');
    console.log(`product price C : `, await productPriceC.textContent());

});

