//for loop

for (let i = 0; i<=10; i++) {
    const element = 9*i;
    console.log(element);
}

for(let i=1; i<=10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

const arr = ["flash", "batman", "superman"];
console.log(arr.length);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}



//break and continue

for(let i=1; i<=20; i++){
    if(i == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${i}`);
    
}

for(let i=1; i<=20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}