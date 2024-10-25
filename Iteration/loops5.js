//reduce in js

const arr = [1,2,3,4,5];

//using function 
const myArr = arr.reduce(function(acc, currval1) {
    console.log(`accumulator : ${acc} and current value is: ${currval1}`);
    return acc + currval1;
}, 0);
console.log(myArr);

//using arrow function

const myArr1 = arr.reduce((acc,curr) => acc + curr, 0)
console.log(myArr1);

const shoppingCart = [
    {
        itemNAME : "JS COURSE",
        price : 2999,
    },
    {
        itemNAME : "py course",
        price : 6000,
    },
    {
        itemNAME: "data science course",
        price : 14000
    },
    {
        itemNAME: "mobile course",
        price : 5999
    }
]

const priceDay = shoppingCart.reduce((acc,item) =>{
    return acc + item.price;
},0)
console.log(priceDay);