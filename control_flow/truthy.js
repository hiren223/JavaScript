const userEmail = []

if (userEmail) {
    console.log("Got User email ");
    
}else{
    console.log("Don't have user email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function(){}, 


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null, undefind

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);


// terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");


