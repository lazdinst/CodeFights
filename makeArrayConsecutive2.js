function makeArrayConsecutive2(arr) {
  arr.sort((a,b)=>(a - b));
  let diff;
  let count = 0;
  for (var i =0; i< arr.length - 1; i++) {

    diff = arr[i + 1] - arr[i];
    if (diff !== 1) {
      count += diff - 1;
    }
  }
  return count;
}


const statues = [6, 2, 3, 8]
// Ratiorg needs statues of sizes 4, 5 and 7.
console.log(makeArrayConsecutive2(statues));