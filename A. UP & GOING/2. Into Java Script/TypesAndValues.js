// JavaScript has typed values, not variables.
// They are string, number, boolean, null, undefined, symbol, bigint, object.

var a;
console.log(typeof a); // Output: undefined

var b=10;
console.log(typeof b); // Output: number

var c="Hello World!";
console.log(typeof c); // Output: string

var d=true;
console.log(typeof d); // Output: boolean

var e=null;
console.log(typeof e); // Output: object

var f=undefined;
console.log(typeof f); // Output: undefined

var g=Symbol("My Symbol");
console.log(typeof g); // Output: symbol

var h=BigInt(10000000000000000000);
console.log(typeof h); // Output: bigint

var i={name: "Ramesh"};
console.log(typeof i); // Output: object
