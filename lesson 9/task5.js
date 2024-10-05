const users = [
    { name: "Pedro", email: "ped@email.ua", age: 33 },
    { name: "Salvatore", email: "salvator@ukr.net", age: 60 },
    { name: "Silvestr", email: "silver@star.com", age: 18 },
    { name: "Gustavo", email: "mamaMia@email.it", age: 27 },
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}