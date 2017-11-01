
/* 
NOTES:

Number of sides for each interesting polygon increases by 8
This correlates to number of boxes to add onto the previous shape to reach new shape

1-interesting polygon: 1 box (0-ip box [1] + 0)
2-intersting polygon: 5 box (1-ip box [1] + 4)
3-interesting polygon: 13 box (2-ip box [5] + 8)
4-interesting polygon: 25 box (((4 * 4) - 4 ) + 3-ip[13]);

5-interesting polygon:  box (4-ip box [] + 16)
*/

// Using recursion to use the previous shape's area plus a multiple of 4 to find the new shape's area

function shapeArea(n) {
  if (n == 1)
  { 
      return 1
  } else {
      return ( (n*4)-4 ) + shapeArea(n-1);
  }

}
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
