/* eslint-disable no-loop-func */
// for(let i = 0; i < 5; i++) {
//     setInterval(() => {
//         console.log(i);
//     },1000)
// }

const arr = [10,12,15,21,23,54,23,65,56,23,35];

for(var i = 0; i< arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}