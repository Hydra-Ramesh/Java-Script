// Function without parameters
function greet() {
    console.log("Hello, World!");
}
greet();

// Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Ramesh");

// Function with default parameter 
function greetUserWithDefault(name="World") {
    console.log("Hello, " + name + "!");
}
greetUserWithDefault();
