import {
    By,
    Builder,
    Capabilities,
    until,
    WebDriver,
    WebElement,
} from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";

const chromedriver = require("chromedriver");

export class PageObject {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
    
    headerInput: By = By.name("hdrInput");
    mkeInput: By = By.name("mkeInput");
    oaiInput: By = By.name("oriInput");
    nameInput: By = By.name("namInput");
    sexInput: By = By.name("sexInput");
    raceInput: By = By.name("racInput");
    heightInput: By = By.name("hgtInput");
    weightInput: By = By.name("wgtInput");
    hairInput: By = By.name("haiInput");
    offenseInput: By = By.name("offInput");
    dowInput: By = By.name("dowInput");
    submitButton: By = By.id("saveBtn");
    clearButton: By = By.id("clearBtn");
    errorMessage: By = By.css(".errorMessage");
    homePage: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";

    /*driverlicenseInput: By = By.name("olnInput");
    driverstateInput: By = By.name("olsInput");
    driverexpirationInput: By = By.name("olyInput");
    lincenseplateInput: By = By.name("licInput");
    licensestateInput: By = By.name("lisInput");
    lincenseexpirationInput: By = By.name("liyInput");*/

    constructor(driver: WebDriver) {
        /*if (driver)*/ this.driver = driver;
        /*else;
            this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()*/
    }
    async navigate () {
        await this.driver.get(this.homePage);
        }

    async inputInformation(EnterWanted) {
        await this.driver.wait(until.elementLocated(this.headerInput));
        if (EnterWanted.header) {
          await this.driver.findElement(this.headerInput).clear();
          await this.driver
            .findElement(this.headerInput)
            .sendKeys(EnterWanted.Header);
        }
        if (EnterWanted.mke) {
          await this.driver.findElement(this.mkeInput).clear();
          await this.driver
            .findElement(this.mkeInput)
            .sendKeys(EnterWanted.Mke);
        }
        if (EnterWanted.oai) {
          await this.driver.findElement(this.oaiInput).clear();
          await this.driver
            .findElement(this.oaiInput)
            .sendKeys(EnterWanted.Oai);
        }
        if (EnterWanted.name) {
            await this.driver.findElement(this.nameInput).clear();
            await this.driver
              .findElement(this.nameInput)
              .sendKeys(EnterWanted.Name);
        }
        if (EnterWanted.sex) {
            await this.driver.findElement(this.sexInput).clear();
            await this.driver
              .findElement(this.sexInput)
              .sendKeys(EnterWanted.Sex);
        }
        if (EnterWanted.race) {
            await this.driver.findElement(this.raceInput).clear();
            await this.driver
              .findElement(this.raceInput)
              .sendKeys(EnterWanted.Race);
        }
        if (EnterWanted.height) {
            await this.driver.findElement(this.heightInput).clear();
            await this.driver
              .findElement(this.heightInput)
              .sendKeys(EnterWanted.Height);
        }
        if (EnterWanted.weight) {
            await this.driver.findElement(this.weightInput).clear();
            await this.driver
              .findElement(this.weightInput)
              .sendKeys(EnterWanted.Weight);
        }
        if (EnterWanted.hair) {
            await this.driver.findElement(this.hairInput).clear();
            await this.driver
              .findElement(this.hairInput)
              .sendKeys(EnterWanted.Hair);
        }
        if (EnterWanted.offense) {
            await this.driver.findElement(this.offenseInput).clear();
            await this.driver
              .findElement(this.offenseInput)
              .sendKeys(EnterWanted.Offense);
        }
        if (EnterWanted.dow) {
            await this.driver.findElement(this.dowInput).clear();
            await this.driver
              .findElement(this.dowInput)
              .sendKeys(EnterWanted.Dow);
        }
        /*if (EnterWanted) {
            await this.driver.findElement(this.driverlicenseInput).clear();
            await this.driver
              .findElement(this.driverlicenseInput)
              .sendKeys(EnterWanted.DriverLicense);
        }
        if (EnterWanted) {
            await this.driver.findElement(this.driverstateInput).clear();
            await this.driver
              .findElement(this.driverstateInput)
              .sendKeys(EnterWanted.DLState);
        }
        if (EnterWanted) {
            await this.driver.findElement(this.driverexpirationInput).clear();
            await this.driver
              .findElement(this.driverexpirationInput)
              .sendKeys(EnterWanted.DLexpiration);
        }*/
        return;

    async submitChanges(): Promise<void> {
        return (await this.driver.findElement(this.submitButton)).click();
    }
        
    async clearChanges(): Promise<void> {
        return (await this.driver.findElement(this.clearButton)).click();
    }

    async getEnterWantedInfo(): Promise<PageObject> {
        await this.driver.wait(until.elementLocated(this.nameInput))};
        let Header = await (
          await this.driver.findElement(this.headerInput)
        ).getAttribute("value");
        let Mke = await (
          await this.driver.findElement(this.mkeInput)
        ).getAttribute("value");
        let Oai = await (
          await this.driver.findElement(this.oaiInput)
        ).getAttribute("value");
        let Name = await (
          await this.driver.findElement(this.nameInput)
        ).getAttribute("value");
        let Sex = await (
            await this.driver.findElement(this.sexInput)
          ).getAttribute("value");
        let Race = await (
          await this.driver.findElement(this.raceInput)
        ).getAttribute("value");
        let Height = await (
            await this.driver.findElement(this.heightInput)
          ).getAttribute("value");
        let Weight = await (
          await this.driver.findElement(this.weightInput)
        ).getAttribute("value");
        let Hair = await (
          await this.driver.findElement(this.hairInput)
        ).getAttribute("value");
        let Offense = await (
          await this.driver.findElement(this.offenseInput)
        ).getAttribute("value");
        let DOW = await (
          await this.driver.findElement(this.dowInput)
        ).getAttribute("value");
        return ["headerInput", "mkeInput", "oaiInput", "nameInput", "sexInput", "raceInput", "heightInput", "weightInput", "hairInput", "offenseInput", "dowInput" ];
    }

    @returns {Promise<string>}

    async getErrorMessage(): Promise<string> {
     return (await this.driver.findElement(this.errorMessage)).getText();
   }

   async quit(): Promise<void> {
    return this.driver.quit();
   }


interface EW { 
  header: string;
  mke: string;
  oai: string;
  name: string;
  sex: string;
  race: string;
  height: number;
  weight: number;
  hair: string;
  offense: string;
  dow: number;
}

