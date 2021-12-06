function diffArray(arr1, arr2) {
  const newArr = [...arr1,...arr2];
  return newArr.filter(a=>!arr1.includes(a)||!arr2.includes(a))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);