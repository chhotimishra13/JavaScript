
//object literal
const user = {
    username : "pari",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);


//constructor function
// const promiseOne  = new Promise();
// const date = new Date();

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; 
}

const userOne = new User("Palak",12,true);
const userTwo = new User("Priyanshi", 11,true);
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);

//when we use the "new keyword" then first make a empty object(instnace of object)

//instanceOf
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
console.log(auto instanceof Object);

  