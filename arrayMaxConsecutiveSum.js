//https://www.youtube.com/watch?v=86CQq3pKSUw 
//https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm_(Algorithm_3:_Dynamic_Programming)
function arrayMaxConsecutiveSum2(inputArray) {
  //Set the currentSum and globalMax to the first element in the array
  currentSum = globalMax = inputArray[0];
  solutionSubArray = [];

  //Iterate through the input array, skipping the first element
  // We skip it because we already set the currentSum equal to the first element
  for( let i = 1; i < inputArray.length; i++) {
    //Set the currentElement for better composability
    currentElement = inputArray[i];

    //Find the max of the currentElement and the sum of the previous elements (currentSum) + currentElement
    currentSum = Math.max(currentElement, currentSum + currentElement);

    //If the currentSum is greater than the global
    //Set Global to the currentSum
    if(currentSum > globalMax) {
      globalMax = currentSum;
      solutionSubArray.push(i);
    }

  }
  return globalMax;
}

let inputArray = [-3, -2, -1, -4];
console.log(arrayMaxConsecutiveSum2(inputArray));
//inputArray = [-2, 2, 5, -11, 6];
//console.log(arrayMaxConsecutiveSum2(inputArray));