// let is reassignable but not redeclarable

// let  a = 10;
// a = 20;
// console.log(a);

// let a  =10;
// let a  = 20;
// console.log(a);

// var is reassigable and redeclarable

// var a  = 10;
// a = 20;
// console.log(a);

// var a  = 10;
// var a  = 20;
// console.log(a);

// const is not reassignable and redeclarable

// const a  = 10;
// a = 20;
// console.log(a);

// const a = 10;
// const a = 20;
// console.log(a);

// function temp() {
//     {
//         let a  =10;
//         const c = 30;
//         var b = 20;
//         console.log(a);
//     }
//     // console.log(a);
//     // console.log(c);
// }

// temp();
// object creation

// let a = {
//     "fruit": "apple",
//     "vegetable": "onion",
//     "ride": "bicycle",
//     2 : "hello"
// }

// console.log(a.fruit, a["vegetable"], a[2]);

// let a = [45,23,45,63,64,23,23,34,5,55,34];

// let b = new Array(10,20,40);

// let c = new Array(10);
// let  d =10;
// c[-1] = 1;

// console.log(a.length);
// console.log(b[-1]);
// console.log(c);

// a.push(40);
// console.log(a);
// a.pop();
// console.log(c["-1"]);

// console.log(Array.isArray(d));

// let f = [];
// f["a"] = 1;
// f["b"] = 2;
// console.log(f[0]);

// console.log(d.constructor.toString().indexOf("Array"));

// console.log(a instanceof Array);

// console.log(typeof(a.toString()));

// delete a[1];
// a.splice(0,3);
// a = a.concat(b);
// console.log(a.concat(b));
// console.log(a.sort());
// console.log(a.reverse())
// a.sort(function(a,b) {
//     if(a > b) return 1;
//     else if(a == b) return 0;
//     else return -1;
//     // return a - b;
// });
// console.log(a);


// {
//     let a = 10;
// }
// console.log(a);

// for(let i = 0; i< 2; i++) {
//     for(let j = 4; j < 6; j++) {
//         console.log(i, j);
//     }
// }

// for(let i = 0; i < 2; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 2; i++) {
//     console.log(i);
// }

// for(var i = 0; i<= 7; i++) {
//     for(var i = 4; i < 6; i++) {
//         console.log(i);
//     }
// }

// let a = [2,3,1];
// a.sort(function(a,b) {
//     console.log(a,b);
//     if(a > b) {return true;}
//     else {return false;}
// });

// let a = [1,2,3,"4"];
// a = a.map((data,index,array) => {
//     if(index < 2) {
//         return data;
//     }else {
//         return data + 2;
//     }
// });
// console.log(a);

// let b = a.filter((data) => {
//     if(data % 2 == 0) {
//         return false;
//     } else {
//         return true;
//     }
// });

// console.log(a, b);

// let a = {
//     "pep" : 1,
//     "pepcoding" : 2,
//     "peppy": "dog",
//     3 : "hello",
//     "pepcoding" : 3,
// }
// console.log(a["pepcoding"], a.pepcoding);
// console.log(a[3]);
// console.log(Object.keys(a));
// console.log(Object.values(a));

let a = [11,12,13];
let d = a + 2;
console.log(typeof(d));