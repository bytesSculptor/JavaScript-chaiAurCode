// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue; // to remove space 
    }
    // console.log(`Each char is ${greet}`)
}


// MAPS
const myMap = new Map();
myMap.set('IN', 'India')
myMap.set('USA', 'United States of Ameria')
myMap.set('Fr', 'France')
myMap.set('IN', "India")

/* this will print every value like an array:- [ 'IN', 'India' ] */
// for(const key of myMap){
//     console.log(key);
// }

/* this will only print key as string:- IN USA Fr */
// for(const [key] of myMap){
//     console.log(typeof key);
// }

for(const [key, value] of myMap){
    console.log(key, ":- ", value);
}





const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}