function checkPalindrome(inputString) {
  const arr = inputString.split('');
  return arr.join('') === arr.reverse().join('') ? true : false;
}
console.log(checkPalindrome('abac'));