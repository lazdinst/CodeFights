function firstNotRepeatingCharacter(s) {
  let chars = {};
  let char = '';
  for( let i = 0; i < s.length; i++) {
    char = s[i];
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }
  for(const key in chars) {
    if(chars[key] === 1) {
      return key;
    }
  }  
  return '_';
}
// let s = "abacabad";
let s = "ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof";
console.log(firstNotRepeatingCharacter(s));