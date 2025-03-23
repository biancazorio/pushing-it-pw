import { BasePage } from './BasePage.js';

/**
 * Represents the registration page and its interactions.
 */
class RegisterPage extends BasePage{
    constructor(page) {
        super(page);
        // Form element selectors
        this.page = page;
        this.usernameInput = '#user';
        this.passwordInput = '//input[@name="pass"]';
        this.genderMaleRadio = '//span[@data-cy="Male"]';
        this.dayDropdown = '#day';
        this.monthDropdown = '#month';
        this.yearDropdown = '#year';
        this.registerButton = '#submitForm';
        this.dayOption = "//option[@value='${day}']";
    }

    /**
     * Navigates to the main page of the application.
     */
    async navigate() {
        await this.page.goto('https://pushing-it.vercel.app/'); 
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Fills out the registration form with the provided data.
     * Generates a unique username internally to avoid collisions.
     * @param {string} password - User's password.
     * @param {string} day - Day of birth (e.g., '6').
     * @param {string} month - Month of birth in text (e.g., 'June').
     * @param {string | number} year - Year of birth (e.g., '1999').
     * @returns {Promise<string>} - Returns the generated unique username.
     */
    async fillRegistrationForm(password, day, month, year) {
        // Generate a unique username
        const uniqueUsername = this.generateUniqueUsername(); // Generate a dynamic username
    
        await this.page.waitForSelector(this.usernameInput);
        await this.page.fill(this.usernameInput, uniqueUsername);
    
        await this.page.waitForSelector(this.passwordInput);
        await this.page.fill(this.passwordInput, password);
    
        await this.page.waitForSelector(this.genderMaleRadio);
        await this.page.click(this.genderMaleRadio);
    
        // Day dropdown
        await this.page.click(this.dayDropdown);
        await this.page.keyboard.type(day, { delay: 1000 });
        await this.page.keyboard.press('Enter');

        // Month dropdown
        await this.page.click(this.monthDropdown);
        await this.page.focus(this.monthDropdown); // ensure it's focused
        await this.page.waitForTimeout(500);
        await this.page.keyboard.type(month, { delay: 200 });
        await this.page.keyboard.press('Enter');
        
        // Year dropdown
        await this.page.click(this.yearDropdown);
        await this.page.keyboard.type(String(year));
        await this.page.keyboard.press('Enter');
    
        return uniqueUsername; 
    }
    /**
     * Clicks the register button to submit the form.
     */
    async submitForm() {
        await this.page.click(this.registerButton);
    }
}
export { RegisterPage };
