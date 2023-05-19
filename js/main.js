"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;


// Proceduralne

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;
//
// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
//
// console.dir(getWage);

//
// getWage(baseSalary, overtime, rate);

// OOP

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
//
// employee.getWage();

// const human = {
//   legs: 2,
//   hands: 2
// }
//
// const programmer = Object.create(human);
// programmer.languages = ['JS', 'C#'];

// console.dir(programmer);
// console.log(human.isPrototypeOf(programmer));

// Object
//   v
// human
//   v
// programmer

// for (const key in programmer) {
//   if (!programmer.hasOwnProperty(key)) continue;
//
//   console.log(key);
// }

// const programmersKeys = Object.keys(programmer);
//
// console.log(programmersKeys);



// Funkcja konstruktora

// function Computer(name) {
//   this.name = name;
//   this.sayHello = function() {
//     console.log(`My name is ${this.name}`);
//   }
// }
//
// const desktop = new Computer("Desktop");
// const laptop = new Computer("Laptop");
//
// console.log(desktop.sayHello());
// console.log(laptop);




// class Computer {
//   #id;
//   static generalInfo = "I am a computer";
//
//   static getInfoAboutDate() {
//     return new Date().toLocaleDateString();
//   }
//
//   constructor (name, memory, id) {
//     this.name = name;
//     this.memory = memory;
//     this.#id = id;
//   }
//   sayHello() {
//     console.log(`My name is ${this.name}`);
//   }
//   info() {
//     console.log(`My memory is ${this.memory}`);
//   }
//
//   get id() {
//     return this.#id;
//   }
//
//   set id(newId) {
//     this.#id = newId;
//   }
// }
//
// const desktop = new Computer("Desktop", 4086, "chehf37673647djhdj");

// desktop.sayHello();
// console.log(desktop);
//
// desktop.id = "my new id";
//
// console.log(desktop.id);

// desktop.info();

// console.log(desktop.id);


// console.log(Computer.generalInfo);
// console.log(Computer.getInfoAboutDate());
//
// console.log(desktop);



// class Human {
//   constructor (name) {
//     this.name = name;
//   }
//
//   sayHello() {
//     console.log(`Cześć, jestem ${this.name}`);
//   }
// }
//
// class Programmer extends Human {
//   constructor (name, languages) {
//     super(name);
//     this.languages = languages;
//   }
//
//   myLanguages() {
//     console.log(`Znam takie języki programowania: ${this.languages}`);
//   }
//   sayHello () {
//     console.log("Jestem programistą!!!!");
//   }
// }
//
// class Builder extends Human {
//   constructor (name, skills) {
//     super(name);
//     this.skill = skills;
//   }
//
//
// }
//
// const mietek = new Human("Mietek");
// const zenonProgrammer = new Programmer("Zenon", ['Cobol']);
//
//
// mietek.sayHello();
// zenonProgrammer.sayHello();
// zenonProgrammer.myLanguages();







