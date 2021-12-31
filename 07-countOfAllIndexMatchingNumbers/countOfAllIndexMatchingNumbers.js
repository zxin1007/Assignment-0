function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let count=0
  let index=0; 
  for(let num of nums){
    if (num===index){
      count+=1
    }
    index+=1
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;