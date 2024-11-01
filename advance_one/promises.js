//promises can be create but sometimes we consume the promises

//promise creation
const promiseOne = new Promise(function(resolve, reject){
    //Do an asyn task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("promise consume");
});


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("async 2 resolved");
});


const promiseThree =  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Pari", email: "pari@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "palak", password: "123"});
        }else{
            reject('ERROR: Something went wrong');
        }
    },1000);
});
promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolve or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "anshu", email: "anshu@gmail.com"});
        }
        else{
            reject('Error: something went wrong 2');
        }
    }, 1000);
});

async function consumepromiseFive(){
    try {
        const response = await promiseFive ;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumepromiseFive();



//method - 1
// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser();



//method - 2 for fething data
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) =>{
    console.log(error);
    
})