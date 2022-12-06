import {WebDriver} from "selenium-webdriver";

import {TypeScriptPage} from "./TypeScriptPage";

export class PageFactory {
    static getPage(driver: WebDriver, pageName: "TypeScript"){
        switch (pageName){
            case "TypeScript":
                return new TypeScriptPage(driver);
            default:
                return new TypeScriptPage(driver);
        }
    }
}