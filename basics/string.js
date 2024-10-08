const name = "Chhoti";
const repoCount = 50;

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('chhoti-mishra');
console.log(gameName);
console.log(gameName[0]);   

console.log(gameName.length); 
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toUpperCase());  
console.log(gameName.charAt(4)); 
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0,4);
console.log(newString) ;

const anotherString = gameName.slice(1,-4);
console.log(anotherString);

const newString1 = "    chhoti    "    ;
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%choudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('chhoti'));
console.log(url.includes('hitesh'));


const newName1 = "pari-choudhary-pallu";
console.log(newName1.split('-'));
console.log(newName1.match());