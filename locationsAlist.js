let locs = [
  {"id": 1, "name": "San Francisco Bay Area", "parent_id": null},
  {"id": 2, "name": "San Jose", "parent_id": 3},
  {"id": 3, "name": "South Bay", "parent_id": 1},
  {"id": 4, "name": "San Francisco", "parent_id": 1},
  {"id": 5, "name": "Manhattan", "parent_id": 6},
  {"id": 6, "name": "New York", "parent_id": null}
];

function ListNode() {
  this._nodes = {};
}

ListNode.prototype.insert = function(node){
  if (!node.parent_id) {
    this._nodes[0] ? this._nodes[0].push(node) : this._nodes[0] = [node];
  } else {
    this._nodes[node.parent_id] ? this._nodes[node.parent_id].push(node) : this._nodes[node.parent_id] = [node];
  }
};

ListNode.prototype.sort = function(){
  let keys = Object.keys(this._nodes);
  keys.forEach((key) => {
    this._nodes[key] = this._nodes[key].sort((a, b) => a.name.localeCompare(b.name))
  })
};

ListNode.prototype.print = function(nodes, current, level){
  if (!nodes[current]){
    return;
  }
  nodes[current].forEach((location) => {
    console.log('-'.repeat(level) + location.name);
    if (nodes[location.id]) {
      this.print(nodes, location.id, level + 1)
    }
  })
};

let locationList = new ListNode();
locs.forEach((loc) => {
  locationList.insert(loc);
})
locationList.sort();
locationList.print(locationList._nodes, 0 , 0);