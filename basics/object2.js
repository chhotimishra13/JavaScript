//non-singleton object declarations
const tinderuser = {};


//singleton object declaration
const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;
console.log(tinderUser);


const regularUser = {
    email: "sunny78@gmail.com",
    fullname: {
        userfullname: {
            firstname:"sunny",
            lastname: "mishra",
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

console.log(Array.of(obj1,obj2));
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//method - 2
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//for merging object we can use  >>>>> object.assign({}, obj1,  obj2)

const users = [
    {
        id: 1,
        age: 21,
    },
    {
        id: 2,
        age: 23,
    }
]
console.log(users[1].age);
console.log(tinderUser);

//to print the keys
console.log(Object.keys(tinderUser));

//to print the value
console.log(Object.values(tinderUser));

//array of array
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));