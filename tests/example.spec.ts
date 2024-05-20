import { test, expect } from '@playwright/test';
import { RegistrationForm } from '../page-object/components/loginForm/registrationForm';
import { LoginData } from '../page-object/components/loginForm/loginData';




///////////////
test.describe('Test Name Field', () => {
  let registrationForm: RegistrationForm;
  let loginData: LoginData;

  test.beforeEach(async ({ page }) => {
    registrationForm = new RegistrationForm(page);
    loginData = new LoginData(page);
    await page.goto('/');
    await page.getByText('Sign up').click();
  })
  test('Name is required', async ({ page }) => {
    await registrationForm.clickSignUpButton();
    await loginData.validName.focus();
    await loginData.validName.blur();
    await expect(page.getByText('Name required')).toBeVisible();
  });
  test('Name is invalid', async ({ page }) => {
    await loginData.inputName('Євген');
    await loginData.inputLastName('Shtevnin');
    await expect(page.getByText('Name is invalid')).toBeVisible();
  })
  test('Wrong length name', async ({ page }) => {
    await loginData.inputName('Л');
    await loginData.inputLastName('Shtevnin');
    await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
  })
  test('Border color red Name', async ({ page }) => {
    await loginData.validName.focus();
    await loginData.validName.blur();
    await expect(loginData.validName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  })


})
test.describe('Test Email Field', () => {
  let registrationForm: RegistrationForm;
  let loginData: LoginData;

  test.beforeEach(async ({ page }) => {
    registrationForm = new RegistrationForm(page);
    loginData = new LoginData(page);
    await page.goto('/');
    await page.getByText('Sign up').click();

  })
  test('Email incorrect', async ({ page }) => {
    await loginData.inputEmail('jjka@');
    await loginData.validEmail.blur();
    await expect(page.getByText('Email is incorrect')).toBeVisible();
  })
  test('Email incorrect2', async ({ page }) => {
    await loginData.validEmail.focus();
    await loginData.validEmail.blur();
    await expect(page.getByText('Email required')).toBeVisible();
  })

})
test.describe('Test lastName Field', () => {
  let registrationForm: RegistrationForm;
  let loginData: LoginData;
  test.beforeEach(async ({ page }) => {
    registrationForm = new RegistrationForm(page);
    loginData = new LoginData(page);
    await page.goto('/');
    await page.getByText('Sign up').click();

  })
  test('lastName is required', async ({ page }) => {
    await loginData.validLastName.focus();
    await loginData.validLastName.blur();
    await expect(page.getByText(' Last name required')).toBeVisible();

  })
  test('lastName is invalid', async ({ page }) => {
    await loginData.inputLastName('Євген');
    await loginData.validLastName.blur();
    await expect(page.getByText('Name is invalid')).toBeVisible();

  })
  test('Wrong length LastName', async ({ page }) => {
    await loginData.inputLastName('S');
    await loginData.validLastName.blur();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();

  })
  test('Border color red lastName', async ({ page }) => {
    await loginData.validLastName.focus();
    await loginData.validLastName.blur();
    await expect(loginData.validLastName).toHaveCSS('border-color', 'rgb(220, 53, 69)');

  })

  test.describe('Test Email Field', () => {
    let registrationForm: RegistrationForm;
    let loginData: LoginData;
    test.beforeEach(async ({ page }) => {
      registrationForm = new RegistrationForm(page);
      loginData = new LoginData(page);
      await page.goto('/');
      await page.getByText('Sign up').click();

    })

    test('Wrong data', async ({ page }) => {

      await loginData.inputPassword('q1');
      await loginData.validPassword.blur();
      await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();

    })

    test('Empty field error', async ({ page }) => {
      await loginData.validPassword.focus();
      await loginData.validPassword.blur();
      await expect(page.getByText('Password required')).toBeVisible();

    })

    test('Border color red ', async ({ page }) => {
      await loginData.validPassword.focus();
      await loginData.validPassword.blur();
      await expect(loginData.validPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })

  })
})

test.describe('Test Passwords Field', () => {
  let registrationForm: RegistrationForm;
  let loginData: LoginData;


  test.beforeEach(async ({ page }) => {
    registrationForm = new RegistrationForm(page);
    loginData = new LoginData(page);
    await page.goto('/');
    await page.getByText('Sign up').click();

  })

  test('Passwords not match ', async ({ page }) => {
    await loginData.inputPassword('Q1w2e3r4t5y6');
    await loginData.inputRepPassword('Q1w2e3r4t5y6!');
    await loginData.validReEnterPassword.blur();
    await expect(page.getByText('Passwords do not match')).toBeVisible();

  })

  test('Re-enter password ', async ({ page }) => {
    await loginData.inputPassword('Q1w2e3r4t5y6');
    await loginData.validReEnterPassword.fill('');
    await loginData.validReEnterPassword.blur();
    await expect(page.getByText('Re-enter password required')).toBeVisible();

  })
  test('Border color red Re-enter password', async ({ page }) => {

    await loginData.validReEnterPassword.focus();
    await loginData.validReEnterPassword.blur();
    await expect(loginData.validReEnterPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  })

  test('Registration ', async ({ page }) => {
    await loginData.loginRegistrationForm('Yevhen', 'Shtev', 'maybeimala+aqa123@gmail.com', 'Q1w2e3r4t5y6', 'Q1w2e3r4t5y6');
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByText('User already exists')).toBeVisible();

  })


})

