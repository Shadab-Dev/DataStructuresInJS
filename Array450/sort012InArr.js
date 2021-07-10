// simple counting technique
function sortArr(arr) {
  let finalArr = [],
      countZero = 0,
      countOne = 0,
      countTwo = 0;
  
  // Iterate through the array once to find the count of 0s 1s and 2s
  for(let i=0; i<arr.length; i++) {
    if(arr[i]===0) {
      countZero++;
    } else if(arr[i]===1) {
      countOne++;
    } else {
      countTwo++;
    }
  }

  // In the second loop, push the elements as per the count which we get from the previous loop
  // This makes the complexity as 0(2n)
  for(let j=0; j<arr.length; j++) {
    if(countZero > 0) {
      finalArr.push(0);
      countZero--;
    } else if(countOne > 0) {
      finalArr.push(1);
      countOne--;
    } else {
      finalArr.push(2);
      countTwo--;
    }
  }
  return finalArr;
}


let arr = [1, 2, 2, 1, 0, 1, 0, 1];
// let arr = [1,1,1,1,2,2,2,2,0,0,0,0];
console.log(sortArr(arr));