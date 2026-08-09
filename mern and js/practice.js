// u can practice the codes here so it will be a good practice and you can run different codes at a time











/* take a number n from the user and create an array from 1 to n 
- use reduce method to find the sum of the numbers in the array
- use reduce method to find the product of the numbers in the array
- use map method to find the square of the numbers in the array
- use filter method to find the even numbers in the array */ 

// let n=prompt("Please enter a number:");
// let arr=new Array(n);
// for (let i=0; i<n; i++){
//     arr[i]=i+1;
// }
// let sum=arr.reduce((a,b)=>a+b);             // this will find the sum of the numbers in the array by using reduce method
// let product=arr.reduce((a,b)=>a*b);         // this will find the product of the numbers in the array by using reduce method
// let square=arr.map((value)=>value*value);   // this will find the square of the numbers in the array by using map method
// let cube=arr.map((value)=>value*value*value); // this will find the cube of the numbers in the array by using map method
// let even=arr.filter((value)=>value%2===0);  // this will find the even numbers in the array by using map method
// let odd=arr.filter((value)=>value%2!==0);   // this will find the odd numbers in the array by using filter method
// console.log(arr);
// console.log(sum);
// console.log(product);
// console.log(square);
// console.log(cube);
// console.log(even);
// console.log(odd);


// factorial of a number using for loop
let n=prompt("Please enter a number:");
let fact=1;
for (let i=1; i<=n; i++){
    fact=fact*i;
}
console.log(fact);

// use reduce method to find the factorial of a number

let n = Number(prompt("Enter a number:"));
let arr = Array.from({ length: n }, (_, i) => i + 1);
let fact = arr.reduce((a, b) => a * b, 1);
console.log(fact);


let n = Number(prompt("Enter a number:"));
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let fact = arr.reduce((a, b) => a * b, 1);
console.log(fact);
