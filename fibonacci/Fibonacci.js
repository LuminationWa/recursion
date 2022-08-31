// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.

const fibonacci = (number) => {
  let array = [0, 1];
  for (let i = 1; i < number - 1; i++) {
    array.push(array[i] + array[i - 1])
  };
  return array;
};

module.exports = fibonacci;
