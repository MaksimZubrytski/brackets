module.exports = function check(str, bracketsConfig) {
  let bracketsArray = bracketsConfig.map(bracketsArray => (bracketsArray.join('')))
  let newStr = str;
  for(let i = 0; i < bracketsArray.length; i++) {
    if(newStr.includes(bracketsArray[i])) {
      newStr = newStr.replace(bracketsArray[i], "")
      i = -1
    }
  }
  return !newStr;
}
