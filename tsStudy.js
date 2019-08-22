"use strict";
class Student {
    constructor(firstName, middle, lastName) {
        this.firstName = firstName;
        this.middle = middle;
        this.lastName = lastName;
        this.fullName = firstName + " " + middle + " " + lastName;
    }
    getAge() {
        return 10;
    }
}
function greeter(person) {
    return "Hello, " + person;
}
let userLiteral = {
    firstName: "Bruno",
    lastName: "Giannotti"
};
let user = new Student("Bruno", "M", "Giannotti");
// document.body.textContent = greeter(user);
console.log(greeter(user));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNTdHVkeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRzU3R1ZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sT0FBTztJQUVULFlBQW1CLFNBQWlCLEVBQVMsTUFBYyxFQUFTLFFBQWdCO1FBQWpFLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoRixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFDOUQsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Q0FDSjtBQVNELFNBQVMsT0FBTyxDQUFDLE1BQWU7SUFDNUIsT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQzlCLENBQUM7QUFHRCxJQUFJLFdBQVcsR0FBRztJQUNkLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxXQUFXO0NBQ3hCLENBQUM7QUFFRixJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRWxELDZDQUE2QztBQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDIn0=