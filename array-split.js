const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part = nums.slice(1, 5); // To make a new array.
// console.log(part);

const removed = nums.splice(0,4); //To remove elements from an array.
// console.log(removed);
// console.log(nums);


const together = nums.join(",")  // To join numbers or string from and array.
console.log(together);