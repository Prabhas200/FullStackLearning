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





// array methods: this is a collection of functions that can be used to manipulate arrays in javascript


// push, pop, shift, unshift, splice, slice, sort, reverse and map


let food= ["pizza", "pasta", "burger"];



let a=food.shift(); // this will remove the first element of the array and return it and also it stores the removed element and  prints the it.
console.log(a);

let b=food.unshift("chicken"); // this will add chicken to the beginning of the array and return the length of the array and it stores and prints the length of the array
console.log(b);



food.push("chicken"); // this will add chicken to the end of the array
console.log(food); // this will print the array original values
console.log(food.toString()); // this will print the array as a string
console.log(typeof food); // this will print the type of the array as an object
console.log(typeof food.toString()); // this will print the type of the array as a string


food.pop(); // this will remove the last element of the array
console.log(food);

food.shift(); // this will remove the first element of the array
console.log(food);

food.unshift("chicken"); // this will add chicken to the beginning of the array
console.log(food);


console.log(food.slice(1, 2)); // this will print the second element of the array and it will not include the second element of the array


food.splice(1, 1); // this will remove the second element of the array
console.log(food);

food.splice(1, 1, "chicken"); // this will remove the second element of the array and add chicken to the second element of the array
console.log(food);

food.splice(1, 0, "goat"); // this will add chicken to the second element of the array
console.log(food);




food.splice(1, 1, "chicken"); // this will add chicken to the second element of the array
console.log(food);
food.splice(1, 2, "chicken"); // this will add chicken to the second element of the array
console.log(food);
food.splice(1, 0, "chicken"); // this will add chicken to the second element of the array
console.log(food);
food.splice(1, 1); // this will add chicken to the second element of the array
console.log(food);
food.splice(1, 2); // this will add chicken to the second element of the array
console.log(food);




food.sort(); // this will sort the array in alphabetical order
console.log(food);

food.reverse(); // this will reverse the array
console.log(food);




// this will be a higher order function that takes a function as an argument and returns a new array with the same length as the original array.

food.map((item) => console.log(item)); // this will print all the elements of the array in the console in a new line seperately and it will be discused in the function chapter.




// forEach, filter, find, findIndex, some, every, reduce and reduceRight
// concat, join, slice and split, unshift, shift
// includes, indexOf and lastIndexOf 
// map, forEach, filter, find, findIndex, some, every, reduce and reduceRight

//concat method: this method is used to join two or more arrays into a single array and returns a new array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);


// join method: this method is used to join the elements of an array into a string and returns a string

let arr = [1, 2, 3,];
let str = arr.join('-');
console.log(str);








// assignment: 
// create a array to store the companies that you have worked for and print the array using for-of loop.

let companies = ["company1", "company2", "company3", "company4", "company5"];
for (let company of companies) {
    console.log(company);
}
console.log(companies);


companies.push("company6"); // this will add company6 to the end of the array
console.log(companies);

companies.unshift("company0"); // this will add company0 to the beginning of the array
console.log(companies);

companies.pop(); // this will remove the last element of the array
console.log(companies);

companies.shift(); // this will remove the first element of the array
console.log(companies);

companies.splice(1, 1, "company7"); // this will remove the second element of the array
console.log(companies);
