// Task 1 - Create an array from 1 to 5 and log the array to the console.
const task1 = () => {
    let arr = [1, 3, "Hello", 8];
    console.log(arr);
}
// task1();


// Task 2 - Access the first and last element of the array and log them to the console.
const task2 = () => {
    let arr = [15, 34, 23, 67, 55];
    console.log("First Ele: ", arr[0]);
    console.log("Last Ele: ", arr[arr.length - 1]);
}
// task2();


// Task 3 - use the push method to add a new number at the end of an array and log them to console the updated array.
const task3 = () => {
    let arr = [15, 34, 23, 67, 55];
    arr.push(30);
    console.log("Updated array: ", arr);
}
// task3();


// Task 4 - Use the pop method to remove the element from an array and log the updated array.
const task4 = () => {
    let arr = [15, 34, 23, 67, 55];
    arr.pop();
    console.log("Updated array: ", arr);
}
// task4();


// Task 5 - Use the shift method to remove the first element from the array and log the updated array.
const task5 = () => {
    let arr = [15, 34, 23, 67, 55];
    arr.shift();
    console.log("Updated array: ", arr);
}
// task5();


// Task 6 - Use the unshift method to add a new number to the beginning of the array and log the updated array.
const task6 = () => {
    let arr = [15, 34, 23, 67, 55];
    arr.unshift(10);
    console.log("Updated array: ", arr);
}
// task6();


// Task 7 - Use the map method to create a new array where each number is doubled and log the new array.
const task7 = () => {
    let arr = [10, 20, 30, 40]
    let doubled = arr.map((ele) => ele * 2);
    console.log("Doubled array: ", doubled);
}
// task7();


// Task 8 - Use the filter method to create a new array with only even numbers and log the new array.
const task8 = () => {
    let arr = [1,2,3,4,5,6,7,8,9, 0]
    let evenNum = arr.filter((ele) => ele % 2 == 0);
    console.log("Even Num: ", evenNum);
}
// task8();


// Task 9 - Use the ruduc method to caluclate the sum of all numbers in the array and the log the result.
const task9 = () => {
    let arr = [3,7,6,1,3,6,9];
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    console.log("Sum of arr: ", sum);
}
// task9();

// Task 10 - Use a for loop to iterate the array and log each element to the console.
const task10 = () => {
    let arr = [10, 20, 30, 40, 50];
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// task10();

// Task 11 - Use a forEach loop to iterate the array and log the resukts to the console.
const task11 = () => {
    let arr = [10, 20, 30, 40, 50];
    arr.forEach((ele) => console.log(ele));
}
// task11();



// Task 12 - Create a two-dimensional array(metrix) and log the result to the console.
const task12 = () => {
    let arr = [];
    let rows = 3;
    let columns = 3;

    for(let i = 0 ; i < rows; i++) {
        arr[i] = [];
        for(let j = 0; j < columns; j++) {
            arr[i][j] = j;
        }
    }
    console.log(arr); 
}
// task12();


// Task 13 - Access and log the specific element to the console in two-dimensional array.
const task13 = () => {
    let mathScore = [
        ["John Doe", 20, 60, "A"],
        ["Jane Doe", 10, 52, "B"],
        ["Petr Chess", 5, 24, "F"]
    ];
    console.log("petr Chess: ",mathScore[2])
    console.log("Jane Doe Grade: ", mathScore[1][3]);
}
// task13();