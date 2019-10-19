const numbers = process.argv.slice(2)
let total = 0;

const sum = number => total += Number(number);
numbers.forEach(sum);

console.log(`The sum is: ${ total }`);