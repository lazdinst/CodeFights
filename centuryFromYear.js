function centuryFromYear(year) {
  return year % 100 === 0 ? year / 100 : Math.floor(year/100) +1;
}

console.log(centuryFromYear(1999)); // 20
console.log(centuryFromYear(2005)); // 21
