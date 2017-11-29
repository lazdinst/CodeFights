function maxDifferenceInArray(arr) {
  let maxDiff = 0;
  let diff = null;
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    for(let j = i+1; j < arr.length; j++) {
      target = arr[j];
      if (current < target && j > i) {
        diff = target - current;
        maxDiff = diff > maxDiff ? diff : maxDiff;
      }
    }
  }
  return maxDiff;
}

var arr =  [2, 3, 10, 2, 4, 8, 1];
console.log(maxDifferenceInArray(arr)); // 8

arr = [7, 9, 5, 6, 3, 2]
console.log(maxDifferenceInArray(arr)); // 2

arr = [666, 555, 444 , 33, 22, 23];
console.log(maxDifferenceInArray(arr)); // 1