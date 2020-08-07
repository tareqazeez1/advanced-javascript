const nums = [1, -2, 3, 4, -5, -6, 7, -8, 9];
for (let i = 0; i < nums.length; i++) {
    

    if(nums[i]>3){
        break;        // by using break; we can stop a loop or running code.

    }
    // console.log(nums[i]);
}

for (let i = 0; i < nums.length; i++) {
    
    if(nums[i]<0){
        continue;  //by using continue we can continue the loop or run code by using a statement
    }
    console.log(nums[i]);
}