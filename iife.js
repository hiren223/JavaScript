// Immediatey Invoked Function Expression (IIFE)

(function chai(){
    // name iife
    console.log(`DB CONNECTED`);
    
})();
 
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
} )('Hiren')
