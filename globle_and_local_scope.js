let a=300
if (true) {
    let a = 10
    const b = 20
    var c = 30 
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const userename = "Hiren"

    function two (){
        const website = "youtube"
        console.log(userename);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const userename ="Hiren"
    if (userename === "Hiren") {
        const website = " youtube"
        // console.log(userename + website);
    }
    // console.log(website);
}
// console.log(userename);


/* ************** interesting ************** */ 

console.log(addone(5))
function addone (num){
    return num + 1
}


const addtwo = function (num){
    return num +2
}
console.log(addtwo(5))