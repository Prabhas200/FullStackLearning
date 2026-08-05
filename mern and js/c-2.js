
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
    console.log("x is greater than 30");
}
else {
    console.log("x is not greater than 30");
}


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
    // case 32:
    //     console.log("x is 32");
    //     break;
    default:
        console.log("x is not 10, 20 or 30");
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


// null coalescing operator: ?? is used to assign a value to a variable if it is null or undefined


