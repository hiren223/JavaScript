let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2025, 2, 3)
let myCreateDate = new Date(2025, 2, 3, 5, 3)
// console.log(myCreateDate.toLocaleString());


let myTimesStamp = Date.now()
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
 weekday: 'long',
})



