import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';
import { HomePage } from '../pages/HomePage.js';

test('User registration with valid data and welcome message verification', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
  
    // 1. Navigate to the main page using BasePage's navigation method via RegisterPage.
    await registerPage.navigate();
  
    // 2. Fill out the registration form and capture the generated unique username.
    const uniqueUsername = await registerPage.fillRegistrationForm('Test@1234', '6', 'June', '1999');
  
    // 3. Submit the form.
    await registerPage.submitForm();

    // 4. Verify that we land on the correct URL after registration.
    await page.waitForSelector('h2:has-text("Cargando...")', { state: 'detached' });
    await expect(page).toHaveURL('https://pushing-it.vercel.app/home');
  
    // 5. Additional assertion: Verify that the welcome message displays the dynamic username.
    await homePage.verifyWelcomeMessage(uniqueUsername);
  });