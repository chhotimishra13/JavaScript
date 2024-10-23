//if
const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("user logged in");
}

// <, >, <=, >=, ==, !=, ===

if(2 == "2"){
    console.log("execute");
}

if(2 === "2"){
    console.log("execute");
}

if(2 != 3){
    console.log("executed");
}

const temperature = 41;
if(temperature < 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`user power ${power}`);
}

//implicit scope
const balance = 1000;
// if(balance > 500) console.log("test");

if(balance < 500){
    console.log("less than");
}else if(balance < 700){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 760");
}else{
    console.log("less than 1200");
}

const isUserLoggedIn1 = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn1 && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in");
}


