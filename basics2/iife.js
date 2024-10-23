//immediately invoked function expressions (IIFE)
//there is a problem due to global scope. MANY ATIMES, WE THREW IT IN
//in order to remove the pollution of the variables of global scope and whatever declaration is there.  

(function one(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Pari")