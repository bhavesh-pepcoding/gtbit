#!/usr/bin/env node


const fs = require("fs");
let arguments = process.argv.slice(2);

function wcat(arguments) {
    let options = arguments.filter(function(data,index) {
        return data.startsWith("-");
    });

    let files = arguments.filter(function(data,index){
        return !data.startsWith("-");
    });

    if(files.length == 0) {
        console.log("Please specify a file name.");
        return;
    }

    for(let i = 0; i < files.length; i++) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exist");
            return;
        }
    }
    for(let i = 0; i< files.length; i++) {
        let data = fs.readFileSync(files[i],"utf-8");
        if(options.includes("-s")) {
            let lines = data.split("\r\n");
            for(let j = 0; j < lines.length; j++) {
                if(lines[j] != "") {
                    console.log(lines[j]);
                }
            }
        } else {
            console.log(data);
        }
    }
}

wcat(arguments);