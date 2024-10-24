//for each loop

const coding = ["js", "ruby", "python", "java", "cpp"];


//using function
console.log("MRTHOD 1ST :-----");
coding.forEach(function (item) {
    console.log(item);
});


//using array function on for each loop
console.log("MRTHOD 2ND : --- ");
coding.forEach(i => {
    console.log(i);
});

console.log("MRTHOD 3RD :----");
//3rd method
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);
