import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

/**
 * Represents the registration page and its interactions.
 */
class HomePage extends BasePage{
    constructor(page) {
        super(page);
    }


  /**
   * Verifies that the welcome message is visible and contains the unique username.
   * @param {string} uniqueUsername - The username that should appear in the welcome message.
   */
    async verifyWelcomeMessage(uniqueUsername) {
        const welcomeMessageLocator = this.page.locator(`h2:has-text("Welcome ${uniqueUsername}")`);
        await expect(welcomeMessageLocator).toBeVisible();
        await expect(welcomeMessageLocator).toContainText(uniqueUsername);
    }
}
export { HomePage };
