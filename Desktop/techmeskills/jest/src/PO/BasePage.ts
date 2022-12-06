import {WebDriver} from "selenium-webdriver";

export class BasePage {
    constructor(protected driver: WebDriver) {}


    async getCurrentUrl():Promise<string>{
        return this.driver.getCurrentUrl();
    }

    async closeBrowser():Promise<void>{
        return this.driver.quit();
    }
}