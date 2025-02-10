const marvel_heroes  = ["thor", "ironman", "captain america", "black widow", "hulk", "spiderman"];
const dc_heroes = ["batman", "superman","wonder woman", "flash", "green lantern"];

//marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[6][2]);

// const allHeros = marvel_heroes.concat(dc_heroes);
// console.log(allHeros);

const all_new_Heros = [...marvel_heroes, ...dc_heroes];
//console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5] , 6 ,[7] , [8, [9, [10]]]]; 

const flatArray = another_array.flat(3); 
console.log(flatArray);


console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({name: "Vishal"})); // interesting thing to note here is that it will return an empty array.

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));