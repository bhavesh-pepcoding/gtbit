const puppy = require("puppeteer");
const fs = require("fs");
let finalData = [];
async function main() {
    let browser = await puppy.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"]
    });

    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://www.cricbuzz.com/cricket-series/3130/indian-premier-league-2020/squads");
    let teams = await tab.$$(".cb-col.cb-col-100.cb-series-brdr.cb-stats-lft-ancr");
    for(let i = 0; i < teams.length; i++) {
        let teamName = await tab.evaluate(function(ele) {
            return ele.textContent;
        }, teams[i]);
        finalData.push({"teamName": teamName, "players": []});
        await teams[i].click();
        await new Promise(function(resolve,reject) {
            setTimeout(resolve,2000);
        })
        await getPlayers(tab,i);
    }
    for(let i = 0; i < finalData.length; i++) {
        for(let j  = 0; j < finalData[i].players.length; j++) {
            let playerUrl = finalData[i].players[j].playerUrl;
            let BatBallData = await getPlayerInfo(playerUrl,tab);
            finalData[i].players[j].battingCareer = BatBallData[0];
            finalData[i].players[j].bowlingCareer = BatBallData[1];
        }
    }
    fs.writeFileSync("players.json",JSON.stringify(finalData));
    
    
}

async function getPlayers(tab,idx) {
    let playersNameDiv = await tab.$$(".cb-font-16.text-hvr-underline");
    let players = await tab.$$(".cb-col.cb-col-50");
    for(let i = 0; i < players.length; i++) {
        let url = await tab.evaluate(function(ele){
            return ele.getAttribute("href");
        },players[i]);
        finalData[idx]["players"].push({"playerUrl" : "https://www.cricbuzz.com" + url});
        let playerName = await tab.evaluate(function(ele) {
            return ele.textContent;
        },playersNameDiv[i]);
        finalData[idx]["players"][i]["playerName"] = playerName;
        finalData[idx]["players"][i]["battingCareer"] = {};
        finalData[idx]["players"][i]["bowlingCareer"] = {};
    }
}

async function getPlayerInfo(url,tab) {
    let tempData = [];
    await tab.goto(url);
    let tables = await tab.$$(".table.cb-col-100.cb-plyr-thead");
    for(let i = 0; i < tables.length; i++) {
        let tableTempData = {};
        let keys = [];
        let headings = await tables[i].$$("thead tr th");
        for(let j = 1; j < headings.length; j++) {
            let key = await tab.evaluate(function(ele) {
                return ele.textContent;
            }, headings[j]);
            keys.push(key);
        }
        let dataRows = await tables[i].$$("tbody tr");
        for(let i = 0; i < dataRows.length; i++) {
            let dataColums = await dataRows[i].$$("td");
            let matchType = await tab.evaluate(function(ele){
                return ele.textContent;
            }, dataColums[0]);
            tableTempData[matchType] = {}
            for(let j = 1; j < dataColums.length; j++) {
                let data = await tab.evaluate(function(ele) {
                    return ele.textContent;
                },dataColums[j]);
                tableTempData[matchType][keys[j-1]] = data;
            }
        }
        tempData.push(tableTempData);
    }
    return tempData;
}

main();