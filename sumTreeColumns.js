tree = {
  "value": 4,
  "left": {
      "value": 1,
      "left": {
          "value": -2,
          "left": null,
          "right": {
              "value": 3,
              "left": null,
              "right": null
          }
      },
      "right": null
  },
  "right": {
      "value": 3,
      "left": {
          "value": 1,
          "left": null,
          "right": null
      },
      "right": {
          "value": 2,
          "left": {
              "value": -2,
              "left": null,
              "right": null
          },
          "right": {
              "value": -3,
              "left": null,
              "right": null
          }
      }
  }
}

// TRUE
//      4
//     / \
//   1   3
//   /   / \
// -2  1     2
//   \      / \
//   3     -2 -3


function sumTreeColumns(t) {
  let results = {}
  
  function recurse(node, col) {
    results[col] ? results[col] += node.value : results[col] = node.value;
    console.log("NODE VALUE ", node.value);
    console.log("COL ", col);
    console.log("RESULTS ", JSON.stringify(results));

    //If at leaf, exit
    if (!node.right && !node.left) {
      return;
    }

    //If node has a right branch
    if (node.right) {
      recurse(node.right, col + 1);
    }

    //If node has a left branch
    if(node.left) {
      recurse(node.left, col - 1);
    }

  }

  if(t) {
    recurse(t, 0);
  }

  return results;
}

console.log(sumTreeColumns(tree));