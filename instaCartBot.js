//Round 3 
var orders = [["23:15","23:35"], ["23:00","23:31"]]
var shoppers = [["23:00","23:59"], ["22:30","23:30"]]
var leadTime = [20, 30];
console.log("Test 01")
console.log(busyHolidays(shoppers, orders, leadTime), "EXPECTED " + true);

shoppers = [["15:10","16:00"], ["17:50","22:30"], ["13:00","14:40"]]
orders = [["14:30","15:00"]]
leadTime = [15]
console.log("Test 02")
console.log(busyHolidays(shoppers, orders, leadTime), "EXPECTED " + false);

var shoppers = [["15:10","16:00"], ["17:50","22:30"], ["13:00","14:40"]]
var orders = [["14:30","15:00"]];
var leadTime = [15, 30];
console.log("Test 03")
console.log(busyHolidays(shoppers, orders, leadTime));

//true if the shoppers can fulfill each order, false otherwise.
function busyHolidays(shoppers, orders, leadTime) {
  let results = [];
  orders.forEach((order, index) => {
    var orderHasAShopper = false;
    orderStart = order[0];
    orderStartMS = converToMiliseconds(orderStart);
    orderFinish = order[1];
    orderFinishMS = converToMiliseconds(orderFinish);
    lt = leadTime[index]*60000; //convert to ms
    shoppers.forEach((shopper) => {
      shopperStart = shopper[0];
      shopperStartMS = converToMiliseconds(shopperStart);
      shopperFinish = shopper[1];
      shopperFinishMS = converToMiliseconds(shopperFinish);

      //If order window is within shopper window
      if (orderStart <= shopperStart && orderFinish >= shopperStart) {
        if (orderStartMS + lt <= orderFinishMS) {
          orderHasAShopper = true;
        }
        if (orderFinishMS - lt <= shopperFinishMS) {
          orderHasAShopper = true;
        }
      }
      //If order window begins before shopper window
      else if (shopperStartMS + lt < shopperFinishMS ) {
        orderHasAShopper = true;
      }
    });
    results.push(orderHasAShopper);
  });
  console.log(results);
  return results.every((el)=>{return el });
}

function converToMiliseconds(time) {
  time = time.split(":");
  hrs = time[0];
  min = time[1];
  return((hrs*60*60+min*60)*1000);
}



// //Problem 02
// function isAdmissibleOverpayment(prices, notes, x) {
//   let diffs = notes.map((note, index) => {
//     let split = note.split("% ");
//     if(split.length > 1) {
//       let precent = split[0];
//       if(split[1].includes("higher")) {
//         inStorePrice = (prices[index] * 100 ) / (parseFloat(precent) + 100);
//         diff = prices[index] - inStorePrice;
//         return diff;
//       }
//       if(split[1].includes("lower")) {
//         inStorePrice = -(prices[index] * 100 ) / (parseFloat(precent) - 100);
//         diff = prices[index] - inStorePrice;
//         return diff;
//       }
//     }
//     return 0;
//   });
//   result = diffs.reduce((a,b) => { return a + b});
//   return result <= x ? true : false;
// }

// var prices = [110, 95, 70];
// var notes = ["10.0% higher than in-store", "5.0% lower than in-store", "Same as in-store"];
// var x = 5;
// //console.log(isAdmissibleOverpayment(prices, notes, x));
// var prices = [48, 165]
// var notes = ["20.00% lower than in-store", "10.00% higher than in-store"];
// var x = 2;
// //console.log(isAdmissibleOverpayment(prices, notes, x));

// Problem 01
// let order =[200, 20, 15]
// let shoppers = [[300,40,5], [600,40,10]];
// function delivery(order, shoppers) {
//   let distanceToCustomer = order[0];
//   let readyToRecieve = order[1];
//   let maxLate = order[2];
//   let results = [];
//   //Shoppers, distanceFromStore, walkingSpeed, durationAtStore
//   shoppers.forEach((shopper) => {
//     let distanceFromStore = shopper[0];
//     let walkingSpeed = shopper[1];
//     let durationAtStore = shopper[2];
//     let orderFullFillmentDuration = (distanceToCustomer + distanceFromStore) / walkingSpeed + durationAtStore;

//     if (readyToRecieve - orderFullFillmentDuration > 0) {
//       //Idle time exists
//       results.push(false);
//     } else if (orderFullFillmentDuration <= (readyToRecieve + maxLate)) {
//       results.push(true);
//     } else {
//       results.push(false);
//     }

//   });
//   return results;
// }

//console.log(delivery(order, shoppers));