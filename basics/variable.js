const accountId = 17783764;
let accountEmail = "ermishrachhoti@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";

// accountId  = 2; // not allowed
accountEmail = "abc@gmail.com";
accountPassword = "2123133";
accountCity = "Bengluru";
let accountState;

console.log(accountEmail); 
console.table([accountEmail,accountPassword,accountCity,accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/ 