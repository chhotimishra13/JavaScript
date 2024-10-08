//  Dates

let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreateDate=  new Date(2024, 10,8);
console.log(myCreateDate);
console.log(myCreateDate.toDateString());

let myCreateNewDate = new Date(2024, 10, 8, 5, 3);
console.log(myCreateNewDate.toLocaleString());


let myCreateDate1 = new Date("2024-01-13");
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("01-13-2024");
console.log(myCreateDate2.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate2.getTime());

//convert into seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getMinutes());



console.log( newDate.toLocaleString('default',{
    weekday: "long",
})
)