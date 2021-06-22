class Person {
    constructor(name) {
        this.name = name;
        this.company = "pepcoding";
    }
    getDetails = () => {
        console.log(this)
    }
    setDetails(name, occupation) {
        this.occupation = occupation;
    }
}


let obj1 = new Person("bhavesh");

document.querySelector("button").addEventListener("click",obj1.getDetails);
