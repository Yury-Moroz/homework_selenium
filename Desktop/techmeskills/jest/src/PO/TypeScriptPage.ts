import {WebDriver} from "selenium-webdriver";

import {BasePage} from "./BasePage";


export class TypeScriptPage extends BasePage{
    private readonly url: string

    constructor(driver: WebDriver) {
        super(driver);

        this.url = "https://bizon.by/";

    }
    async visitPage(){
        return this.driver.get(this.url);
    }

    static async visitPage() {

    }
}