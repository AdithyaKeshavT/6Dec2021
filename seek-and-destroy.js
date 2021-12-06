function destroyer(arr) {
  let a = Array.from(arguments).splice(1)
  return arr.filter(b=>!a.includes(b));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);