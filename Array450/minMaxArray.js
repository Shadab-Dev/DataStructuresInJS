// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/
// Best approach is to select a pair and compare 2 values at once. This has a O(3 * n/2)
// why O(3 * n/2)? because we are comparing 2 elements at once and each iteration as 3 if conditions
// other approach is the linear search approach 

function findMinMax(arr) {

    // take as first element as min and max
    let obj = { min: arr[0], max: arr[0] };
    let i = 1;

    while (i < arr.length - 1) {

        // compare 2 elements with each other to find which one is greater / smaller
        if(arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }

        if (arr[i] < obj.min) {
            obj.min = arr[i];
        } 

        if(arr[i+1] > obj.max) {
            obj.max = arr[i+1];
        }

        i += 2;
  }
  return obj;
}

// let arr = [4, 2, 3, 0, 1];
let arr = [23, 78, 22, 22, 23, 99, 22, 2, 78];
console.log(findMinMax(arr));