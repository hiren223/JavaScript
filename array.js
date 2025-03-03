// Array

const myArr = [0, 1 ,2, 3, 4, 5]
// console.log(myArr);

// Array Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// Slice, Splice

// console.log("A ", myArr);

// const myn1= myArr.slice(1, 3)
// console.log(myn1);

// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c ", myArr);
// console.log(myn2);


// Array Part 2

const marvel_heros= ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allnewHeros = [...marvel_heros, ...dc_heros]
// console.log(allnewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hiren"));
console.log(Array.from("Hiren"));
console.log(Array.from({name:"Hiren"}));

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3));


