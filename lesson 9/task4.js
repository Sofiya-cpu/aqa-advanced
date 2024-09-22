const myMap = new Map();
// initial properties
myMap.set("name", "Sofiya")
myMap.set("name2", "Firman")
myMap.set("age", 25);

// add email
myMap.set("email", "sophia.hrytsyna@gmail.com");

// delete age
myMap.delete("age");

// turn Map to objet to render it to console
console.log(Object.fromEntries(myMap));