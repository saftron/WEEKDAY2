//SCOPING OF VAR LET CONST
//FUNCTION SCOPES

//var is function scoped

/* function defineScope() {

var welcome = 'Hello Team'

console.log("var inside the function", welcome);

}
defineScope()

console.log("var outside the function", welcome); */


////////////////////////////////////////

//let is function scoped

/* function defineScope() {

let welcome = 'Hello Team'

console.log("let inside the function", welcome);

}
defineScope()

console.log("let outside the function", welcome); */

////////////////////////////////////////

/* function defineScope() {

const welcome = 'Hello Team'

console.log("const inside the function", welcome);

}
defineScope()

console.log("const outside the function", welcome); */



//BLOCK SCOPED

//var block scope

/* if (true){
    var welcome='Hello, welcome to block scope'
    console.log("var inside the block",welcome);    
}

 console.log("var outside the block",welcome);  */



 //let block scope

/* if (true){
    let welcome='Hello, welcome to block scope'
    console.log("let inside the block",welcome);    
}

 console.log("let outside the block",welcome);  */



 //const block scope

/* if (true){
    const welcome='Hello, welcome to block scope'
    console.log("const inside the block",welcome);    
}

 console.log("const outside the block",welcome);  */