function age(){
    return 20;
}
age.bar="Hello";
console.log(age());
console.log(age.bar);
console.log(typeof age); // Output: function
console.log(typeof age.bar); // Output: string
console.log(typeof age()); // Output: number