// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ------------------

// var -> function
// let -> block
// function hi() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
// console.log(i); error
// }
// function hi() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); ans=5
// }
// hi();

// const x = 5;
// x = 2;
// console.log(x); // error

// ------------------------------------------------
// objects
// const person = {
//   name: "Srinath",
//   // walk: function (){},
//   walk() {},
//   talk() {},
// };
// person.talk();
// // person["name"] = "srii";
// const targetMember = "name";
// person[targetMember] = "sriii";

//----------------------------------------------------------
// this keyword

//(Doesn't always works this way ->// reference to the current object
// const person = {
//   name: "Srinath",
//   walk() {
//     console.log(this);
//   },
// };

// person.walk(); // reference to the current object //{name: 'Srinath', walk: ƒ}

// const walk = person.walk;
// console.log(walk); //f walk(){consol.log(this);}

// walk(); // undefined (it will return global object which is ->window object   Here strict mode is enabled so we got window object as undefined
// So the value of this is determined how the function is called
//-----------------------------------------
//----------------------------------------------

// Binding 'this'

// (how to fix that window object problem)

// const person = {
//   name: "Srinath",
//   walk() {
//     console.log(this);
//   },
// };

// // In js functions are objects

// const walk = person.walk.bind(person);
// walk(); //{name: 'Srinath', walk: ƒ}

// =============================================
// Arrow functions

// const square = function (number) {
//   return number * number;
// };

// const square = (number) => number * number; // number goes to number * number
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// // const activeJobs = jobs.filter(function (job) {
// //   return job.isActive;
// // });
// const activeJobs = jobs.filter((job) => job.isActive); // filter jobs where job is active

//===================================
// Array.map method
// for rendering
// const colors = ["red", "green", "blue"];
// // const items=colors.map(funtion(color){
// //   return : '<li>' + color +'</li>'
// // });

// // const items = colors.map((color) => "<li>" + color + "</li>");
// const items = colors.map((color) => `<li> ${color}</li>`);

// console.log(items); //['<li> red</li>', '<li> green</li>', '<li> blue</li>']

//====================================================
// object destructuring
// const address = {
//   street: "hi",
//   city: "",
//   country: "",
// };

// // object destructiuring as follows....
// // const street=address.street;
// // const city=address.city;
// // const country=address.country;

// // but this is a repertitive code, so there is a shortcut for this ->
// const { street, city, country } = address;

// // to rename for ther convienet (alias)
// const { street: st } = address;
// console.log(st);

//======================================================
// spread operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined=first.concat(second);
// //same as---->
// // const combined = [...first, ...second];
// // const combined = [...first, "a", ...second, "b"];

// // using spread operator we can easily clone array
// const clone = [...first];
// console.log(first);
// console.log(clone);

// to combine objects
// const first = { name: "Srinath" };
// const second = { job: "Engineer" };

// // const combined = { ...first, ...second, location: "India" };
// // console.log(combined);

// // to clone objects
// const clone = { ...first };
// console.log(clone);

//=====================================================
// classes

// const person = {
//   name: "Srinath",
//   walk() {
//     console.log("walk");
//   },
// };

// const person2 = {
//   name: "Srinath",
//   walk() {
//     console.log("walk");
//   },
// };

// In both of these objects we have the similar implementation of the method walk
// if there turned out to be any bug in that method
// we need to change in all the instances which is very hard

// when we have an object with atleast one method we need a blue print to
// create objects of that type. That's when we have classes

//should be capital
// class CoolPerson
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }

// const person = new Person("Srinath");
// person.walk();

// ==================================================
// Inheritance
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }

// class Teacher extends Person {
//   constructor(name, degree) {
//     //---> this.name = name;(Must call super
//     // constructor in derived class before accessing 'this' or
//     // returning from derived constructor)

//     super(name); //mandatory
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }
// // const teacher = new Teacher("Srinath");

// const teacher = new Teacher("Srinath", "BTech");
// console.log(teacher.degree);

// =================================================================

// Modules

// import { Teacher } from "./teacher";
// const teacher = new Teacher("Srinath", "BTech");

// teacher.teach(); //teach
// console.log(teacher.name); //Srianth

// Named and Default exports

// What is exported is 'named export'.. and we can set some to be default exports
// import { Teacher } from "./teacher";

// import Teacher from "./teacher"; //default export

// default --> import ... from '';
// named --> import {...} from '';

import Teacher, { promote } from "./teacher"; // both default and named export

// import React,{Component} from "react";  (l./ for own modules that are part of our project , here react is 3rd party library which is stored in node modules folders)
const teacher = new Teacher("Srinath", "BTech");
teacher.teach();

console.log(" This is just demo");
