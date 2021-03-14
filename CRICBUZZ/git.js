require("chromedriver");
const wd = require("selenium-webdriver");
let browser = new wd.Builder().forBrowser('chrome').build();

async function main() {
    await browser.get("https://github.com/topics");
    await browser.wait(wd.until.elementLocated(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center")));
    let topicBoxes = await browser.findElements(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center"));
    let urls = [];
    for(let i = 0; i < topicBoxes.length; i++) {
        let url = await topicBoxes[i].getAttribute("href");
        urls.push(url);
    }
    for(let i = 0; i < urls.length; i++) {
        await browser.get(urls[i]);
    }
    browser.close();
}

main();