function calculate(value1, operation, value2) {
    switch(operation) {
      case 'plus':
        return value1 + value2;
      case 'minus':
        return value1 - value2;
      case 'multiply':
        return value1 * value2;
      case 'divide':
        return value1 / value2;
        case 'modulus':
        return value1 % value2;
        case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
        case '%':
        return value1 % value2;
      default:
        return 'Error: Invalid operation';
    }
  }

  console.log(calculate(2, '-', 3));
  console.log(calculate(5, '+', 25));

// ANOTHER WAY

// function calculate(value1, operator, value2) {
//   if (operator == '+', operator == 'addition') {
//       return value1 + value2;
//   } else if (operator == '-', operator == 'subtraction') {
//     return value1 - value2;
//   } else if (operator == '*', operator == 'multiplication') {
//     return value1 * value2;
//   } else if (operator == '/', operator == 'division') {
//     return value1 / value2;
//   }  else if (operator == '%', operator == 'modulus') {
//       return value1 % value2;
//   } else{
//     return "Wrong  operator. Please use correct operator"
//   }
//   }

// console.log(calculate(2, '+', 3));
// console.log(calculate(5, '-', 25));