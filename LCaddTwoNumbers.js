var addTwoNumbers = function(l1, l2) {
  function recurse(ListNode, result) {
      result.push(ListNode.val);
      if (ListNode.next) {
          return recurse(ListNode.next, result);    
      } else {
          return result.reverse();
      }
  }
  var arr1 = recurse(l1, []);
  var arr2 = recurse(l2, []);
  
  function add(arr1, arr2) {
      let result = [];
      var carry = 0;
      for(let i = 0; i < arr1.length; i++) {
          sum = arr1[i] + arr2[i];
          if (sum < 10) {
              result.push(sum + carry);
          } else {
              result.push(0);
              carry = 1;
          }
      }
      return result;
  }
   return add(arr1, arr2);
};


function add(arr1, arr2) {
  let result = [];
  var carry = 0;
  var l = arr1.length;
  var index = 0;
  while(l > 0) {
    sum = arr1[index] + arr2[index];
    if (sum < 10) {
        result.push(sum + carry);
        index++;
    } else {
        result.push(0);
        carry = 1;
        
        l ++;
    }
  }
  return result;
}

console.log(add([5],[5])); // [0,1]