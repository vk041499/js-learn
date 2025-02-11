const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    //console.log(num);
    
}

const greeting = "Hello World";
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
    
}

// Maps
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('AU', 'Australia');
map.set('CA', 'Canada');

//console.log(map);

for (const [key , value] of map) {
    //console.log(key, ':-', value);
    
}

//for of for object

// const myObject = {
//     game1 : 'Cricket',
//     game2 : 'Football',
//     game3 : 'Hockey',
//     game4 : 'Tennis',
//     game5 : 'Basketball'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
// }...... here for of loop will not work for object.
