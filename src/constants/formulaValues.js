const isNotNumber = input =>
  input === '(' ||
  input === ')' ||
  input === '+' ||
  input === '-' ||
  input === '*' ||
  input === '/' ||
  input === 'Mod';

const isNumber = input => !isNotNumber(input);

const isOperator = input =>
  input === '+' ||
  input === '-' ||
  input === '*' ||
  input === '/' ||
  input === 'Mod';

const priority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  Mod: 2,
};

export { isNotNumber, isNumber, isOperator, priority };
