
function sayMyName(){
    console.log("C");
    console.log("H");
    console.log("H");
    console.log("O");
    console.log("T");
    console.log("I");
}
sayMyName();
//method - 1 of declaring function
                       //parameter
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

            //argument
addTwoNumbers(2,4);
addTwoNumbers(2, "4");
addTwoNumbers(2, "a");
addTwoNumbers(2, null);


//method - 2 of declaring function
function addTwoNumbers1(num3, num4){
    return num3+num4;
}
console.log(addTwoNumbers1(5,7));

function logginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter the username ");
        return;
    }
    return `${username} just logged in`;
}
console.log(logginUserMessage("Pari"));
console.log(logginUserMessage());