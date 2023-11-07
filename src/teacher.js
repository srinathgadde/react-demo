// import { Person } from "./person"; // no need with the extension
// export class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }

// Named and Default exports

import { Person } from "./person"; // no need with the extension

// export function promote() {}

// In js technically a class is an object.
// js classes are almost most of constructors, and constructors functions which are nothing but objects.
// export default class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }

export function promote() {}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
