arr1 = ['a', null, 'c', 'd', 'd'];
arr2 = ['x', 'r', 'z'];

function findCommon(arr1, arr2) {
  let obj1 = {};
  for(let i=0; i<arr1.length; i++) {
    if(!obj1[arr1[i]]) {
      const item = arr1[i];
      obj1[item] = true;
    }
  }

  console.log(obj1);

  // arr2.forEach(element => {
  //   console.log(element);
  //   if (obj1[element] === true) {
  //     return true;
  //   }
  // })
  // For each is a function, so return true just returns back from forEach loop instead of ending the parent method. Silly me..

  for(let i=0; i<arr2.length; i++) {
    if(obj1[arr2[i]])
      return true;
  }

  return false;
}

findCommon(arr1, arr2);