/*
    Functions
    ---------
    Reusable
    Divide code into small pieces
    Easy to debug
    Avoid duplication

    Types of functions in javascript
    --------------------------------
    1) Named function 
    -----------------
    function sayHello(){
        console.log("Hi");
    }
    sayHello();

    2) Function with parameeters
    ----------------------------
    function greet(name){
        console.log("Hello, " + name + "!");
    }
    greet("Sudheer");

    3) Function with return values
    ------------------------------
    function EvenOrOdd(number){
        if(number % 2 == 0){
            return "Even";
        }else{
            return "Odd";    
        }
    }
    console.log(evenOrOdd(10));

    4) Function expression
    ----------------------
    Functions can also stored in expression

    const add = function(a, b){
        return a + b;
    }
    console.log(add(10, 20));

    5) Arrow functions
    ------------------
    A modern, shorter way to write functions

    const sub = (a, b) => a - b;
    console.log(sub(20, 10));

    6) Default parameters
    ----------------------
    If no argument is passed, use a default value

    function greet($name = "Guest"){
        console.log("Hello, " + name + '!');
    }
    greet("Sudheer");

    7) Anonymous function
    ---------------------
    Function without a name, often used inside other code
    setTimeout(function(){console.log("Timeout message")}, 2000);

    8) Immediately invoked function expression
    ------------------------------------------
    (function(){console.log("IIFE")})();

    9) Recursive function
    ---------------------
    A function calls itself

    function factorial(n) {
    if (n === 1) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(5));

*/