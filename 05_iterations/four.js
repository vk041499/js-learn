const myObject = {
    game1 : 'Cricket',
    game2 : 'Football',
    game3 : 'Hockey',
    game4 : 'Tennis',
    game5 : 'Basketball'
}

for (const key in myObject) {
   // console.log(key, ':-', myObject[key]);

}

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP'];

for (const key in programmingLanguages) {
    //console.log(key, ':-', programmingLanguages[key]);
    
}

//map 
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('AU', 'Australia');
map.set('CA', 'Canada');

for (const key in map) {
    console.log(key, ':-', map[key]);
    
}
// for in loop will not work for map as well... so no output will be displayed.