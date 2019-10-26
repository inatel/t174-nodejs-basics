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
  const colors = ['yellow', 'blueBright', 'red'];
  const colorIndex = index % colors.length;
  const color = colors[colorIndex];
  console.log(chalk[color](name));
}

names
  .sort(byAlphabeticalOrder)
  .map(string.underscore)
  .forEach(print);
