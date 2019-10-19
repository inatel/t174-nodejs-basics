const convertToNumber = value => Number(value);

const numbers = process.argv.slice(2)
    .map(convertToNumber);

const sum = (total, number) => total + number;
const total = numbers.reduce(sum);

console.log(`The sum is: ${ total }`);