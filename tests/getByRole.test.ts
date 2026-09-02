import { test , expect } from '@playwright/test';

test('getByRole Locator', async ({ page}) => {

 // Navigate to the test page
 await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 
 // click on the "Open Modal" button to open the modal
 const primayActionButton = page.getByRole('button', { name: 'Primary Action' });
 await expect(primayActionButton).toBeVisible();
 await expect(primayActionButton).toBeEnabled();

const toggleButton = page.getByRole('button', { name : 'Toggle Button' });
await expect(toggleButton).toBeVisible();
await expect(toggleButton).toBeEnabled();


 // Click on the button to open the modal
await primayActionButton.click();
await toggleButton.click();


//Form Element 
const plyWrightUserName = page.getByRole('textbox', { name: 'Username:' });
await expect(plyWrightUserName).toBeVisible();
await plyWrightUserName.fill('Sakthi GV');


//CheckBox Element
const PlayWrightCheckBox = page.getByRole('checkbox',{name : 'Accept terms'});
await expect(PlayWrightCheckBox).toBeVisible();
await PlayWrightCheckBox.check();
await expect(PlayWrightCheckBox).toBeChecked();

//Navigation 

//const navigationLink = 

// await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
// await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();
// await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();



});