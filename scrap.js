function reverseArr(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++; j--;
  }
  return arr;
}

let arr = [1, 2, 3, 8, 9, 8, 8, 4, 5, 1023, 23, 99];
finalArr = reverseArr(arr);
console.log(finalArr);

