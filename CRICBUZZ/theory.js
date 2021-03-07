// setTimeout(function(){
//     console.log("5 seconds");
// },5000);
// setTimeout(function(){
//     console.log("2 seconds");
// }, 2000)
// console.log("i am first")

// async function temp() {
//     setTimeout(function () { console.log("hello");  }, 2000);
// }

// temp();
// console.log("hello2");

async function temp() {
    console.log(1);
    setTimeout(function(){
        console.log(2);
    },1000);
    console.log(3);
    setTimeout(function() {
        console.log(4);
    },1500);
}
temp();
console.log(5);