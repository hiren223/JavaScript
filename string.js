const name ="Hiren"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hiren-Patel')

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,5)
console.log(newString);

const anOtherString = gameName.slice(-9,5)
console.log(anOtherString);

const newStringOne= "    Hiren    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://hiren.com/hiren%20patel"

console.log(url.replace('%20', '-'))
console.log(url.includes('hiren'))

console.log(gameName.split('-'));

