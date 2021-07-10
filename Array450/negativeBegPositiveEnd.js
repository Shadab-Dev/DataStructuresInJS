// https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/
// Use the 2 pointer aproach, one ebeing the start of array and one being the last index, then keep swapping as per requirement

function moveElements(arr) {
    let start = 0,
        end = arr.length - 1;

    while (start < end) {
        if (arr[start] >= 0 && arr[end] < 0) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++; end--;
            continue;
        }

        if (arr[start] < 0) {
            start++;
            continue;
        }

        if(arr[end] >= 0) {
            end--;
        }
    }
    return arr;
}

let arr = [2, -1, -2, 0, 0, -8, 1, -9, 22, -10];
console.log(moveElements(arr));