//singleton 


//constructor method to declare object
// Object.create();


//object literal
const mySym = Symbol("key1");

const jsUser = {
    name: "Chhoti",
    [mySym] : "mysym",
    age: 22,
    city: "Noida",
    marks: 85.9,
    email: "chhotimishra@gmail.com",
    isLoggedIn: false,
    lastLogginDays : ["Monday", "Saturday"],
};

//access the object 
//M-1
console.log(jsUser.email);
//M-2
console.log(jsUser["email"]);


console.log(jsUser[mySym]);
console.log(typeof jsUser.mySym);

//change the value
jsUser.email = "chhoti@gmail.com";
//to freeze the value then we can't change the value
//Object.freeze(jsUser);
jsUser.email = "chhoti@microsoft.com";
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());