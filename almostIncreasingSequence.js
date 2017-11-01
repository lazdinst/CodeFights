function almostIncreasingSequence(arr) {
  let count = 0;
  for( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] <= arr[i-1]) {
      count++;
      if (arr[i] <=  arr[i - 2] && arr[i+1] <= arr[i-1]) {
        return false;
      }
    }
  }
  return true;
}

//console.log('Expected False : ', almostIncreasingSequence([1,3,2,1]));
console.log('Expected True : ', almostIncreasingSequence([1,3,2]));
console.log('Expected False : ', almostIncreasingSequence([1, 2, 1, 2]));
// console.log(isIncreasingInOrder([1,2,3]));