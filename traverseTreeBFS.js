function traverseTree(t) {
  if(!t) {
    return [];
  }
  let queue = [];
  let arr = [];
  queue.push(t);

  while(queue.length !== 0) {
      let node = queue.shift();
      arr.push(node.value);
      node.left !== null ? queue.push(node.left) : '';
      node.right !== null ? queue.push(node.right) : '';
  }

  return arr;
}

t = {
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
      "value": 4,
      "left": {
          "value": 5,
          "left": null,
          "right": null
      },
      "right": null
  }
}

console.log(traverseTree(t));