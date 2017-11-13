function matrixElementsSum(m) {
  let rl = m.length;
  let cl = m[0].length;
  let costs = [];
  for(let row = 0; row < rl; row++) {
    for(let col = 0; col < cl; col++) {

      //If not a ghost room
      if (1) { //m[row][col] > 0
        //If rows above are defined and is not a ghost room
        var currentRoomCost = m[row][col];
        var aboveCurrentRoomCost = !m[row-1] ? undefined : m[row-1][col];
        var aboveRooms = [];
        for(let i = 0; i < row; i++) {
          aboveRooms.push(m[row - i - 1][col]);
        }
        console.log("Row", row, "Col", col, "Rooms", aboveRooms);
        //Outside of matrix
        if (aboveCurrentRoomCost === undefined || aboveCurrentRoomCost > 0) {
         costs.push(currentRoomCost);
        }

      }
    }
  }
  return costs;
}
var matrix = [[1,1,1,0], 
              [0,5,0,1],
              [2,1,3,10]]

console.log(matrixElementsSum(matrix));
      // [[x, 1, 1, 2], 
      // [x, 5, x, x], 
      // [x, x, x, x]]



      //var matrix = [[0,1,1,2], [0,5,0,0], [2,0,3,3]];

//console.log(matrixElementsSum(matrix));
