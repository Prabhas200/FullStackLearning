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





