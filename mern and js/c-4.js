// chapter 4: arrays and its methods

// arrays: arrays are a collection of elements of the same type stored in contiguous memory locations.
let marks = [90, 80, 70, 60, 50];
console.log(marks);

let names = ['john', 'jane', 'joe'];
console.log(names);

console.log(names.length);


// array indices: 
// the index of an array is the position of the element in the array.
// the first element in an array is at index 0. the last element in an array is at index length - 1.
// the length property is a read-only property. it returns the number of elements in the array.
console.log(names[0]);
console.names[3]; // index out of bound error shows output as undefined
console.log(marks[2]=23); // to change the value of an array element at a particular index we use array[index]=value in console which mean it can be changed because its a mutable and we cant change the length of an array in strict mode because they are immutable


// looping over arrays: this prints all the elements of the array in the console.
// loops are used to execute a block of code multiple times or until a certain condition is met and its an iterable statement that consist of three parts: initialization, condition and increment or strings, objects, arrays and functions.
 
// for loop is used to execute a block of code multiple times.

let marks = [90, 80, 70, 60, 50];

for (let i = 0; i < marks.length; i++)  // i is the index, marks.length is the length of the array and i++ is the increment
{
    console.log(marks[i]);
}


// for-of loop is used to iterate over the values of an iterable object such as an array or a string but not an object.


for(let value of marks){ // this will print the values of the array
    console.log(value);
}
console.log(marks.unshift()); // unshift is used to add an element to the beginning of the array.


// for-in loop is used to iterate over the properties of an object. such as object.keys(), object.values() and object.entries()


for (let key in marks){ // this will print the keys of the object
    console.log(key);
}


do{
    console.log(marks.shift()); // shift is used to remove the first element of the array
}while(marks.length>0);



// assignmemnt:


// for a given array with marks of 5 students, write a function that returns and sums the average of all the marks in the array.


let arr=[1,2,3,4,5];
let sum=0;
for (let value of arr){
    sum+=value;
}
console.log(sum); /// this will print the sum of the array
console.log(sum/arr.length); // this will print the average of the array


// for a given array with marks of 5 students -> [90, 80, 70, 60, 50], write a function that returns the average marks of the entire class.


let arr=[90, 80, 70, 60, 50];
let sum=0;
for (let value of arr){
    sum+=value;
}
console.log(sum);
console.log(sum/arr.length);


// for a given array with prices of 5 items, write a function that returns and sums the average of all the prices in the array with a discount of 10% on all the items in the array.


let arr=[250, 500, 750, 1000, 1250];
let sum=0;
for (let value of arr){
    sum+=value;
}
console.log(sum);

let discount=5;
let discount = prompt("Enter the discount"); // this will prompt the user to enter the discount and then print the value of the array with a discount of entered discount.

let total=sum-(sum*discount/100); // this will print the sum of the array by adding all the values of the array and then subtracting the sum of the array with a discount of 5% and then dividing the sum of the array with a discount of 5% by 100 and then multiplying the sum of the array with a discount of 5% by 100 by using for-of loop
let total=sum*(100-discount)/100; // this will print the sum of the array with a discount of 5% by using for-of loop

let total=sum*(sum-discount)/100; // do not use this because it will give wrong output because of precedence of operators.
console.log(total); // this will print the sum of the array with a discount of 5% by using for-of loop



// these codes gives each value of the array with a discount of 5%


for (let value of arr){
    let discount=5;
    let total=value-(value*discount/100); // this will print the value of the array with a discount of 5%
    console.log(total); // this will print the value of the array
}

for (let value of arr){
console.log(`value at index ${arr.indexOf(value)} is ${value-(value*5/100)}`); // this will print the value of the array with a discount of 5%
}

for (let value of arr){
    console.log(`value at index ${arr.indexOf(value)} is ${value}`); // this will print the value of the array
    console.log(`value at index ${arr.indexOf(value)} after discount is ${value-(value*5/100)}`); // this will print the value of the array with a discount of 5%

}

console.log(arr); // this will print the array original values


for (let i=0;i<arr.length;i++){
    console.log(arr[i]-(arr[i]*5/100)); // this will print the value of the array with a discount of 5% seperately
}


// in this code the value of the array is overwritten by the value of the array with a discount of 5% by using for loop 

let arr=[250, 500, 750, 1000, 1250];

console.log(arr); // this will print the array original values

let discount = 5; // Change this number to dynamically change the discount
let discount = prompt("Enter the discount"); // this will prompt the user to enter the discount and then print the value of the array with a discount of entered discount.

for (let i = 0; i < arr.length; i++) {
  // Overwrite the current item directly
  arr[i] = arr[i] * (100 - discount) / 100; 
}

console.log(arr); 
// Output: [237.5, 475, 712.5, 950, 1187.5]
