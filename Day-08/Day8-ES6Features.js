// Template Literals - Literals delimited with (` `). It also called as template strings
// It allows the multi line strings and string interpolation.

// Task 1 - Use Template literals to create a string that includes the string person name and age, log the string to the console.
const task1 = () => {
    let personName = "Ravinder";
    let age = 30;

    let templateStr = `Welcome ${personName} and Age:${age}`;
    console.log(templateStr);
} 
// task1();


// Task 2 - Create a multi line string using the template literals and log the result to the console.
const task2 = () => {
    let co2Song = `And nothing says "I love you" like your eyes
Fill my lips with carbon dioxide
I just wanna feel like I deserve you
'Cause you deserve me'`;
    console.log(co2Song);

}
// task2();


// Task 3 - Use an array destructuring to extract the first and second element in an array and log the result to the console.
const task3 = () => {
    let arr = [10, 20, 30, 40]
    let [firstEle, secondEle] = arr;
    console.log(firstEle);
    console.log(secondEle);
}
// task3();


// Task 4 - use an object destructuring to extract the book name and author details in a object and log the results to the console.
const task4 = () => {
    const book = {
        title: "the subtule art not giving af",
        author: "mark manson",
        year: 2016
    }
    
    let {title, author, year} = book;
    console.log("Book title:",title, "& Author:",author);
}
// task4();


// Task 5 - Use the spread operator to create a new array that includes all elements from an existing array and add new elements also and log the results to the console.
const task5 = () => {
    let arr = [10, 20, 30, 40];
    let spreadArr = [...arr, 50, 60];
    console.log(spreadArr);
}
// task5();


// Task 6 - Use the rest operator in a function to accept the arbitary number of arguments, sum them and log the result to the console.
const task6 = () => {
    function sumUp(...numbers) {
        return numbers.reduce((acc, cur) => acc + cur)
    }
    console.log(sumUp(5, 10, 15, 20));
}
// task6();


// Task 7 - Write a function that takes two parameters and thier product, with second parameter is default parameter with value 1, log the result to the console.
const task7 = () => {
    function product(num1, num2 = 1) {
        return num1 * num2;

    }
    console.log(product(5, 8));
    console.log(product(7));
}
// task7();


// Task 8 - Use enhanced object literals to create an object with methods and properties, and log the result to the console.
const task8 = () => {
    let name = "John";
    let age = 25;
    const person = {
        name,
        age,
        designation: "Software Developer",
        greet() {
                console.log(`Hello ${this.name} and ${this.age}`);
        },
        nameLength: `${name.length}`
    }
    console.log(person);
}
// task8();


// Task 9 - create an object with computed property names based on variables and log the result to console.
const task9 = ()  => {
    const prefix = "User";
    const id = 123;
    const obj = {
        [`${prefix}_id`]: id,
        [`${prefix}_name`]: 'John Doe',
    };
    console.log(obj);
}
// task9();