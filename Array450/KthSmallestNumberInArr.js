function findKSmallestNumber(arr, k) {
  let sortedArr = arr.sort((a, b) => {return a - b;});
  
  if(k > arr.length || k < 1) {
    console.log(`Invalid value of K: ${k}`);
    return null;
  }

  return sortedArr[k - 1];
}

let arr = [5, 77, 99, 2, 8, 22, 100, 1];
console.log(findKSmallestNumber(arr, 200));

