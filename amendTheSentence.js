function amendTheSentence(s) {
  let char;
  for(let i = 0; i < s.length; i++) {
    // Iterate though the array
      //if current 65 <= char <= 95
      char = s.charCodeAt(i)
      if(char >= 65 && char <= 90) {
        firstHalf = s.substring(0, i);
        middle = i > 0 ? " " + s[i].toLowerCase() : s[i].toLowerCase();
        secondHalf = s.substring(i + 1, s.length);
        s = firstHalf + middle + secondHalf;
      }
  }
  return s;
}
let s = "CodefightsIsAwesome";
console.log(amendTheSentence(s));