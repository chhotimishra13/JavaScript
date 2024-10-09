//array

const myArr = [4,6,8,18,2];
console.log(myArr);
console.log(myArr[0]);
console.log(myArr.length);

//array methods
console.log(myArr.push(89));
console.log(myArr);
console.log(myArr.pop());
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.includes(2));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice,splice
console.log("A ",myArr);

