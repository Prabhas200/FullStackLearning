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

