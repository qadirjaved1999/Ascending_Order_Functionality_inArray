let array = [500, 700, 100, 900, 200, 100, 5, 7, 8];
function sortingArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log("UnSorted Array => ", array);
let result = sortingArray(array);
console.log("Sorted Array", result);
