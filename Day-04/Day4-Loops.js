// Task1 - Write a program to print numbers from 1 to 10 using loop
const forLoop = () => {
    for(let i = 1; i <= 10; i++) {
        console.log(i); 
    }
}

// forLoop();


// Task2 - 5th table
const tables = (num) => {
    for(let i = 1; i <= 10; i++) {
        console.log(num," * ",i," = ",num*i);
    }
}

// tables(5);


// Task3 - Sum numbers from 1 to 10 using while loop
const sumUp = () => {
    let i = 1;
    let sum = 0;
    while(i <= 10) {
        sum += i;
        console.log(sum);
        i++;
    }
    console.log("Total: ",sum);
}

// sumUp();

// Task4 - print numbers from 10 to 1 using while loop
const desOrder = () => {
    let num = 10;
    while(num >= 0) {
        console.log(num);
        num--;
    } 
}

// desOrder();


// Task5 - print numbers from 1 to 5 using do while loop
const doWhile = () => {
    let num = 1;
    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

// doWhile();

// Task6 - factorial program using do while loop
const factorial = (num) => {
    let fact = 1;
    let i = 1;
    do {
        fact = fact * i;
        i++;
    }while(i <= num)
    console.log(fact)
}

// factorial(5);

// Task7 print the pattern, Right angled triangle
const pattern = (n) => {
    for(let i = 1; i <= n; i++) {
        let str = "*";
        console.log(str.repeat(i));
    }
}

// pattern(5);


// Task8 - print numbers from 1 to 10 but skip 5 using continue
const continueEx = () => {
    for(let i = 1; i <= 10; i++) {
        if(i == 5) {
            continue;
        } else {
            console.log(i);
        }
        
    }
}

// continueEx();


// Task9 - print numbers from 1 to 10 but exipt from loop using break
const breakEx = () => {
    for(let i = 1; i <= 10; i++) {
        if(i == 7) {
            break;
        } else {
            console.log(i);
        }
    }
}

// breakEx();