const fs = require("fs");

// function callback(err,data) {
//     if(err) {
//         console.log("unable to read file!");
//     } else {
//         console.log(data);
//     }
// }

// fs.readFile("abc.txt","utf-8",callback);
// function doublePrint(val,myname) {
//     console.log(val);
//     myname(undefined, val);
// }
// doublePrint("hello",callback);

// function print (val) {
//     console.log(val)
// }
// setTimeout(function(){
//     print("hello1");
// },2000);
// setTimeout(function(){
//     print("hello2");
// },1000);
// setTimeout(function(){
//     print("hello3");
// },5000);
// console.log("start");

// let cond = true;

// setTimeout(function(){
//     cond = false;
// },3000);

// while(cond) {
//     console.log("hello");
// }
// let count = 1;

// function readfile(filename) {
//     if(filename == undefined) {
//         filename = (count-1) + ".txt";
//     }
//     fs.readFile(filename,"utf-8",writefile);
// }

// function writefile(err,data) {
//     let lines = data.split("\r\n");
//     if(lines.length > 1) {
//         lines = lines.splice(1);
//         let writeData = lines.join("\r\n");
//         fs.writeFile(count +".txt",writeData,readfile);
//         count += 1;
//     }
// }

// readfile("abc.txt");
// let count = 1;

// function readfile(filename) {
//     if(filename == undefined) {
//         filename = (count -1) + ".txt";
//     }
//     fs.readFile(filename,"utf-8",writefile)
// }

// function writefile(err,data) {
//     let lines = data.split("\r\n");
//     if(lines.length > 1) {
//         lines = lines.splice(1);
//         let writeData = lines.join("\r\n");
//         fs.writeFile(count + ".txt",writeData,readfile);
//         count += 1;
//     }
// }

// readfile("abc.txt");


// let a = true;
// setInterval(() => {
//     if(a) console.log("hello");
// }, 2000);

// setTimeout(() => {
//     a = false;
// }, 10100);

function myFilter(my_array, callback){
    //Enter your code here
    let arr = [];
   for(let ele of my_array) {
       if(callback(ele)) {
           arr.push(ele);
       }
   }
    return arr;
  
  
  
}

function callback(element) {
    return element % 2 == 0;
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray, callback));   
} 