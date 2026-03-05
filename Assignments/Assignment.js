//   SECTION 1 : Primitive Data Types
// 1. Print length of a string

let str = "JavaScript";
console.log(str.length); 

// 2. Check if a value is a number

function checkNumber(val) {
    return typeof val === "number";
}

console.log(checkNumber(25));    
console.log(checkNumber("25")); 

// 3. Convert string "123" to number 123

let numStr = "123";
let converted = Number(numStr);
console.log(converted);        
console.log(typeof converted); 

// 4. Compare two numbers

let a = 20;
let b = 30;

if (a > b) {
    console.log("Greater");
} else if (a < b) {
    console.log("Smaller");
} else {
    console.log("Equal");
}

// 5. Join first name and last name

let firstName = "Rahul";
let lastName  = "Sharma";

let fullName = firstName + " " + lastName;
console.log(fullName);  

//   SECTION 2 : Functions
// 1. Function expression to add two numbers (multiple inputs)

let add = function(x, y) {
    return x + y;
}

console.log(add(10, 20));  
console.log(add(5, 7));    
console.log(add(100, 250));

// 2a. Regular function - square of a number using prompt

function square(n) {
    let result = n * n;
    console.log(result);
}

// In browser you'd call: square(Number(prompt("Enter a number:")))
square(5);   // 25
square(9);   // 81


// 2b. Arrow function - square of a number

let squareArrow = (n) => {
    let ans = n * n;
    console.log(ans);
}

squareArrow(5);   
squareArrow(4);   


// 3. Lambda (arrow) function - even or odd check

let checkEvenOdd = (num) => {
    if (num % 2 == 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkEvenOdd(4);   
checkEvenOdd(7);   
checkEvenOdd(10);  

// 4. Temperature conversion functions

function celsiusToFahrenheit(c) {
    let f = (c * 9/5) + 32;
    return f;
}

function fahrenheitToCelsius(f) {
    let c = (f - 32) * 5/9;
    return c;
}

console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(100)); 
console.log(fahrenheitToCelsius(98.6)); 
console.log(fahrenheitToCelsius(32));   

// 5. Convert multiply function into arrow function

// Original:
// function multiply(a, b) {
//     return a * b;
// }

// Converted to arrow function:
let multiply = (a, b) => a * b;

console.log(multiply(3, 4));   
console.log(multiply(6, 7));   