// An Array is a special type of object in JavaScript.
var arr=["Hello World", 10, true, null, undefined, Symbol("My Symbol"), BigInt(1)];
console.log(arr);

console.log(arr.length); // Output: 7

console.log(arr[0]); // Output: Hello World
console.log(arr[1]); // Output: 10
console.log(arr[2]); // Output: true
console.log(arr[3]); // Output: null
console.log(arr[4]); // Output: undefined
console.log(arr[5]); // Output: Symbol(My Symbol)
console.log(arr[6]); // Output: 1n

arr.push("New Element");
console.log(arr); // Output: ["Hello World", 10, true, null, undefined, Symbol(My Symbol), BigInt(1), "New Element"]