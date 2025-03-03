// const user = {
//     username: 'Hiren',
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }
// console.log(this)
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// function chai (){
//     let username = "Hiren"
//     console.log(this.username)
// }

// const chai = function (){
//     let username = "Hiren"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Hiren"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2)=> {
//     return num1+ num2
// }

// const addTwo = (num1, num2)=> num1+ num2

// const addTwo = (num1, num2)=> (num1+ num2)

const addTwo = (num1, num2)=> ({
    username: "hiren"
})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
