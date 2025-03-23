class BasePage {
    constructor(page) {
        this.page = page;
    }

    /**
    * Navigates to the main page of the application.
    */
    async navigateToMainPage() {
        await this.page.goto('https://pushing-it.vercel.app/');
        await this.page.waitForLoadState('domcontentloaded');
    }    


    /**
    * Generates a unique username using a timestamp.
    * @param {string} [baseName='testuser'] - Optional base name to combine with timestamp.
    * @returns {string} - The generated unique username.
    */
    generateUniqueUsername(prefix = 'user') {
        const timestamp = Date.now(); 
        return `${prefix}${timestamp}`;
    }
}

export { BasePage };
