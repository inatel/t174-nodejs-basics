const chalk = require('chalk');
const string = require('useful-string');

const names = [
  'Edson de Senna Junior',
  'Filipe Henrique Benjamim de Arruda',
  'Ário Guilherme Macedo',
  'André Luiz Oneti Carvalho'
]

const byAlphabeticalOrder = (wordA, wordB) => 
  ('' + wordA).localeCompare(wordB);

const print = (name, index) => {
  const isEven = index % 2;
  if(isEven) {
    console.log(chalk.default.yellow(name));
  } else {
    console.log(chalk.default.blueBright(name));
  }
} 

names
  .sort(byAlphabeticalOrder)
  .map(string.underscore)
  .forEach(print);
