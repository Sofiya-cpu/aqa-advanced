// as object literal

const Student = {
    firstName: "Sofiya",
    lastName: "Firman",
    age: 25,
    courses: ["JavaScript", "NodeJS", "Playwrite"]
}

console.log(Student);


// or as adding properties to an object

const student1 = {};

student1.firstName = "Letters";
student1.lastName = "Numbers";
student1.age = 21;
student1.courses = ["A123", "B123", "C678"];

console.log(student1);

// or as nested objects

function Student3(firstName, lastName, age, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
}

const linolium = new Student3("Linolium", "Black", 56, ["Floor", "Cement"]);

console.log(linolium);