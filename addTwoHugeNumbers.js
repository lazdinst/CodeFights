

let total = "987654340000"; let result = [];
for( let i = 0; i < total.length; i+=4) {
  result.push(parseInt(total.substr(i, 4)));
}
console.log(result);