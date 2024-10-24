//high order arrays loop

//for of
//["", "", ""]
//[{}, {}, {}]


const arr = [1,2,3,4,5];
for (const i of arr) {
    console.log(i);
}

const greetings = "hello world";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//maps - holds the key-value pairs

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");

console.log(map);

//for of loop in map
for(const [key, value] of map){
    console.log(key, ':-', value);
}

//apply for of loop on object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// it does not apply on object
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }