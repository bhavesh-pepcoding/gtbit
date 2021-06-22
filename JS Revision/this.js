// let obj = {
//     "firstName" : "bhavesh",
//     "lastName" : "bansal",
//     "name": (string) => {
//         return this.firstName + " " + this.lastName + " " + string;
//     }
// }

// // console.log(JSON.parse(JSON.stringify(obj)));

// console.log(obj.name());

// let fn = obj.name;

// console.log(fn());

// const object = {
//     message: 'Hello, World!',
//     logMessage: function () {
//         console.log(this);
//         // What is logged?
//     }
// };

// setTimeout(function outer() {
//         // console.log("hello");
//         object.logMessage();
//     }, 1000);

//     let boundFn = object.logMessage.bind(object)
// setTimeout(boundFn, 1000);


// this will represent to the element on which eventlistener is implemented
// document.querySelector("button").addEventListener("click", function(){
//     console.log(this);
// })

// this will not represent to settimeout, it will represnt to window 
// setTimeout(() => {
//     console.log(this);
// },1000)


// let obj = {
//     "name" : "bhavesh",
//     "hello" : {
//         "fn" : () => {
//             console.log(this);
//         }
//     }
// }

// obj.hello.fn()


// const object = {
//     message: 'Hello, World!',
//     logMessage: function () {
//         console.log(this);
//         // What is logged?
//     }
// };
// let fn = object.logMessage;
// fn();

// let fn = object.logMessage;
// setTimeout(fn, 1000);

// document.querySelector("button").addEventListener("click", fn)

// setTimeout(function outer() {
//         object.logMessage();
//     }, 1000);


// this will be overrided in this case, No need to check where this will be pointing
let boundFn = object.logMessage.bind(object);
setTimeout(boundFn, 1000);

const object = {
    obj : {
    who: 'World',
    greet() {
        return `Hello, ${this.who}!`;
    },
    farewell: () => {
        return `Goodbye, ${this.who}!`;
    }}
};
// console.log(object.greet()); // What is logged?
// console.log(object.farewell()); // What is logged?