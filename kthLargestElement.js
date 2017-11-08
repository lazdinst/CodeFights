function kthLargestElement(nums, k) {
  let heap = [null];
  //left child = i * 2;
  //right = i * 2 + 1;
  //parent = i / 2; // be sure to floor
  

}

function MinHeap() {
  this.heap = [null];

  this.insert = (num) => {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      
      while(this.heap[Math.floor(idx/2)] > this.heap[idx]) {
        let temp;
        if (idx >= 1) { //If you havent reached the root node
          //swap
          // temp = this.heap[idx];
          // this.heap[idx] = this.heap[Math.floor(idx/2)];
          // this.heap[Math.floor(idx/2)] = temp;

          [this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
          if (Math.floor(idx/2) > 1) { //IF the Math.floor(idx/2) node is not the root node
            idx = Math.floor(idx/2);
          } else {
            break;
          }
        }
      } 
    }
  }

}
 
let heap = new MinHeap();
let arr = [3, 7, 4, 8, 2, 6];
arr.forEach((el)=>{
  heap.insert(el);
});

console.log(heap.heap)