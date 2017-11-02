let a = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
        ];
console.log(rotateImage(a));
//Output:

//   [
//    [7, 4, 1],
//    [8, 5, 2],
//    [9, 6, 3]
//    ]

function rotateImage(a) {
  let n = a.length;
  let temp;
  for(let row = 0; row < n / 2; row++) {
    for(let col = 0; col < Math.floor(n/2); col++) {
      console.log("ROW ", row, " COL ", col);
      temp = a[row][col];

      a[row][col] = a[n - 1 - col][row];
      console.log(a);
      a[n - 1 - col][row] = a[n - 1 - row][n - 1 - col];
      console.log(a);
      a[n - 1 - row][n - 1 - col] = a[col][n - 1 - row];
      console.log(a);
      a[col][n - 1 - row] = temp;
      console.log(a);
    }
  }
  return a;
}
