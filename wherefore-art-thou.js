function whatIsInAName(collection, source) {
  const arr = [...collection];
  // Only change code below this line
  let srcKeys = Object.keys(source);
  // Only change code above this line
  return arr.filter(obj => srcKeys.every(key =>obj.hasOwnProperty(key) && obj[key] === source[key]));
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });