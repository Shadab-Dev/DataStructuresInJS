// Given two SORTED arrays, merge them together in a single array
// Input Array can only have numbers and it must be sorted
function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    let index1 = 0;
    let index2 = 0;
    while(arr1[index1] || arr2[index2]) {
        console.log(arr1[index1], arr2[index2]);
        if (!arr2[index2] || (arr1[index1] < arr2[index2])){
            mergedArray.push(arr1[index1]);
            index1++;        
        } else {
            mergedArray.push(arr2[index2]);
            index2++;   
        }
        
    }
    console.log(mergedArray.toString());
}

mergeArrays([0,2], [1,2,3,25]);

// mergeArrays([1,2,3,9,null], [5,9,24]);