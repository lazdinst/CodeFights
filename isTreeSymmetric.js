t = {
  "value": 1,
  "left": {
      "value": 2,
      "left": {
          "value": 3,
          "left": null,
          "right": null
      },
      "right": {
          "value": 4,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 2,
      "left": {
          "value": 4,
          "left": null,
          "right": null
      },
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  }
}

tree = {
  "value": 1,
  "left": {
      "value": 2,
      "left": null,
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 2,
      "left": null,
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  }
}
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

function isTreeSymmetric(t) {

  function recurse(node1, node2) {
    //Do the leaves equal each other
    if (!node1 && !node2) {
      return true;
    }

    // For two trees to be mirror images, the following three
    // conditions must be true
    // 1 - Their root node's key must be same
    // 2 - left subtree of left tree and right subtree
    //      of right tree have to be mirror images
    // 3 - right subtree of left tree and left subtree
    //      of right tree have to be mirror images
    if (!node1 || !node2) {
      return false;
    }

    if (node1.value === node2.value) {
      return recurse(node1.left, node2.right) && recurse(node1.right, node2.left);
    }
    // if neither of the above conditions is true then
    // root1 and root2 are mirror images
    return false;
  }

  return recurse(t, t);
}

console.log(isTreeSymmetric(t));
console.log(isTreeSymmetric(tree));