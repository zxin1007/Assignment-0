function pairSum(nums, target) {
  // Insert code here;
  if (nums.length<=1){
    throw err
  }
  for (let i=0;i<nums.length;i++){
      let required = target - nums[i]
      if (nums.includes(required)&&i!=nums.indexOf(required)){
        return true
      }
  }
  return false
}

// Do not edit this line;
module.exports = pairSum;