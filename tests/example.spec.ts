import { test, expect } from '@playwright/test';

// test('first test', async ({ page }) => {
//   await page.goto('/');

//     const pageHeader = page.getByRole('heading', {name:'Do More!'})
//     await pageHeader.click();


    
  
// });

// test('guest login page', async ({ page }) => {
//   await page.goto('/');

//     const guestLoginLink = page.getByText('Guest log in' , {exact: true})
//     await guestLoginLink.click();


    
  
// });

// test('get by label', async ({ page }) => {
//   await page.goto('/');
//   await page.getByText('Sign up').click();
//     const emailField = page.getByLabel('Email');
//     await emailField.click();
  
// });

// test('get by testId', async ({ page }) => {
//   await page.goto('/');
//   await page.getByText('Sign in').click();
//   await page.getByTestId('signinEmail').click();

// });

// test('locator', async ({ page }) => {
//   await page.goto('/');
//   await page.locator('.header_signin').click();

// });

// test('locator icon', async ({ page }) => {
//   await page.goto('/');
//   const instagramIcon  = page.locator(".icon-instagram");
//   await page.locator('div.row', {has: instagramIcon }).click();
// });

// test('page.locator().locator();', async ({ page }) => {
//   await page.goto('/');
//   await page.getByText('Sing up').click();
//   const form = page.locator('.modal-content');
//   const buttonInsideForm = form.locator('btn-primary')
// });


///////////////
test.describe('Test Name Field',()  =>{

test('Name is required', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupName').focus();
  await page.locator('#signupName').blur();
  await expect(page.getByText('Name required')).toBeVisible();
 
  
});

test('Name is invalid', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupName').pressSequentially('Євген');
  await page.locator('#signupLastName').pressSequentially('Shtevnin');
   await expect(page.getByText('Name is invalid')).toBeVisible();

})

test('Wrong length', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupName').fill('Л');
  await page.locator('#signupLastName').pressSequentially('Shtevnin');
   await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();


})
test('Border color red Name', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupName').focus();
  await page.locator('#signupName').blur();
  await expect(page.locator('#signupName')).toHaveCSS('border-color','rgb(220, 53, 69)');


})

})
//////////////////////////
 
test.describe('Test Email Field',()  =>{

test('Email incorrect', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupEmail').fill('jjka@');
  await page.locator('#signupEmail').blur();
  await expect( page.getByText('Email is incorrect')).toBeVisible();


})
test('Email incorrect2', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupEmail').focus();
  await page.locator('#signupEmail').blur();
  await expect(page.getByText('Email required')).toBeVisible();
})



})
//////////////////////////

test.describe('Test lastName Field',()  =>{

test('lastName is required', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupLastName').focus();
  await page.locator('#signupLastName').blur();
  await expect(page.getByText(' Last name required')).toBeVisible();

})

test('lastName is invalid', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupLastName').pressSequentially('Євген');
  await page.locator('#signupName').pressSequentially('Shtevnin');
   await expect(page.getByText('Name is invalid')).toBeVisible();

})

test('Wrong length LastName', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupLastName').pressSequentially('S');
  await page.locator('#signupName').pressSequentially('Yevhen');
   await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();

})
test('Border color red lastName', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupLastName').focus();
  await page.locator('#signupLastName').blur();
  await expect(page.locator('#signupLastName')).toHaveCSS('border-color','rgb(220, 53, 69)');

})
///////////////

test('Wrong data', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupPassword').pressSequentially('q1');
  //await page.locator('#signupName').pressSequentially('Shtevnin');
  await page.locator('#signupPassword').blur();
   await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();


})

test('Empty field error', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').blur();
  await expect(page.getByText('Password required')).toBeVisible();

})

test('Border color red password', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').blur();
  await expect(page.locator('#signupPassword')).toHaveCSS('border-color','rgb(220, 53, 69)');
})

})
//////////////////////

test.describe('Test Passwords Field',()  =>{

test('Passwords not match ', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupPassword').fill('Q1w2e3r4t5y6');
  await page.locator("#signupRepeatPassword").fill('Q1w2e3r4t5y6!');
  await page.locator('#signupRepeatPassword').blur();
  await expect(page.getByText('Passwords do not match')).toBeVisible();

})

test('Re-enter password ', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupPassword').fill('Q1w2e3r4t5y6');
  await page.locator("#signupRepeatPassword").fill('');
  await page.locator('#signupRepeatPassword').blur();
  await expect(page.getByText('Re-enter password required')).toBeVisible(); 



})
test('Border color red Re-enter password', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupRepeatPassword').focus();
  await page.locator('#signupRepeatPassword').blur();
  await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color','rgb(220, 53, 69)');
})

test('Registration ', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupName').fill('Yevhen');
  await page.locator('#signupLastName').fill('Shtev');
  await page.locator('#signupEmail').fill('maybeimala+aqa123@gmail.com');
  await page.locator('#signupPassword').fill('Q1w2e3r4t5y6');
  await page.locator('#signupRepeatPassword').fill('Q1w2e3r4t5y6');
  await page.getByText('Register').click();
  
})


})
