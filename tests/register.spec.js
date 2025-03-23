import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';

test('User registration with valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    // Navigate to the registration page
    await registerPage.navigate();

    // Fill out the registration form 
    await registerPage.fillRegistrationForm('Test@1234', '6', 'June', '1999');

    // Submit the form
    await registerPage.submitForm();

    // Verify successful registration by checking the URL
    await expect(page).toHaveURL('https://pushing-it.vercel.app/home');

    // Additional assertion: Check that the welcome message displays the dynamic username
    await expect(page.locator('text=Bienvenido')).toBeVisible();
});
