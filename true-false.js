// falsy:
// 0
// ""
// undefined
// null
// NaN
//false



// truthy:
// '0'
// "  "
// []
// "string"

// When variable is an empty string
const name = "";
if(name){
    console.log("condition is true");
}

else{
    console.log("condition is false");
}

// output ==> condition is false



// When variable is a string
const name = "0";
if(name){
    console.log("condition is true");
}

else{
    console.log("condition is false");
}

// output ==> condition is true


// When variable is not defined or null

let name =;

if(name){
    console.log("condition is true");
}

else{
    console.log("condition is false");
}

//Output ==> It will be false and undefined