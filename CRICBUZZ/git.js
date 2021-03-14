require("chromedriver");
const fs = require("fs");
const wd = require("selenium-webdriver");
let browser = new wd.Builder().forBrowser('chrome').build();

let finalData = [];

async function main() {
    await browser.get("https://github.com/topics");
    await browser.wait(wd.until.elementLocated(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center")));
    let topicBoxes = await browser.findElements(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center"));
    for(let i = 0; i < topicBoxes.length; i++) {
        let url = await topicBoxes[i].getAttribute("href");
        finalData.push({topicUrl : url});
    }
    console.log(finalData);
    for(let i = 0; i < finalData.length; i++) {
        await browser.get(finalData[i].topicUrl);
        let projectBoxes = await browser.findElements(wd.By.css("a.text-bold"));
        finalData[i]["projects"] = [];
        for(let j = 0; j < projectBoxes.length; j++) {
            if( j == 8) {
                break;
            }
            finalData[i].projects.push({projectUrl: await projectBoxes[j].getAttribute("href")});
        }
    }
    fs.writeFileSync("finalData.json", JSON.stringify(finalData));
    browser.close();
}

main();