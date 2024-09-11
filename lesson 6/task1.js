// function declaration

console.log(areaOfRectangle(5, 10)); // can be called before or after the function

function areaOfRectangle(width, height) {
    return width * height;
}

// function expression

const anotherAreaOfRectangle = function (width, height) {
    return width * height;
}

console.log(anotherAreaOfRectangle(5, 10));

// arrow function

const oneMoreAreaOfRectangle = (width, height) => width * height;
console.log(oneMoreAreaOfRectangle(5, 10));
