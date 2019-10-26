import { BMIService } from './bmi.service';

const weight = 77;
const height = 1.71;
const decimalDigits = 2;

const bmi = BMIService
  .getIndex(weight, height)
  .toFixed(decimalDigits);

console.log('BMI is: ' + bmi);