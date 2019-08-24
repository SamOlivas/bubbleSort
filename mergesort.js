function defaultComparator(a, b) {
  return (a<b)
};

function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length/2)
  let firstHalf = wholeArray.slice(0,midpoint);
  let secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
};

function merge(arr1, arr2, comparator = defaultComparator) {
  const mergedArray = [];
  while (arr1.length || arr2.length) {
    if (!arr1.length) {
      mergedArray.push(arr2.shift())
      continue
    }
    if (!arr2.length) {
      mergedArray.push(arr1.shift())
      continue
    };
    if (comparator(arr1[0], arr2[0])) {
      mergedArray.push(arr1.shift())
    } else {
      mergedArray.push(arr2.shift())
    };
  };
  return mergedArray
};

function mergeSort(arr, comparator = defaultComparator) {
  function reduceToElement(arr) {
    if (arr.length <= 1 ) {
      return arr
    };
    const [firstHalf, secondHalf] = split(arr);
    return (merge(reduceToElement(firstHalf), reduceToElement(secondHalf),comparator))
  };
  return reduceToElement(arr);
};

const data1 = [ 0, 9675, 34, 2, 2, 23, 4, 12, 5 , 35, 1 ]
const data2 = [ 2, 1, 4, 0]
console.log(mergeSort(data1))

