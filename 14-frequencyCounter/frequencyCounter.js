function frequencyCounter(word) {
  // Insert code here;
  const freqencyArr = {}
  for (let char of word){
    if (freqencyArr[char]) freqencyArr[char]+=1
    else freqencyArr[char]=1
  }
  return freqencyArr
}

// Do not edit this line;
module.exports = frequencyCounter;