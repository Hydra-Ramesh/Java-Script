/**
 * 1. It's used to defined a variable.
 * 2. It has function scope but no block scope.
 * 3. It is hoisted in preior.
 */

function f1(){
    var a=5
    console.log(a)
}
f1()
let b=20
console.log(typeof f1)
console.log(typeof b)
