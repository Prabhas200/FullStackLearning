console.log("hello world");
console.log("welcome to mern stack");


Variables in js
let x=10;
let y=20;
let z=x+y;
console.log(z);

var a=5;
var b=10;
var c=a+b;
console.log(c);

fullname="john doe";
console.log("fullname");
console.log(fullname);

const name="john";
console.log(name);
const age=30;
console.log(age);



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

