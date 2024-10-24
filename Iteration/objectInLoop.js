// for in loop on object bcoz for of loop doesn't apply on object


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObject) {
   //console.log(myObject[key]);
   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
   // console.log("key of  array is : " +key);
    console.log("value of array is : "+programming[key]);
}

//iteration of "for in loop" on map
//"for in loop" does not iterable on map

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set("Fr", "France");

for(const key in map){
    console.log(key);
}

