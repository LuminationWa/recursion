// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.

let arr = [0, 1];

const fibonacciRec = (number) => {
  if (arr.length === number) {
    console.log(arr);
    return arr;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibonacciRec(number);
  };

  // let array = [0, 1];
  // for (let i = 1; i < number - 1; i++) {
  //   array.push(array[i] + array[i - 1])
  // };
  // return array;
};

module.exports = fibonacciRec;
