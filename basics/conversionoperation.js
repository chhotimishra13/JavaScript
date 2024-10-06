let score = "33abc";
let value = true;
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" --> 33
//"33abc" --> NaN
//TRUE --> 1 ; FALSE -->0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//""  --> false
//1 --> true; 0 --> false
//"chhoti" --> true


let someNumber = 22;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);