// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
  const arr = inputArray.slice();
  let largetsProduct = null;
  let targetProduct;
  for(let i = 0; i < arr.length; i++) {
    targetProduct = arr[i] * arr[i+1];
    largetsProduct = i === 0 ? targetProduct : largetsProduct;
    largetsProduct = targetProduct > largetsProduct ? targetProduct : largetsProduct;
  }
  return largetsProduct;
}
inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));