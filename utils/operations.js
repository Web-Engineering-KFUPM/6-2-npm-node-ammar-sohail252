export function add(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.slice(1).reduce((result, number) => result - number, numbers[0]);
}

export function multiply(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((product, number) => product * number, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.slice(1).reduce((result, number) => {
    if (number === 0) {
      return NaN;
    }

    return result / number;
  }, numbers[0]);
}
