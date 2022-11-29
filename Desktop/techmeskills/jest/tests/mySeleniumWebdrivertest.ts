import {Builder, WebDriver, WebElement, By, Browser} from "selenium-webdriver"
import Chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";

async function  visitBizon(){
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser("chrome").setChromeService(service).build();
    await driver.manage().window().maximize();
    await driver.get("https://www.bizon.by/");
    await driver.findElement(By.css("#ft_menu > button > span > span.col")).click();
    await driver.findElement(By.css("#ft_menu > div > span:nth-child(3) > a")).click();
    await driver.findElement(By.xpath("//*[@id=\"content\"]/div[3]/div/div[1]/div/div[1]/a/img")).click();
    await driver.findElement(By.xpath("//*[@id=\"button-cart\"]/b")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//*[@id=\"ft-popup-cart\"]/div/div/div[3]/div/div/a")).click();
    await driver.quit();
console.log(`successfully adding a product to the cart`)

};
visitBizon();

async function  visitBizonSearch() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser("chrome").setChromeService(service).build();
    await driver.manage().window().maximize();
    await driver.get("https://www.bizon.by/");
    const search: WebElement = await driver.findElement(By.xpath("//*[@id=\"ft_search\"]/input"));
    await search.sendKeys("ротеин");
    await driver.sleep(2000);
    await search.clear();
    await driver.sleep(1000);
    await search.sendKeys("протеин");
    await driver.sleep(2000);
    await driver.quit();
    console.log(`successful verification by product name`)
};
visitBizonSearch()

async function  visitBizonSearchElemet() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser("chrome").setChromeService(service).build();
    await driver.manage().window().maximize();
    await driver.get("https://www.bizon.by/");
    const par : WebElement = await driver.findElement(By.xpath ("//*[@id=\"top\"]/div/div/div[4]/div/div/div/ul/li[7]/a"));
    await par.getTagName();
    console.log(par);
    const par2 : WebElement = await driver.findElement(By.css("#cart > button > span > span:nth-child(1) > span > span.si.static-icon > svg"));
    await par2.getText();
    console.log(par2);
    await driver.quit();
};
visitBizonSearchElemet()

async function  visitBizonСategories(){
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser("chrome").setChromeService(service).build();
    await driver.manage().window().maximize();
    await driver.get("https://www.bizon.by/");
    await driver.findElement(By.css("#ft_menu > div > span:nth-child(3) > a > span > span.col > small")).click();
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//*[@id=\"logo\"]/div/div/a/img[1]")).click();
    await driver.findElement(By.css(" #ft_menu > div > span:nth-child(24) > a > span > span.col")).click();
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//*[@id=\"logo\"]/div/div/a/img[1]")).click();
    await driver.findElement(By.xpath("//*[@id=\"ft_menu\"]/div/span[17]/a/span/span[2]")).click();
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//*[@id=\"logo\"]/div/div/a/img[1]")).click();
    await driver.findElement(By.xpath("//*[@id=\"ft_menu\"]/div/span[25]/a/span/span[2]")).click();
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//*[@id=\"logo\"]/div/div/a/img[1]")).click();
    await driver.sleep(1000)
    await driver.quit();
console.log(`the directory responds`)

};
visitBizonСategories()