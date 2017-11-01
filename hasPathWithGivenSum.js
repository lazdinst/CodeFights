

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

t = {
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
              "value": -4,
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

// FALSE
//     4
//    / \
//   1   3
//  /   / \
// -2  1   2
//   \    / \
//    3  -4 -3

function hasPathWithGivenSum(t, s) {
  if(!t) {
    if(t === null && s === 0) {
      return true;
    }
    return false;
  }

  let results = [];

  function recurse(tree, rollSum) {
    //Base Case - Reached the End of the Tree
    rollSum+=tree.value;

    if ((tree.left === null) && (tree.right === null)) {
      // detect if rolling sum is equal to sum
      // debugger;
      if(rollSum === s) {
        results.push(true);
      } else {
        results.push(false);
      }
      return;
    }

    //If not a leaf
      //Add the current tree value to rolling sum

    if(tree.right) {
      recurse(tree.right, rollSum);
    }

    if(tree.left) {
      recurse(tree.left, rollSum);
    }

  }

  recurse(t, 0);

  return results.reduce((result, current) => {
    return result || current;
  }, false);
}

console.log(hasPathWithGivenSum(t, 7));
console.log(hasPathWithGivenSum(tree, 7));
console.log(hasPathWithGivenSum(null, 0));