function reverseString(string) {
    let finalString = [];
    for(let i=string.length-1; i>=0; i--) {
        finalString.push(string[i]);
    }
    return finalString;
}

let finalString = reverseString("Hello");
console.log(finalString.join(''));