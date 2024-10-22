//spread operator >>>>> (... ) also known as rest operator


function calCartPrice(...num1){
    return num1;
}
console.log(calCartPrice(200, 300, 800));

function calculateCardPrice(val1, val2, ...num2){
    return num2;
}
console.log(calculateCardPrice(100, 200, 400, 500, 10000));


//pass the object in function
const user = {
    username : "Sunny",
    price: 200,
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is  ${anyObject.price}`);
}
handleObject(user);

//pass the array in function
const myNewArray = [200, 300, 400, 1000];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));