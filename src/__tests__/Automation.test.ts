import { url } from "inspector";
import { PageObject } from "/Users/nishanbhagat/Documents/GitHub/Enter-Wanted/src/PageObject"

const em = new PageObject();

describe("Employee Manager 1.2", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            
    });
    afterAll(async () => {
        await driver.quit();

//Link to Jira test cases for Equivalence Partitioning: https://dmutah.atlassian.net/jira/software/c/projects/NBDL/issues/NBDL-74
  test("EP with correct header requirement 9-19 characters", async () => {
    await em.inputInformation({
      header: "ABCD12345",
      mke: "A!",
      oai: "abcd12345",
      name: "Tom",
      sex: "M",
      race: "B",
      height: "507",
      weight: "108",
      hair: "black",
      offense: "speeding",
      dow: "11112011"
    });
    await em.submitButton();
    let person = await em.EnteredWanted();
    expect(person.header).toEqual("ABCD12345");
    expect(person.mke).toEqual("A!");
    expect(person.oai).toEqual("abcd12345");
    expect(person.name).toEqual("Tom");
    expect(person.sex).toEqual("M");
    expect(person.race).toEqual("B");
    expect(person.height).toEqual("507");
    expect(person.weight).toEqual("108");
    expect(person.hair).toEqual("black");
    expect(person.offense).toEqual("speeding");
    expect(person.dow).toEqual("11112011");
    });
//Link to Jira test cases for Equivalence Partitioning: https://dmutah.atlassian.net/jira/software/c/projects/NBDL/issues/NBDL-75
test("EP with incorrect header requirement of 8 characters only", async () => {
    await em.inputInformation({
      header: "ABCD1234",
      mke: "A!",
      oai: "abcd12345",
      name: "Tom",
      sex: "M",
      race: "B",
      height: "507",
      weight: "108",
      hair: "black",
      offense: "speeding",
      dow: "11112011"
    });
    await em.submitButton();
    await driver.wait(until.elementLocated(errorMessage));
            expect(await (await driver.findElement(errorMessage)).getText()).toBe(
                "The 'Header' field should be between 9 and 19 characters long.");
    });
//Link to Jira test cases for Equivalence Partitioning: https://dmutah.atlassian.net/jira/software/c/projects/NBDL/issues/NBDL-76
test("EP with incorrect header requirement of 20 characters only", async () => {
    await em.inputInformation({
      header: "abcdefghijklmnopqrst",
      mke: "A!",
      oai: "abcd12345",
      name: "Tom",
      sex: "M",
      race: "B",
      height: "507",
      weight: "108",
      hair: "black",
      offense: "speeding",
      dow: "11112011"
    });
    await em.submitButton();
    await driver.wait(until.elementLocated(errorMessage));
            expect(await (await driver.findElement(errorMessage)).getText()).toBe(
                "The 'Header' field should be between 9 and 19 characters long.");
            });
    });
});
