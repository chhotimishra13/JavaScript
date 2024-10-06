// Primitive  ------ call by value

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue  = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail  = undefined;

const id = Symbol('123');

const bigInt = 34456786424556776n;
console.log(bigInt);




// Reference tpye or Non-Primitive
//return types of non-primitive data types is always object/function
//Array, Objects, Functions
const heros = ["shakitman","naagraj","doga"];

//object
let myObj = {
    name: "chhoti",
    age: 21,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

//to check the datatypes then use
console.log(typeof outsideTemp);

// JavaScript is dynamically typed, meaning that type checking happens at runtime, not during compilation


//***************************
//stack (primitive), Heap Memory(Non-Primitive)

let myName = "Pari";
let anotherName = myName;

anotherName = "Pallu";
console.log(anotherName); 
console.log(myName);


let userOne = {
    email : "user@google.com",
    upi:"user@bl",
}

let userTwo = userOne; 

userTwo.email = "user3@google.com";
console.log(userOne.email);
console.log(userTwo.email);