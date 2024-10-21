// Day-05 Functions

// Task1 - write a function to check if a given number is a even or odd.
function evenOrOdd (num) {
    if(num == 0) {
        console.log("Even number");
    } else if(num % 2 == 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}

// evenOrOdd(13);


// Task2 - write a function to square of a number and return the result.
function numSquare(num) {
    let square = (num * num);
    return square;
}

// console.log(numSquare(9));


// Task3 - Find the maximum of two numbers and return the result.
function largestNum (num1, num2) {
    let result;
    if(num1 == num2) {
        result = `both are same numbers`;
    } else if (num1 > num2) {
        result = `${num1} is a large number`;
    } else {
        result = `${num2} is a large number`;
    }
    return result;
}

// console.log(largestNum(45, 60));


// Task4 - write a function to concat two strings and return the result.
function concatStr(str1, str2) {
    res = str1.concat(str2);
    return res;
}

// console.log(concatStr("Hello", "World"));


// Task5 - write a arrow function sum of two numbers and return result.
const sumTwoNum = (num1, num2) => {
    result = num1 + num2;
    return result;
}

// console.log(sumTwoNum(10, 20));


// Task6 - write a arrow function to check if a string contains a specific charecter or not returns boolean value.
const checkChar = (str, findChar) => {
    // String.includes('char') returns the true or false if char is in given string.
    if(str.includes(findChar)) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkChar('Hello', 'w'));


// Task7 - Write an arrow function that takes two parameters and returns their product, Provide a default value for second value.
const productOfTwoNum = (num1, num2 = 10) => {
    product = num1 * num2;
    return product;
}

// console.log(productOfTwoNum(4));


// Task8 - Write an arrow function that takes person name and age and returns a greeting message, Provide a default message for age.
const greetMsg = (personName, age = 20) => {
    let greet = `Welcome ${personName} and age is ${age}`;
    return greet;
}

// console.log(greetMsg("John", 22));

// Task9 -  write a high order function that takes a function and a number, calls that function that many times.
function repeat(func, times) {
    for(let i = 0; i < times; i++) {
        func();
    }
}

function message() {
    console.log("Hello World!");
}

// repeat(message, 3);


// Task10 - write a higher-order function that takes two functions and a value, applies the first function to the value, and applies the second function to the result.
function pipe(func1, func2, value) {
    return func2(func1(value));
}

function double(x) {
    return x * 2;
}

function addOne(x) {
    return x + 1;
}

// console.log(pipe(double, addOne, 5));