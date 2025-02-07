//create function constructor
function Person(name: string, age: number) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 20);
console.log(person1);

const objectAbstrato = {
  name: "John",
  age: 20,
};

const objectLiteral = {
  genero: "Male",
  __proto__: objectAbstrato,
};

function caracteristica(callback?: VoidFunction) {
  console.log("genero: male");
  callback && callback();
}

const callback = () => {
  console.log("callback function");
};

const novaReferrencia = caracteristica;
novaReferrencia(callback);

//Closures JS

function init() {
  const name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}

init();

//invocation
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(3, 4));

// function object method call
multiply.call(this.globalThis, 3, 4);

// function object method apply
multiply.apply(this.globalThis, [3, 4]);

// function object method bind
const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(3));

const adicao = (a: number, b: number) => a + b;

const calculate = (
  a: number,
  b: number,
  callback: (a: number, b: number) => number
) => {
  return callback(a, b);
};

console.log(calculate(2, 3, adicao));
console.log(calculate(2, 3, multiply));
