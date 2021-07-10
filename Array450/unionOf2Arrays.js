// https://www.geeksforgeeks.org/find-union-and-intersection-of-two-unsorted-arrays/
// use sets to add elements from both the arrays to find the unique elements in each array and find the count

function findUnion (arr1, arr2) {
    let union = new Set();
    arr1.forEach(element => {
        union.add(element);
    });

    arr2.forEach(element => {
        union.add(element);
    })

    console.log(union);
    console.log(union.size);
}

let arr1 = [1, 2, 3, 5, 5, 6, 1, 2, 9, 0];
let arr2 = [2, 3, 6];

findUnion(arr1, arr2);