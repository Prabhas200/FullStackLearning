// chapter 4: functions and methods

// function: a function is a block of code that performs a specific task and can be called multiple times.
// functions are used to break down a complex problem into smaller, more manageable parts.

function myFunction(parameter1, parameter2) { // this is a function declaration used to define a function
    // code to be executed
  }

myFunction(); // this will call the function and execute the code


// example:
function functionname(){  // this is a function declaration used to define a function
    console.log('hello');
    console.log('world');
    console.log('how are you?');
}

functionname(); // this will call the function and execute the code

// redandancy means repeated code in a program that can be extracted into a function and called when needed
functionname();
functionname();
functionname();



// function with parameters and arguments

function myFunction(msg) { // msg is a parameter that is passed to the function
    console.log(msg); // this is the body of the function and msg is a variable that is passed to the function
  }
  
  myFunction(); // this will call the function and execute the code as msg is not passed to the function so it will be undefined

  myFunction('hello'); // this will call the function and execute the code as msg is passed to the function so it will be hello


//   NaN is not a number it shows because it does not have a value
function myFunction(msg, n) { // msg is a parameter that is passed to the function
    console.log(msg*n); // this is the body of the function and msg is a variable that is passed to the function
  }
  
  myFunction(); // this will call the function and execute the code as msg is not passed to the function so it will be undefined

  myFunction('hello'); // this will call the function and execute the code as msg is passed to the function so it will be hello



  
// function for 2 numbers 
// if we write sum(5,6) it will print 11 in console after running the code as it is.
function sum(x,y){
    console.log(x+y);
}




// we can aslo write the return value of th efunction coz we can store the value of the function in a variable and then print the variable.

function sum(x,y){
    // s=x+y;
    // return s;
    return x+y; // after returning the value of the function it will print the value of the function and also we cant write any code after the return value of the function.
}

// {} this block of code is a local variable and it will not be accessible outside the function. it will only be accessible inside the function and also known as scoped variable.
// function parameters are like local variables and they are only accessible inside the function.
// function arguments are like global variables and they are accessible inside and outside the function.

// s=sum(5,6);
// console.log(s);
console.log(sum(5,6));







//? arrow functions are used as a compact way to create functions that are short and easy to read. they are used to create anonymous functions.


const functionName = (params) => { // this is an arrow function => sign used to create a function and we use const keyword to create a constant variable so that we can't change the value of the variable
    // function body or code goes here
}



// sum function
function sum(x,y){
    return x+y;
}



// this is a function expression used to create a function so that we can assign the function to a variable but it doesn't print the whole function to print the whole function we use arrow function
(x,y)=>{
    console.log(x+y);
}


// const arrowsum= // this is an arrow function so it prints the whole function that is written after = in the console and also we have to assign the constant variable to the arrow function so that we can't change the value of the variable.
const arrowsum=(x,y)=>{
    console.log(x+y);
} // after runnning this code it will print the whole function that is written after = in the console if we write arrowsum and also we have to assign the values in console as arrowsum(5,6) so it will print 11 in console.



const printhello=()=>{
    console.log("hello");
}
// console.log(printhello()); // this will print hello in console after running the code if we dont write console.log(printhello()); it will not print hello in console but it will print if we write printhello() in console directly.

// or we can also write the function like this in a single line
const printhello=()=>console.log("hello"); // console.log(printhello());



// assignment:
// create a function using the function keyword that takes a string as an argument and returns the length of the string using arrow function

let str="hello";
let len=str.length;
console.log(len);

// create a function using the function keyword that takes a string as an argument and returns the number of words in the string using arrow function

let str="hello world";
let words=str.split(" ");
let count=words.length;
console.log(count);






// create a function using the function keyword that takes a string as an argument and returns the number of vowels in the string using arrow function

function countvowels(str){
    for (const char of str){
        console.log(char);
    }
}
str="hello";
countvowels(str);

// or

arr=['a','e','i','o','u'];
let str="hello";
let count=0;
for (let value of str){
    if (arr.includes(value)){
        count++;
    }
}
console.log(count);

// or


const countvowels=(str)=>{
    const count=0;
    for (const value of str){
        if (arr.includes(value)){
            count++;
        }
    }
    console.log(count);
}

countvowels("hello");
countvowels("hello world");

// or


const countvowels=(str)=>{
    let count=0;
    for (let value of str){
        if (value=='a' || value=='e' || value=='i' || value=='o' || value=='u'){
            count++;
        }
    }
    console.log(count);
    // return count;
}

countvowels("hello");
countvowels("hello world");

// or

function countvowels(str){
    let count=0;
    for (let value of str){
        if (value=='a' || value=='e' || value=='i' || value=='o' || value=='u'){
            count++;
        }
    }
    console.log(count);
    // return count;
}

countvowels("hello");
countvowels("hello world");








//? foreach loop in array is used to iterate over the elements of an array and execute a block of code for each element.
arr.forEach(function(element, index) {
    // code to be executed
})

//? callback function is a function that is passed as an argument to another function and is executed when the other function is called and returns the result of the function call.
arr.forEach(function(element)=>{
    console.log(element);
})



function abc() {
    console.log('hello');
    console.log('world');
    console.log('how are you?');
}
function myfunc(abc){
    return abc();
}
myfunc(abc);


// adds the values of the array and returns the sum using for-of loop
let arr=[1,2,3,4,5];
let sum=0;
for (let value of arr){
    sum+=value;
}
console.log(sum);



let arr=[1,2,3,4,5];
arr.forEach(function(element){ // this will print all the elements of the array by taking each element of the array and printing it in a new line seperately
    console.log(element);
})


// (function(element){console.log(element);}) this function is called a callback function and it can be written as arrow function also.
let a=['a','e','i','o','u'];
a.forEach((element,idx)=>{ // this will print all the elements of the array by taking each element of the array and printing it in a new line seperately
    // console.log(element.toUpperCase()); // use this to print the elements of the array in uppercase letters.
    
    // a.forEach((element,idx)=>{ // this will print all the elements of the array by taking each element of the array and printing it in a new line seperately and idx is the index of the element
    // console.log(element.toUpperCase(),idx); // use this to print the elements of the array in uppercase letters.
    
    console.log(element);
})





//* assignment:
// for a given array of numbers, create a function that returns the sum of the numbers using foreachfunction
s=[1,2,3,4,5];
let sum=0;
s.forEach(function(element){
    sum+=element;
})
console.log(sum);

// for a given array of numbers, create a function that returns the average of the numbers using foreachfunction
// for a given array of numbers, create a function that returns the maximum number in the array using foreachfunction
// for a given array of numbers, create a function that returns the minimum number in the array using foreachfunction
// for a given array of numbers, create a function that returns the median number in the array using foreachfunction
// for a given array of numbers, create a function that returns the mode number in the array using foreachfunction
// for a given array of numbers, create a function that returns the standard deviation in the array using foreachfunction
// for a given array of numbers, create a function that returns the variance in the array using foreachfunction


//for a given array of numbers, print the square of each number using the forEach method
s=[1,2,3,4,5];
s.forEach(function(element){
    console.log("the square of "+element+" is "+element*element);
})

//for a given array of numbers, print the square of each number using the arrow method
let nums=[1,2,3,4,5];
nums.forEach(element=>console.log("the square of "+element+" is "+element*element));


//for a given array of numbers, print the cube of each number using the forEach method
//for a given array of numbers, print the square root of each number using the forEach method
//for a given array of numbers, print the cube root of each number using the forEach method






//? map array methods is used to create a new array with the results of calling a function for every array element and returns a new array with the same length as the original array.

arr.map(callbackfunction(value, index, array));

let arr=[1,2,3,4,5];


let arr2=arr.map(function(value){ // this is normal map function and it is used to create a new array with the results of calling a function for every array element and returns a new array with the same length as the original array as it prints the value of the arrain a single line.
    return value*2;
})
console.log(arr2); //this will print the value of the array in a single line by doubling the value of the array
console.log("arr=",arr,"arr2=",arr2); // this will print the value of the array in a single line and also the value of the array by doubling the value of the array

let newarr=arr.map((value)=> {return value*2}); // this is arrow function and it is used to create a new array with the results of calling a function for every array element and returns a new array with the same length as the original array. 
console.log(newarr); //this will print the value of the array in a single line by doubling the value of the array

arr.map((value)=> console.log(value)); // this will print all the elements of the array by taking each element of the array and printing it in a new line seperately




//? filter method is used to filter an array and return a new array that gives true for the given condition

let newArr=arr.filter(function(value)=>{
    return value%2===0;
})

let arr=[1,2,3,4,5];


let newArr=arr.filter((value)=>value%2===0);
let newArr2=arr.map((value)=>value%2===0);
console.log(newArr);
console.log(newArr2);
console.log("arr=",arr,"newArr=",newArr,"newArr2=",newArr2);



//? reduce method is used to reduce an array to a single value using a function and returns the reduced value
let arr=[1,2,3,4,5];
let r=arr.reduce((a,b)=>a+b);
console.log(r);


let arr=[5,4,6,7,3];
const r1=arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr; // this will return the maximum number in the array by using reduce method and checking if the previous number is greater than the current number
});
console.log(r1);







// assignment:
// we are given array of marks of the students and we have to find the average of the marks of the students by using for loop

let marks = [90, 80, 70, 60, 50];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let average = sum / marks.length;
console.log(average);


// we are given array of marks of the students and we have to find the average of the marks of the students by using fillter and reduce method

let marks = [1,2,3,4];
let sum = marks.reduce((a, b) => a + b);
let average = sum / marks.length;
console.log(average);


let arr=[1,2,3,4,5];
let s=arr.filter((value)=>value%2===0); // this will return the even numbers in the array by using filter method
let s1 = arr.filter((value) => value % 2 === 0).reduce((a, b) => a + b);// this will return the sum of the even numbers in the array by using filter and reduce method
console.log(s); // this will print the even numbers in the array by using filter method so the output will be [2,4]
console.log(s1); // this will print the sum of the even numbers in the array by using filter and reduce method so the output will be 6


// we are given array of marks of the students and we have to find the average of the marks of the students that are greater than 50.

let m=[12,45,55,67,89]
let marks=m.filter((value)=>value>50); // this will return the marks of the students that are greater than 50 by using filter method it will return the values
let avg=marks.reduce((a,b)=>a+b)/marks.length; // this will return the average of the marks of the students that are greater than 50 by using reduce method it will return the average and it will divide the sum of the marks by the length of the array.
console.log(avg); // this will print the average of the marks of the students that are greater than 50 by using reduce method and the output will be 70.333.....
console.log(marks); // this will print the marks of the students that are greater than 50 by using filter method and the output will be [55, 67, 89]


// take a number n and create a multiplication table of n using while loop

let n=prompt("Please enter a number:");
let i=1;
while (i<=20){
    console.log(`${n} x ${i} = ${n*i}`); // this will print the multiplication table of n by using while loop
    i++;
}


// take a number n from the user and create an array from 1 to n using for loop

let n=prompt("Please enter a number:");
let arr=new Array(n);
for (let i=0; i<n; i++){ // this will create an array from 1 to n by using for loop
    arr[i]=i+1; // this will add 1 to the array by using for loop for each iteration
}
console.log(arr);



//? very very important

/* take a number n from the user and create an array from 1 to n 
- use reduce method to find the sum of the numbers in the array
- use reduce method to find the product of the numbers in the array
- use map method to find the square of the numbers in the array
- use map method to find the cube of the numbers in the array
- use filter method to find the even numbers in the array */ 

let n=prompt("Please enter a number:");
let arr=new Array(n);
for (let i=0; i<n; i++){
    arr[i]=i+1;
}
let sum=arr.reduce((a,b)=>a+b);             // this will find the sum of the numbers in the array by using reduce method
let product=arr.reduce((a,b)=>a*b);         // this will find the product of the numbers in the array by using reduce method
let square=arr.map((value)=>value*value);   // this will find the square of the numbers in the array by using map method
let cube=arr.map((value)=>value*value*value); // this will find the cube of the numbers in the array by using map method
let even=arr.filter((value)=>value%2===0);  // this will find the even numbers in the array by using filter method
let odd=arr.filter((value)=>value%2!==0);   // this will find the odd numbers in the array by using filter method
console.log(arr);
console.log(sum);
console.log(product);
console.log(square);
console.log(cube);
console.log(odd);
console.log(even);


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
