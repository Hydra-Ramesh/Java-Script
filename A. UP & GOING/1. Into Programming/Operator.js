// Assingment Operator
let x = 10;
let y = 20;
let sum = x + y;
console.log("Sum of x and y is: " + sum);

//Math Operators
let m = 10;
let n = 20;
let addition = m + n;
let difference = m - n;
let product = m * n;
let quotient = m / n;
let remainder = m % n;
console.log("Addition: " + addition);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

// Increment and Decrement Operators
let a = 10;
console.log("Value of a before increment: " + a);
a++;
console.log("Value of a after increment: " + a);

let b = 10;
console.log("Value of b before decrement: " + b);
b--;
console.log("Value of b after decrement: " + b);

//Object Properties Access and Update
let person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  }
};
console.log("Name: " + person.name);
person.age = 31;
console.log("New age: " + person.age);

// Equality and Relational Operators
let u = 10;
let v = 20;
console.log("u == v: " + (u == v)); // do not compare the values, but the types
console.log("u === v: " + (u === v)); // compare the values and types
console.log("u!= v: " + (u!= v));
console.log("u!== v: " + (u!== v));
console.log("u > v: " + (u > v));
console.log("u < v: " + (u < v));
console.log("u >= v: " + (u >= v));
console.log("u <= v: " + (u <= v));


// Logical Operators
let p = true;
let q = false;
console.log("p && q: " + (p && q)); // logical AND, both p and q are true
console.log("p || q: " + (p || q)); // logical OR, either p or q is true
console.log("!p: " + (!p)); // logical NOT, p is false
console.log("p &&!q: " + (p &&!q)); // logical AND, p is true and q is false
console.log("p ||!q: " + (p ||!q)); // logical OR, p is true or q is false

// Ternary Operator
let condition = true;
console.log(condition? "Condition is true" : "Condition is false");

// Values that are included directly in the source code are called literals.
// We can use (" ") and (' ') to print something in the console.
console.log("Hello World!");
console.log('My name is Ramesh Das');

 