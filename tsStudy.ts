class Student implements Person {
    fullName: string;
    constructor(public firstName: string, public middle: string, public lastName: string) {
        this.fullName = firstName + " " + middle + " " + lastName;
    }

    getAge() : number {
        return 10;
    }
}

interface Person {
    firstName: string;
    lastName: string;

    getAge: () => number;
}

function greeter(person : Person) {
    return "Hello, " + person;
}


let userLiteral = {
    firstName: "Bruno",
    lastName: "Giannotti"
};

let user = new Student("Bruno", "M", "Giannotti");

// document.body.textContent = greeter(user);

console.log(greeter(user));
