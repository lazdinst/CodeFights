//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

t = {
  "value": 1,
  "left": {
      "value": 0,
      "left": {
          "value": 3,
          "left": null,
          "right": null
      },
      "right": {
          "value": 1,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 4,
      "left": null,
      "right": null
  }
}

//Sum all the paths

function digitTreeSum(t) {
  let pathSums = [];
  function recurse(node, sum) {

    sum = sum * 10 + node.value;
    console.log(sum);
    
    if (!node.right && !node.left) {
      pathSums.push(sum);
      console.log(pathSums);
    } else {
      node.right ? recurse(node.right, sum) : '';
      node.left ? recurse(node.left, sum) : '';
    }
  }
  recurse(t, 0);
  return pathSums.reduce((total, sum) => {return total+sum} ,0); // Sum of all the paths values
}
console.log(digitTreeSum(t));