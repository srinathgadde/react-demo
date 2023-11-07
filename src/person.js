// Generally the objects that we define in modules are private by default.
// So by exporting we can make them as public or in other words we can access them from the outside.
export class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
