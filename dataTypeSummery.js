// Primitive Data Type

// 7 types : String, Number, Boolean, null, Undefind, Symbol,BigInt

// const score = 100; //number
// const scoreValue = 100.3 //number

// const isLoggedIn = false //boolean
// const outsideTemp = null //null  //value: object
// let useremail; //undefind

// const id = Symbol('123') //symbol
// const anotherId =Symbol('123') //symbol
// // console.log(id === anotherId);

// const bigNumber = 862831624927401n


// Reference (Non primitive data type)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj"] //array

// const Object = { name :"hiren", age : 20,} //object

// const myfunction = function(){
//     console.log("Hello World!");
// }
// console.log(typeof myfunction);

// myfunction();


// ***********************************//

// Stack (Primitive), Heap(Non Primitive)

let myYoutubename = "hirenpatel"

let anothername = myYoutubename
anothername = "hirenkeraliya"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email : "user@gmail.com",
    upi : "user@ybl"
} 
let userTwo= userOne

userTwo.email = "Hiren@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

