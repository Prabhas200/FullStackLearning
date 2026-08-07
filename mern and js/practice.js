
let arr=[250, 500, 750, 1000, 1250];
let sum=0;
for (let value of arr){
    sum+=value;
}
console.log(sum);

// let discount=5;
let discount = prompt("Enter the discount"); // this will prompt the user to enter the discount and then print the value of the array with a discount of entered discount.

let total=sum-(sum*discount/100); // this will print the sum of the array by adding all the values of the array and then subtracting the sum of the array with a discount of 5% and then dividing the sum of the array with a discount of 5% by 100 and then multiplying the sum of the array with a discount of 5% by 100 by using for-of loop
// let total=sum*(100-discount)/100; // this will print the sum of the array with a discount of 5% by using for-of loop

// let total=sum*(sum-discount)/100; // do not use this because it will give wrong output because of precedence of operators.
console.log(total); // this will print the sum of the array with a discount of 5% by using for-of loop

