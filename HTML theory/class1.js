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

function temp() {
    {
        let a  =10;
        const c = 30;
        var b = 20;
        console.log(a);
    }
    // console.log(a);
    // console.log(c);
}

// temp();
// object creation

// let a = {
//     "fruit": "apple",
//     "vegetable": "onion",
//     "ride": "bicycle",
//     2 : "hello"
// }

// console.log(a.fruit, a["vegetable"], a[2]);

let a = [45,23,45,63,64,23,23,34,5,55,34];

// let b = new Array(10,20,40);

// let c = new Array(10);
let  d =10;
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
a.sort(function(a,b) {
    if(a > b) return 1;
    else if(a == b) return 0;
    else return -1;
    // return a - b;
});
console.log(a);


