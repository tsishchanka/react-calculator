import { isNumber, isOperator, priority } from '../constants/formulaValues';

const historyOperations = [];
let calculatedResult = 0;

export function handleExecuteCommand(command) {
  calculatedResult =
    Math.round(command().execute(calculatedResult) * 1000) / 1000;

  historyOperations.push(command);
}

export const handleUndo = () => {
  const command = historyOperations.pop();

  calculatedResult = command().undo(calculatedResult).toString();
};

export const toOperand = arrFormula => {
  const result = [];
  const stack = [];

  arrFormula.forEach(item => {
    if (isNumber(item)) {
      result.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.length > 0) {
        const pulledItem = stack.pop();

        if (pulledItem === '(') break;
        else result.push(pulledItem);
      }
    } else if (isOperator(item)) {
      while (stack.length > 0) {
        const peekedItem = stack[stack.length - 1];

        if (isOperator(peekedItem) && priority.peekedItem >= priority.item) {
          result.push(peekedItem);
          stack.pop();
        } else break;
      }

      stack.push(item);
    }
  });

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
};

export const evaluateOperand = arrOperand => {
  const stack = [];

  arrOperand.forEach(item => {
    if (isNumber(item)) {
      stack.push(item);
    } else if (isOperator(item)) {
      const num1 = Number.parseFloat(stack.pop());
      const num2 = Number.parseFloat(stack.pop());
      const AddCommand = () => ({
        execute: () => num2 + num1,
      });
      const SubtractCommand = () => ({
        execute: () => num2 - num1,
      });
      const MultiplyCommand = () => ({
        execute: () => num2 * num1,
      });
      const DivideCommand = () => ({
        execute: () => num2 / num1,
      });
      const RestCommand = () => ({
        execute: () => num2 % num1,
      });
      switch (item) {
        case '+':
          handleExecuteCommand(AddCommand);

          break;
        case '-':
          handleExecuteCommand(SubtractCommand);

          break;
        case '*':
          handleExecuteCommand(MultiplyCommand);

          break;
        case '/':
          handleExecuteCommand(DivideCommand);

          break;
        case 'Mod':
          handleExecuteCommand(RestCommand);

          break;
        case '+-':
          handleUndo();

          break;

        default:
          console.log('default');
          break;
      }

      stack.push(`${calculatedResult}`);
    }
  });

  return Number.parseFloat(stack[0]);
};

export const evaluate = arrFormula => {
  const arrOperand = toOperand(arrFormula);

  return evaluateOperand(arrOperand);
};
