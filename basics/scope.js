//scope -- {}
// if ke under vala block scope and if ke bhr vala global scope
//let and const are global scope and var is block scope

//var c = 90;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
   // var c = 30;
   console.log("inner: " +a);
}

console.log(a);
// console.log(b);
//console.log(c);


//nested scope
function one(){
    const username1 = "Sunny";

    function two(){
        const website = "youtube";
        console.log(username1);
    }
    //console.log(website);
    two();

}
one();

if(true){
    const username = "Pari";
    if(username === "Pari"){
        const website = "youtube";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1;
}


//hoisting
console.log(addTwo(9));
const addTwo = function(num){
    return num + 2;
}
