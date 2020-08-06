function sum(first, second) {
    let result = first + second;

    if(result > 9){
        let mood = "happy";
        mood = "Sad";
        mood = "Funky"
        console.log(mood);
    }
    console.log(mood);  // Cannot access out of scope.
}

let output = sum(4,6);
console.log(output);


// By using "var" it will hoist. Parent can take that out or scope. function can access from anywhere.

// let and const are scope variable.