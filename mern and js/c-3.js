// chapter 3: loops and strings

// loops: for, while, do-while, for-in, for-of, forEach, break, continue, return and label are used to execute a block of code multiple times or until a certain condition is met 
// loops are used to execute a block of code multiple times or until a certain condition is met. The for loop is used to execute a block of code a specific number of times. The while loop is used to execute a block of code while a certain condition is true. The do-while loop is used to execute a block of code at least once and then continue executing it while a certain condition is true. The for-in loop is used to iterate over the properties of an object. The for-of loop is used to iterate over the values of an iterable object. The forEach loop is used to execute a function for each element in an array. The break statement is used to exit a loop early. The continue statement is used to skip the current iteration of a loop and move on to the next one. The return statement is used to exit a function and return a value. The label statement is used to label a block of code so that it can be referenced by other statements.


// for loop: for (let i = 0; i < 10; i++) { console.log(i); }
for (let count = 0; count <= 5; count++){
    console.log("The value of count is: ", count);
}

for (let i=0;i<5;i++){
    console.log(i);
}

let sum=0;
for (let i=1;i<=5;i++){
    sum+=i;
    // sum=sum+i;
}
console.log(sum);


// infinite loop: it runs forever until the program is stopped. for (let i = 0; i < 10; i--) { console.log(i); }

// for (let i=0;i>=0;i++){
//     console.log(i);
// }


// while loop: let i = 0; while (i < 10) { console.log(i); i++; }

let i=1
while (i<=5)
{
    console.log("The value of i is: ", i);
    i++;
}


// do-while loop: let i = 0; do { console.log(i); i++; } while (i < 10);

let j=1
do{
    console.log("The value of j is: ", j);
    j++;
}while(j<=5);


// for-in loop: let obj = { a: 1, b: 2, c: 3 }; for (let key in obj) { console.log(key); }
// for in is used to iterate over the properties of an object. It is not recommended to use for-in loop to iterate over arrays because it iterates over all enumerable properties, including inherited properties.
// in this for in loop we can iterate over the properties of an object so the output will be a,b,c because it only iterates on keys of the object.

let obj={a:1,b:2,c:3};
for (let key in obj){
    console.log(key);
}

// in this for in loop we can iterate over the properties of an object and print the key and the value of the object. The output will be name: John, age: 30, city: New York
let arr = {name: "John", age: 30, city: "New York"};
for (let key in arr) {
    console.log(key, arr[key]);
}
    console.log(arr.name);

// {name: "John", age: 30, city: "New York"} it will print the entire object because we are using console.log(arr)

console.log(arr); 

for (let key in arr) {
    console.log(`${key}: ${arr[key]}`);
}




// for-of loop: let arr = [1, 2, 3]; for (let value of arr) { console.log(value); }
// for-of is used to iterate over the values of an iterable object such as an array or a string but not an object.
for (let value of "hello") {
    console.log(value);
}


let arr=[1,2,3,4,5];
for (let value of arr){
    console.log(value);
}


let str="hello";
let size=0;
for (let value of str){
    // size++;
    console.log('v=',value);
}
// console.log(size);


// assignment: 

// create a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array using for-of loop.

let arr=[1,2,3,4,5];
let sum=0;
for (let value of arr){
    sum+=value;
}
console.log(sum);


// print all the even numbers from 1 to 10 using for, while and do-while loop.

for (let i=1;i<=10;i++)
{
    if (i%2==0){
        console.log(i);
    }
}

let i=1
while (i<=10)
{
    if (i%2==0){
        console.log(i);
    }
    i++;
}

do{
    if (i%2==0){
        console.log(i);
    }
    i++;
}while(i<=10);



// create a game where u start with any randoom game number. ask the user to keep guessing the game number until theh user enters correct Value.
// if the user enters correct value, display "you won" message. if the user enters wrong value, display "try again" message.

let gamenumber = 22;
// let gamenumber = "22";

let userguess = Number(prompt("Please enter a number:"));

// console.log(userguess);
// console.log(userguess === gamenumber);

while (userguess != gamenumber)
// while (userguess !== gamenumber)

{
    userguess = Number(prompt("You entered the wrong number. Guess again:"));
}

console.log("congrats you won");



// forEach loop: let arr = [1, 2, 3]; arr.forEach(function(value) { console.log(value); });


// break loop: for (let i = 0; i < 10; i++) { if (i === 5) { break; } console.log(i); }


// continue loop: for (let i = 0; i < 10; i++) { if (i === 5) { continue; } console.log(i); }


// return loop: function add(a, b) { return a + b; }


// label loop: let obj = { a: 1, b: 2, c: 3 }; for (let key in obj) { if (key === 'b') { continue; } console.log(key); }







// strings: strings are sequences of characters that can be used to represent text, numbers and symbols

// string methods: length, charAt, charCodeAt, concat, indexOf, lastIndexOf, slice, substr, substring, split, replace, toLowerCase, toUpperCase, trim and trimStart are used to manipulate strings

let str= 'hello world';

console.log(str.length);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.concat('hello'));
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));
console.log(str.slice(0,5));
console.log(str.substr(0,5));
console.log(str.substring(0,5));
console.log(str.split(' '));
console.log(str.replace('hello', 'hi'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.trimStart());

// in this string we have inbuilt properties and (inbuilt functions - known as methods)

str.length;
str.charAt(0);
str.charCodeAt(0);
str.concat('hello');
str.indexOf('l');
str.lastIndexOf('l');
str.slice(0,5);
str.substr(0,5);
str.substring(0,5);
str.split(' ');
str.replace('hello', 'hi');
str.toLowerCase();
str.toUpperCase();
str.trim();
str.trimStart();


// template literals: are used to create strings that contain variables and expressions, backticks are used to create template literals

let name = 'John';
let age = 30; 

console.log(`My name is ${name} and I am ${age} years old`); // ` ` we use to create template literals and ${name} and ${age} are variables that are used to create template literals by using placeholder.

// escape characters are used to escape special characters in a string.

let str = 'hello\nworld';
console.log(str);

let str = 'hello\tworld';
console.log(str);

let str = 'hello\\world';
console.log(str);

let str = 'hello\'world';
console.log(str);

let str = 'hello\"world';
console.log(str);

let str = 'hello\aworld';
console.log(str);

let str = 'hello\bworld';
console.log(str);

let str = 'hello\fworld';
console.log(str);

let str = 'hello\rworld';
console.log(str);

let str = 'hello\vworld';
console.log(str);

let str = 'hello\oworld';
console.log(str);

let str = 'hello\sworld';
console.log(str);

let str = 'hello\zworld';
console.log(str);

let str = 'hello\x77orld';
console.log(str);




// assignment:
// create a template literal that concatenates the username and the length of the username or Write a JavaScript program that generates a customized username handle based on user input.

let name = prompt("Please enter your name:");

let username = '@' + prompt("Please enter your username:") + '20';
console.log(username);