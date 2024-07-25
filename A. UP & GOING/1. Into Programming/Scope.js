function one(){
    // this 'a' only exists in this function
    var a = 10;
    console.log(a);
}

function two(){
    // this 'b' only exists in this function
    var b = 20;
    console.log(b);
}

one();
two();

function outerFunction(){
    var c = 30;
    console.log(c); // we can access only 'c' here
    function innerFunction(){
        // we can access 'c' and 'd' both here
        var d = 40;
        console.log(c+d);
    }
    innerFunction();
}
outerFunction();

// Lexical scope says that variables are not accessible outside of the function in which they are defined.