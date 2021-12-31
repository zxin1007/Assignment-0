function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let count=0
  for (let num of nums){
    if(num%2===0) count+=1
  }
  return count
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;