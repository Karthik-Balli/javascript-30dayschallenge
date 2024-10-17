// Task1 - To check number is zero, positive or negative number
const checkNumber = (num) => {
    if(num === 0) {
        console.log(num,"is Zero");
    }
    else if(num > 0) {
        console.log(num,"is a Positive Number");
    }
    else {
        console.log(num,"is a Negative Number");
    }
}

let num = 11;
//checkNumber(num);

// Task2 - To check candidate is eligible for vote or not.
const voteEligibility = (age) => {
    if(age >= 18) {
        console.log("Congrats, You are Eligible to vote.");
    }
    else {
        console.log("Sorry, You are not Eligible to vote.")
    }
}

let age = 18;
//voteEligibility(age);


// Task3 - FInd the largest number among three numbers
const largestNumber = (num1, num2, num3) => {
    if(num1 > num2) {
        if(num3 > num1) {
            console.log(num3, "is a Largest Number")
        }
        else {
            console.log(num1, "is a Largest Number")
        }
    }
    else if(num2 > num3) {
        console.log(num2, "is a Largest Number")
    }
    else {
        console.log(num3, "is a Largest Number")
    }
}

//largestNumber(40, 10, 20)

// Task 4 - Find week name by the value no using swich case
const findWeek = (weekNo) => {
    switch(weekNo) {
        case 1: console.log("Monday");
                break;
        case 2: console.log("Tuesday");
                break;
        case 3: console.log("Wednesday");
                break;
        case 4: console.log("Tuesday");
                break;
        case 5: console.log("Friday");
                break;
        case 6: console.log("Saturday");
                break;
        case 7: console.log("Sunday");
                break;
    }
}

let weekNo = 5
if(weekNo > 0 && weekNo < 8) {
    findWeek(weekNo);
} else {
    console.log("PLease Enter a valid week no:")
}


// Task - 5 Assign the grades A,B,C,D,E,F using switch case
const assignGrades = (marks) => {
    try {
    switch(true){
        case (100 >= marks && marks > 90): console.log("Grade A");
        break;
        case 90 >= marks && marks > 75: console.log("Grade B");
        break;
        case 75 >= marks && marks > 65: console.log("Grade C");
        break;
        case  65 >= marks && marks > 50: console.log("Grade D");
        break;
        case  50 >= marks && marks > 35 : console.log("Grade E");
        break;
        default: console.log("Invaild Grade");
        break;
    }
} catch(err){console.log(err)}
}

let marks = 75;
assignGrades(marks)

// Task 6 - Check leap year
// program to check leap year
const checkLeapYear = (year) => {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const year = 2024;
checkLeapYear(year);