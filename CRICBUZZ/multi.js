require("chromedriver");

const wd = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
const browser = new wd.Builder().forBrowser('chrome').build();
let matchId = process.argv[2];
let innings = process.argv[3];
let batsmenUrls = [];
let bowlerUrls = [];
let batsmenKeys = ["playerName", "out", "runs", "ballsPlayed", "fours", "sixes", "strikeRate"];
let bowlerKeys = ["playerName", "overs", "maidenOvers", "runs", "wickets", "noBalls", "wideBalls", "economy"];
async function main () {
    await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
    await buttons[1].click();
    await browser.wait(wd.until.elementLocated(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr")));
    let tables = await browser.findElements(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr"));
    let inningsBatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for(let i = 0; i < inningsBatsmenRows.length; i++) {
        let columns = await inningsBatsmenRows[i].findElements(wd.By.css("div"));
        if(columns.length == 7){
            let url = await columns[0].findElement(wd.By.css("a")).getAttribute("href");
            batsmenUrls.push(url);
        }
        
    }
    let inningsBowlerRows = await tables[1].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for(let i = 0; i < inningsBowlerRows.length; i++) {
        let columns = await inningsBowlerRows[i].findElements(wd.By.css("div"));
        if(columns.length == 8) {
            let url = await columns[0].findElement(wd.By.css("a")).getAttribute("href");
            bowlerUrls.push(url);
        }
    }
    let finalUrls = batsmenUrls.concat(bowlerUrls);
    for(url of finalUrls) {
        await browser.get(url);
    }
    await browser.close();
 }

 main();
