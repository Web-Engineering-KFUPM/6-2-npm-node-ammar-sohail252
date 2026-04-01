import _ from "lodash";

export function parseNumbers(input) {
  const wrappedNumbers = _.map(input, (value) => {
    const number = Number(value);

    if (Number.isNaN(number)) {
      return null;
    }

    return { value: number };
  });

  return _.map(_.compact(wrappedNumbers), "value");
}

export function isValidOperation(operation) {
  const validOperations = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOperations, operation);
}
