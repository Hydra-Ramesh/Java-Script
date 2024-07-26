var a="My String";
console.log(a); // Output: My String
console.log(a.length());
console.log(a.charAt(0)); // Output: M
console.log(a.charAt(a.length()-1)); // Output: n
console.log(a.concat(" World")); // Output: My String World
console.log(a.split(" ")); // Output: ["My", "String", "World"]
console.log(a.substring(3, 7)); // Output: trin
console.log(a.toUpperCase()); // Output: MY STRING
console.log(a.toLowerCase()); // Output: my string
console.log(a.replace("My", "Your")); // Output: Your String
console.log(a.includes("World")); // Output: true
console.log(a.startsWith("My")); // Output: true
console.log(a.endsWith("World")); // Output: true
console.log(a.slice(3, 7)); // Output: trin
console.log(a.repeat(3)); // Output: My StringMy StringMy String
console.log(a.trim()); // Output: My String

var b=1.23456789;
console.log(b.toFixed(2)); // Output: 1.23
console.log(b.toString()); // Output: 1.23456789
console.log(b.toFixed(0)); // Output: 1
console.log(b.toExponential(2)); // Output: 1.23e+1
console.log(b.toFixed(2).replace("e+1", "e1")); // Output: 1.23e1