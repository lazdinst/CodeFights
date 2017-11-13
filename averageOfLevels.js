let tree = {
  "value": 3,
  "left": {
      "value": 9,
      "left": null,
      "right": null
  },
  "right": {
      "value": 20,
      "left": {
          "value": 15,
          "left": null,
          "right": null
      },
      "right": {
          "value": 7,
          "left": null,
          "right": null
      }
  }
}

function averageOfLevels(tree) {
  let queue = [];
  let results = {};
  let currentLevel = 0;
  tree.level = currentLevel;
  queue.push(tree);

  while(queue.length) {
    let node = queue.shift();    
    if (node.level > currentLevel) {
      currentLevel++;
    }
    results[currentLevel] = results[currentLevel] || [];
    results[currentLevel].push(node.value);

    if (node.left) {
      node.left.level = currentLevel + 1;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.level = currentLevel + 1;
      queue.push(node.right);
    }
  }

  let averages = Object.keys(results).map((level) => {
    return results[level].reduce((sum, value) => {return sum + value},0) / results[level].length;
  });
  return averages;
}

console.log(averageOfLevels(tree));