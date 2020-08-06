// **Square of numbers normally....

const numbers = [2, 3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }

// ** Square of numbers by map....


const square = element => element * element;
const square = x => x*x;

const result = numbers.map(function(element){
    return element * element;
})

const result = numbers.map(x => x*x);
console.log(result);

//** Filter is used to filter something from an array/
// filter
const bigger= numbers.filter(x => x>5);
console.log(bigger);

const smaller = numbers.filter(x => x<6);
console.log(smaller);

// find

const isThere = numbers.find(x => x>5);
console.log(isThere);