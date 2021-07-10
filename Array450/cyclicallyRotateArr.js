// https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/

function rotate(arr) {
    let lastElem = arr[arr.length-1];
    for(let i = arr.length-1; i>0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElem;
    console.log(arr);
}

let arr = [1, 2, 3];
rotate(arr);