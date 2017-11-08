let t = {
  "value": -1,
  "left": {
      "value": 5,
      "left": null,
      "right": null
  },
  "right": {
      "value": 7,
      "left": null,
      "right": {
          "value": 1,
          "left": null,
          "right": null
      }
  }
}

let tree =  {
  "value": -1,
  "left": {
      "value": 5,
      "left": {
          "value": -1,
          "left": {
              "value": 10,
              "left": null,
              "right": null
          },
          "right": null
      },
      "right": null
  },
  "right": {
      "value": 7,
      "left": null,
      "right": {
          "value": 1,
          "left": {
              "value": 5,
              "left": null,
              "right": null
          },
          "right": null
      }
  }
}

function largestValuesInTreeRows(t) {
  if(!t) {
    return [];
  }
  let queue = [t];
  let results = [];
  while(queue.length) {
    let col = 0;
    //Define the Row / Level width
    let levelWidth = queue.length;
    //Define smallest possible int
    let max = Number.MIN_SAFE_INTEGER;
    
    while(col < levelWidth) {
      let node = queue.shift();
      node.value >= max ? max = node.value : '';
      node.left !== null ? queue.push(node.left) : '';
      node.right !== null ? queue.push(node.right) : '';
      col++;
    }
    //Push the Max of the Level / Row
    results.push(max);
  }
  return results;
}

console.log(largestValuesInTreeRows(tree)); // [-1, 7, 1]