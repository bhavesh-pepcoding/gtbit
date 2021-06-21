// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42,
//     education: {
//         degree: 'Masters',
//         school: {
//             name: 'SPS',
//             location: 'Pitampura'
//         }
//     },
//     friends: ["Falcon", "Bucky"]
// };

// 1st Method

// let degree = user.education.degree;

// 2nd Method

// let {education: {degree}} = user;

// let {education: {school: {name, location}}} = user;

// let friends = user.friends;

// let {friends} = user;
// console.log(friends);

// console.log(name);

// let obj1 =  {
//     "name" : "bhavesh"
// }

// let obj2 = {...obj1};

// obj2.name = "rajneesh";

// console.log(obj1,obj2);


let obj1 = {
    "name" : "bhavesh",
    "profession": {
        "company" : "pepcoding"
    }
}
// console.log(JSON.stringify(obj1));
let obj2 = {};

for(let i = 0; i < Object.keys(obj1).length; i++) {
    console.log(typeof(obj1[Object.keys(obj1)[i]]));
    if(typeof(obj1[Object.keys(obj1)[i]]) == "object") {
        obj2[Object.keys(obj1)[i]] = {...obj1[Object.keys(obj1)[i]]}
    } else {
        obj2[Object.keys(obj1)[i]] = obj1[Object.keys(obj1)[i]];
    }
}

obj2.profession.company = "squareboat";

console.log(obj1,obj2);
