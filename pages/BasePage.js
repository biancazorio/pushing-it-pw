class BasePage {
    constructor(page) {
        this.page = page;
    }

    // Generate a unique username with a timestamp
    generateUniqueUsername(prefix = 'user') {
        const timestamp = Date.now(); 
        return `${prefix}${timestamp}`;
    }
}

export { BasePage };
