function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count=0
    for (let num of nums){
      if (num<target) count+=1
    }
    return count
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;