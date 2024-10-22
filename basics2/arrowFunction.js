//this keyword - to refer the current context


const user = {
    username : "Palak",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage();
user.username = "Pari";
user.welcomeMessage();


//arrow function


const two = ()  => {
    let username = "Palak";
    console.log(this.username);
}
two();

//arrow function syntax

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2,3));

//implicit return 
const addThree = (num1, num2, num3) => {num1, num2, num3};
console.log(addThree(2,3,4));