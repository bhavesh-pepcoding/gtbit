let obj = {
    "firstName" : "bhavesh",
    "lastName" : "bansal",
    "name": (string) => {
        return this.firstName + " " + this.lastName + " " + string;
    }
}

// console.log(JSON.parse(JSON.stringify(obj)));

console.log(obj.name());

let fn = obj.name();

console.log(fn());


