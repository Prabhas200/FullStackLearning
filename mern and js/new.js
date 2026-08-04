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

