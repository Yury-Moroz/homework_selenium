
import {Builder, WebDriver, Browser, By, WebElement} from "selenium-webdriver"
import Chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";

import {TypeScriptPage} from "../src/PO/TypeScriptPage";
import {PageFactory} from "../src/PO/PageFactory";
import assert from "assert";


async function visitBizon() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const typeScriptPage = new TypeScriptPage(driver);
    await driver.manage().window().maximize();
    await typeScriptPage.visitPage();
    const currentUrl: string = await typeScriptPage.getCurrentUrl();
    await driver.findElement(By.xpath("//a[@href = 'https://bizon.by/omega-3']")).click();
    console.log("=============", currentUrl);
    assert.equal(currentUrl, "https://bizon.by/");
    await typeScriptPage.closeBrowser();
}
visitBizon();

async function visitBizonAddProduct() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const typeScriptPage = new TypeScriptPage(driver);
    await driver.manage().window().maximize();
    await typeScriptPage.visitPage();
    await driver.actions().doubleClick(driver.findElement(By.xpath("//a[@href = 'https://bizon.by/proteiny']"))).perform();
    await driver.actions().doubleClick(driver.findElement(By.xpath("//img[@src = 'https://bizon.by/image/cache/catalog/i/de/cl/5a04abcbe135b0144ddbdf12ebcb065a-230x270.jpg']"))).perform();
    await driver.actions().doubleClick(driver.findElement(By.xpath("//button[@id='button-cart']"))).perform();
    console.log("the product was added correctly");
    await typeScriptPage.closeBrowser();
}
visitBizonAddProduct();


async function visitBizonGetInf() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const typeScriptPage = new TypeScriptPage(driver);
    await driver.manage().window().maximize();
    await typeScriptPage.visitPage();
    const par: WebElement = await driver.findElement(By.xpath("//a[@href= 'akciya']"));
    await par.getTagName();
    console.log(par);
    const par2: WebElement = await driver.findElement(By.xpath("//a[@href = 'delivery']"));
    await par2.getText();
    console.log(par2);
    await typeScriptPage.closeBrowser();
}
visitBizonGetInf();

async function visitBizonTestCely() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const typeScriptPage = PageFactory.getPage(driver, "TypeScript");
    await driver.manage().window().maximize();
    await typeScriptPage.visitPage();
    await driver.findElement(By.css("[class='d-lg-inline mx-1']")).click();
    await driver.findElement(By.css("a[href='/lechenie-sudorog']")).click();
    console.log("the goals are working fine");
    await typeScriptPage.closeBrowser();
}
visitBizonTestCely();



async function visitBizonSearchGoods() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const typeScriptPage = PageFactory.getPage(driver, "TypeScript");
    await driver.manage().window().maximize();
    await typeScriptPage.visitPage();
    const search: WebElement = await driver.findElement(By.css("input[type ='search']"));
    await search.sendKeys("ротеин");
    await search.clear();
    await search.sendKeys("протеин");
    console.log(`products are found on request`);
    await typeScriptPage.closeBrowser();
}
visitBizonSearchGoods();