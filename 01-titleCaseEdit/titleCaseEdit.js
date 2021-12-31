function titleCaseEdit(title) {
  // Insert code here;
  return title.split(' ').map(word=> word.charAt(0).toUpperCase()+word.substring(1)).join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;