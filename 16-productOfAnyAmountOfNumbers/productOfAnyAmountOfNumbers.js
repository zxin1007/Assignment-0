function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let sum=1
  for (let num of [...args]){
      sum*=num
  }
  return sum
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;