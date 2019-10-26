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

const print = name => 
  console.log(chalk.default.blue(name));

names
  .sort(byAlphabeticalOrder)
  .map(string.underscore)
  .forEach(print);
