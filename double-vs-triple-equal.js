//double equal == ...
const first = 2;
const second = "2";

if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//Output ==> condition is false. (Does not check type)

//triple equal === ...
const first = 2;
const second = "2";

if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//Output ==> condition is true. (check value and type)


// Defination : double equal only checks the value and triple equal checks value an type both.