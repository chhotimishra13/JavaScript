//truthy and falsy value

const userEmail = "abc@gmail.com";

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values
//.... false, 0, -0,  BigInt, 0n, "", undefined, NaN

//truthy values
//.... true, "0", 'false', " ", [], {}, function(){}, 


const arr = [];
if(arr.length == 0){
    console.log("Array is empty");
}else{
    console.log("Array is non empty");
}

const empObj = {} ;
if(Object.keys(empObj).length == 0){
    console.log("Object is empty");
}


//false == 0 -> true
//false == "" -> true
//0 == '' -> true




//+++++++++ Nullish coalescing operator(??) null undefined
//.... syntax

//leftExpr ?? rightExpr


let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1);

//++++++++++++++++++++++++ Terniary operator +++++++++++++++++++++++++
//condition ? true true: false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

