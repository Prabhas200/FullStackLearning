console.log("hello world");
console.log("welcome to mern stack");

// Variables in js

// reserved words cannot be used as variable names in js

fullname = "john doe";
age = 30;
price = 10.5;
rating = 4.5;
a=true;
y=null;
p=undefined;
console.log(fullname);


// es6 ecamas script came in 2016 as new features of js. let and const are part of es6. var is part of es5.

// let: varriable cannnot be redeclared again but can be updated. block scope variable
// var: variable can be redeclared and updated in the same scope. global scope variable used before 2015.
// const: variable cannot be redeclared or updated once declared. block scope variable

let a;
a=10;
console.log(a);
a=20;
console.log(a);

var b;
b=10;
console.log(b);
b=20;
console.log(b);

const c=10;
console.log(c);

// c=20;
// console.log(c);

// blockscope() is a function that demonstrates block scope of let and const
{
    let d=10;
    console.log(d);
    d=20;
    console.log(d);
}


// let x=10;
// let y=20;
// let z=x+y;
// console.log(z);

// var a=5;
// var b=10;
// var c=a+b;
// console.log(c);

// fullname="john doe";
// console.log("fullname");
// console.log(fullname);

// const name="john";
// console.log(name);
// const age=30;
// console.log(age);



const person={name:"john",age:30};
console.log(person);

const person1={
    name:"john",
    age:30,
    isMarried:true
};
console.log(person1);




const person2={
    name:"john",
    age:30,
    isMarried:true,
    children:["jane","joe"]
};
console.log(person2);





const person3={
    name:"john",
    age:30,
    isMarried:true,
    children:["jane","joe"],
    address:{
        street:"123 main st",
        city:"new york",
        state:"ny",
        zip:"10001"
    }
};
console.log(person3);





const person4={
    name:"john",
    age:30,
    isMarried:true,
    children:["jane","joe"],
    address:{
        street:"123 main st",
        city:"new york",
        state:"ny",
        zip:"10001"
    },
    getMarried:function(){
        this.isMarried=true;
    }
};
console.log(person4);
person4.getMarried();
console.log(person4);






const person5={
    name:"john",
    age:30,
    isMarried:true,
    children:["jane","joe"],
    address:{
        street:"123 main st",
        city:"new york",
        state:"ny",
        zip:"10001"
    },
    getMarried:function(){
        this.isMarried=true;
    },
    greet:function(){
        console.log("hello "+this.name);
    }
};
console.log(person5);
person5.getMarried();
console.log(person5);
person5.greet();
console.log(person5);




// data types in js:
// primitive data types: string, number, boolean, null, undefined, symbol and bigint are the primitive data types in js. primitive data types are immutable and passed by value. (7 primitive data types)
// primitive data types are immutable and passed by value. non-primitive data types are mutable and passed by reference.

// string: a sequence of characters
// number: a number
// boolean: true or false
// null: null
// undefined: undefined
// symbol: a unique identifier
// bigint: a large integer


// non-primitive data types: object, array, function, date, regExp, error and proxy object are the non-primitive data types in js. non-primitive data types are mutable and passed by reference. (6 non-primitive data types)
//non-primitive data types are mutable and passed by reference. primitive data types are immutable and passed by value.

// object: a collection of key value pairs
const student={
    name:"john",
    age:30,
    isMarried:true,
    children:["jane","joe"],
    address:{
        street:"123 main st",
        city:"new york",
        state:"ny",
        zip:"10001"
    }
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student.address.city);


// assignment: create a profile object with the following properties: name, age, username, isfollow, followers, following, posts, about, website. print the profile object and its type. print the type of the username property.

const profile={
    name:"john",
    age:30,
    username:"johndoe",
    isfollow:true,
    followers:1000,
    following:500,
    posts:100,
    about:"I am a software engineer",
    website:"https://www.johndoe.com"
}
console.log(profile);
console.log(typeof profile);
console.log(typeof profile['username']);


// array: a collection of elements
// function: a collection of statements that can be called
// date: a collection of elements
// regExp: a collection of elements
// error: a collection of elements
// proxy object: a collection of elements





