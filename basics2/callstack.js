//javascript execution context
//three types
//1. Global execution context
//2. Function execution context
//3. Eval execution context

//{} >> Global execution context which execute through the "this keyword"

//let's understand by code 

let val1 = 10;
let val2 = 5;
function addTwo(){
    let total=  num1+num2;
    return total;
}
let res = addTwo(val1, val2);
let res1 = addTwo(10,2);

//three phases
//first phase is memeory creation phase
//second phase is execution phase

//1. global execution whis is executed by "this keyword"
//2. memory phase - isme sare ko phle rkha jata h undefined assign krke
//.. val1 -> undefined
//.. val2 -> undefined
//.. addTwo -> defination
//.. res1 -> undefined
//.. res2 -> undefined

//its all the first cycle

//3. execution phase
//..val <- 10
//.. val <- 5
//.. addTwo -> it make two things
            // 1. new variable environment + execution thread
            // memory phase
            //.. val1 -> undefined
            //.. val2 -> undefined
            //.. total -> undefined

            //2. execution phase
            //. num1 -> 10
            //. num2 -> 5
            //. total -> 15

            //3. "total" return in global execution context
