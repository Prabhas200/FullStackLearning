
// chapter 2: operators and conditional statements

// operators: +, -, *, /, %, ++, --, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?:

// arithmetic operators: +, -, *, /, % are used to perform arithmetic operations on numbers

let x=5;
let y=2;
console.log("The sum of x and y is: ",x + y);
console.log("The difference of x and y is: ",x - y);
console.log("The product of x and y is: ",x * y);
console.log("The quotient of x and y is: ",x / y);
console.log("The remainder of x and y is: ",x % y);
console.log("The increment of x is: ",x**y);
// const z=x+y;
// console.log(z);

 
// increment and decrement operators: ++ and -- are unary operators that increase or decrease the value of a variable by 1

console.log("The increment of x is: ",++x); // increment operator increases the value of x by 1 and returns the new value which is prefix
console.log("The value of x after postfix increment is: ",x++); // the value of x after postfix increment is 6
console.log(x); // the value of x is 7
console.log("The decrement of y is: ",--y); // decrement operator decreases the value of y by 1 and returns the new value which is prefix
console.log("The value of y after postfix decrement is: ",y--); // the value of y after postfix decrement is 1
console.log(y); // the value of y is 0


// assignment operators: =, +=, -=, *=, /= and %= are used to assign values to variables 

x+= 5; // x=x+5
console.log(x); // the value of x is 12
x-= 5; // x=x-5
console.log(x); // the value of x is 7
x*= 5; // x=x*5
console.log(x); // the value of x is 35
x/= 5; // x=x/5
console.log(x); // the value of x is 7
x%= 5; // x=x%5
console.log(x); // the value of x is 2
x**= 5; // x=x**5
console.log(x); // the value of x is 32


// comparison operators: ==, ===, !=, !==, >, <, >=, <= are binary operators that compare two values and return true or false

console.log(5==5); // true
console.log(5==6); // false
console.log(5===5); // true
console.log(5===6); // false
console.log(5!=5); // false
console.log(5!=6); // true
console.log(5!==5); // false
console.log(5!==6); // true
console.log(5>5); // false
console.log(5>6); // false
console.log(5<5); // false
console.log(5<6); // true
console.log(5>=5); // true
console.log(5>=6); // false
console.log(5<=5); // true
console.log(5<=6); // true
console.log(5<=4); // false



// conditional statements: if, else, else if and switch are used to control the flow of a program based on a condition or a set of conditions 


if (x>30) {
    a="x is greater than 30";
}
else {
    a="x is not greater than 30";
}
console.log("The value of a is:",a);


if (x>40) {
    console.log("x is greater than 40");
}
else if (x<40) {
    console.log("x is less than 40");
}
else {
    console.log("x is equal to 40");
}


switch (x) {
    case 10:
        console.log("x is 10");
        break;
    case 20:
        console.log("x is 20");
        break;
    case 30:
        console.log("x is 30");
        break;
    case 40:
        console.log("x is 40");
        break;
    // case 32:
    //     console.log("x is 32");
    //     break;
    default:
        console.log("x is not 10, 20, 30 or 40");
        break;
}




// logical operators: &&, ||, ! are used to combine conditions and return true or false 

if (x>30 && x<40) {
    console.log("x is between 30 and 40");
}
else {
    console.log("x is not between 30 and 40");
}

if (x>30 != x<40) {
    console.log("x is between 30 and 40");
}
else {
    console.log("x is not between 30 and 40");


}
if (x>30 || x<40) {
    console.log("x is between 30 and 40");
}
else {
    console.log("x is not between 30 and 40");
}




// ternary operator: ? is used to assign a value to a variable based on a condition
// a?b:c; // if a is true, b is assigned to c, otherwise c is assigned to c

let annie=23;
let result=annie>=18? "You are eligible to vote" : "You are not eligible to vote";
console.log(result);

let age=20;
let result1=age<=18? console.log("You are eligible to vote") : console.log("You are not eligible to vote");


// null coalescing operator: ?? is used to assign a value to a variable if it is null or undefined


// assignment:

// get user to input their name and age and store it in a variable. If the user does not input their name or age, assign a default value to the variable using the null coalescing operator.

// let userName = prompt("Please enter your name:") ?? "Default Name: John Doe";
// let userAge = prompt("Please enter your age:") ?? "Default Age: 30";
// console.log("Name:", userName);
// console.log("Age:", userAge);

// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// let result=name ?? "John Doe";
// let result1=age ?? 30;
// console.log(result);
// console.log(result1);

// var fullname="john doe";
// var age=30;
// var result=fullname ?? "John Doe";
// var result1=age ?? 30;
// console.log(result);
// console.log(result1);

// const name="john";
// const age=30;
// const result2=name ?? "John Doe";
// const result3=age ?? 30;
// console.log(result2);
// console.log(result3);



//get user to input a number using prompt and store it in a variable. check if the number multiplied by 2 or not.

// alert("hello world");

let number=prompt("Please enter a number:");
let multiplied=number*2;
if (multiplied>10) {
    console.log("The number multiplied by 2 is greater than 10");
}
else {
    console.log("The number multiplied by 2 is not greater than 10");
}


// write a code that takes a number as input and checks if it is even or odd using the ternary operator. If the number is even, print "The number is even", otherwise print "The number is odd".

let num=prompt("Please enter a number:");
let result2=num%2===0? "The number is even" : "The number is odd";
console.log(result2);



// write a code which can give grades to students according to theirs scores:
// 80-100, A
// 60-79, B 
// 40-59, C
// 20-39, D
// 0-19, E 

let score=prompt("Please enter your score:");
let result3=score>=85? "A" : score>=60? "B" : score>=40? "C" : score>=20? "D" : score>=1? "E" : "F";
console.log(result3);

// or

let score1=prompt("Please enter your score:");
if (score1>=80 && score1<=100) {
    console.log("A");
}
else if (score1>=60 && score1<=79) {
    console.log("B");
}
else if (score1>=40 && score1<=59) {
    console.log("C");
}
else if (score1>=20 && score1<=39) {
    console.log("D");
}
else if (score1>=1 && score1<=19) {
    console.log("E");
}
else {
    console.log("F");
}
console.log(result4);


