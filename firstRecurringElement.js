//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    if(input.length <= 1) {
        return undefined;
    }

    var elementMap = {};
    for(let i=0; i<input.length; i++) {
        if(elementMap[input[i]])
            return input[i];
        else 
            elementMap[input[i]] = true;
    }
    console.log(elementMap);
    return undefined;
} 

console.log(firstRecurringCharacter([0,1,1,0,3]));
console.log(firstRecurringCharacter(['a','b','c','d','c']));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2