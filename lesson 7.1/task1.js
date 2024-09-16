function handleNum(num, even, odd) {
    if (num % 2 === 0) {
        even(num);
    } else {
        odd(num);
    }
}

const handleEven = (num) => {
    console.log(`The number ${num} is even.`);
}

const handleOdd = (num) => {
    console.log(`The number ${num} is odd.`);
}

handleNum(24, handleEven, handleOdd);
handleNum(31, handleEven, handleOdd);