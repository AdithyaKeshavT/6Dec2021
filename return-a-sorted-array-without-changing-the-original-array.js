const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let a = arr.slice()
  a.sort((b,c)=> b-c)
  return a
  // Only change code above this line
}

nonMutatingSort(globalArray);