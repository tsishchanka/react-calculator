const isNotNumber = input =>
  input === '(' ||
  input === ')' ||
  input === '+' ||
  input === '-' ||
  input === '*' ||
  input === '/' ||
  input === '%';

const isNumber = input => !isNotNumber(input);

const isOperator = input =>
  input === '+' ||
  input === '-' ||
  input === '*' ||
  input === '/' ||
  input === '%';

const priority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 2,
};

export { isNotNumber, isNumber, isOperator, priority };
