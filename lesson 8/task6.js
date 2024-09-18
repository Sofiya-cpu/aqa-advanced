const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copyOfNumbersList = Array.from(numbersList);

copyOfNumbersList.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
// or: copyOfNumbersList.sort((a, b) => a - b); 

console.log(numbersList);
console.log(copyOfNumbersList);