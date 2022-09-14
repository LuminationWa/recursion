 
const mergeSort = (array) => {
  if (array.length === 1) return array;
  else {
    let arr1 = mergeSort(array.slice(0, array.length / 2));
    let arr2 = mergeSort(array.slice(array.length / 2, array.length));
    let newArray = sortValues(arr1, arr2);
    // let newArray = arr1.concat(arr2);
    return newArray;
  };
};

const sortValues = (array1, array2) => {
  let newArray = [];
  let iterations = array1.length + array2.length;
  for (let i = 0; i < iterations; i++) {
    if (array1[0] < array2[0]) {
      newArray.push(array1[0]);
      array1.splice(0, 1);
    } else {
      newArray.push(array2[0]);
      array2.splice(0, 1);
    }
  }
  return newArray;
};

console.log(mergeSort([633, 82, 979, 924, 151, 145, 757, 1000]));
module.exports = mergeSort;
