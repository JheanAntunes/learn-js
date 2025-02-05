class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

const person = new Person("John", 30);
const person2 = new Person("Jane", 25);
const person3 = new Person("Doe", 40);
console.log(person.greet());
console.log(person2.greet());

const people: Person[] = [person, person2];
people.push(person3);

for (let i = 0; i < people.length; i++) {
  console.log(people[i].greet());
}

people.forEach((person) => {
  console.log(person.greet());
});

for (const person of people) {
  console.log(person.greet());
}
