function calculateCartPrice(var1, var2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username : "Hiren",
    price : 199
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewarray = [200, 400, 500, 100]

function returnSencondValue(getarray){
    return getarray[1]
}
// console.log(returnSencondValue(myNewarray));
console.log(returnSencondValue([200, 400, 500, 1000]));

