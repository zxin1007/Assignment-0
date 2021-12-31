function isPalindrome(word) {
  // Insert code here;
  if (word.length===1){
    return true
  }
  let start=0
  let end = word.length-1
  while (start<=end){
    if (word.charAt(start)!=word.charAt(end)){
      return false
    }
    start+=1
    end-=1
  }
  return true
}

// Do not edit this line;
module.exports = isPalindrome;