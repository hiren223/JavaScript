// Singleton 
// Object.create
// const tinderUser= new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name ="Hiren"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "hiren2google.com",
    fullname:{
        userfullname: {
            firstname: "Hiren",
            lastname: "Keraliya"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 ={1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}
const obj4 ={5:"a", 6: "b"}

// const obj3= {obj1, obj2}

// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {
    ...obj1, ...obj2, ...obj4
}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"hiren@gmail.com"
    },
    {
        id:2,
        email:"hiren@gmail.com"
    },
    {
        id:3,
        email:"hiren@gmail.com"
    }
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));

// Object de-structure
const course ={
    curseName : "JS in hindi",
    price: "999",
}
const  {price} = course
console.log(price);







// object literals
const mySym = Symbol("key1")

const jsUser ={
    name: "Hiren",
    [mySym]:"mykey1",
    age: 19,
    location:"ahmedabad",
    email: "hiren123@gmail.com",
    isloggedIn : false 
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// jsUser.email = "hiren@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "hirenpatel@gmail.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS User");
// }
// jsUser.greeting2 = function(){
//     console.log(`Hello JS User, ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());



