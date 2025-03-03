function saymyname() {
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("E");
    console.log("N");
}
// saymyname()

// function addtwonumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addtwonumber(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addtwonumber(3, 5)
// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
