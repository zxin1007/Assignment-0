function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count=0
  for (let num of nums){
    if(num>=start&&num<=end) count+=1
  }
  return count
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;