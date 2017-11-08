function sumOfTwo(a, b, v) {
  var diffs = [];
  for(var i = 0; i < a.length; i++) {
     var idx = v - a[i];
     diffs[idx] = a[i];
  }
  
  for(var j = 0; j < b.length; j++) {
     if(diffs[b[j]] != null) {
        return true;
     }
  }
  return false;
}

let a = [1, 2, 3];
let b = [10, 20, 30, 40];
let v = 42;
console.log(sumOfTwo(a,b,v));