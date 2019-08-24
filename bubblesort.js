
bubbleSort.swap = (arr, i) => {
  let temp = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = temp;
};

function bubbleSort(arr) {
  let timesRan = 0;
  let swapsMade = true

  while (swapsMade) {
    swapsMade = false;
    timesRan ++;
    for ( let i=0; i < arr.length-1; i++) {
      if ( arr[i] > arr[i+1]) {
        bubbleSort.swap(arr, i)
        swapsMade = true;
      };
    };
  };
  return arr;
};

const data = [ 0, 9675, 34, 2, 2, 23, 4, 12, 5 , 35]

console.log(bubbleSort(data))
