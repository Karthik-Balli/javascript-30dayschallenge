// Day-07 Objects

// Book object is created, and can be used for furthere tasks 
const book = {
    title: "I too had a love story",
    author: "ravinder singh",
    year: 2008
}

// Task 1 - Create an object title book and having properties like title, author and, year and log the object to the console.
const task1 = (book) => {

    console.log(book);
} 
// task1(book);


// Task 2 - Access and log the title and author details to the console.
const task2 = (book) => {
    
    console.log("Title: ", book.title);
    console.log("Author: ", book.author);
}
// task2(book);


// Task 3 - Add a method to the book object that returns a string with the books title and author and log the results to the console.
const task3 = () => {
    const book = {
        title: "I too had a love story",
        author: "ravinder singh",
        year: 2008,
        getDetails: function () {
            console.log(`${book.title} author is ${book.author}`);
        }

    }
    book.getDetails();

}
// task3();


// Task 4 - Add a method to the book object that takes a parameter year, updates the book's year property and log the result to console.
const task4 = (updatedYear) => {
    const book = {
        title: "I too had a love story",
        author: "ravinder singh",
        year: 2008
    }
    console.log("Before updation: ", book);
    book.year = updatedYear;
    console.log("After updation: ", book);
}
// task4(2024)


// Task 5 - Create a nested object representing a library with properties like name books(an array of book details), log the object to the console.
const library = {
    name: "My Library",
    books: [
        {
            title: "I too had a love story",
            author: "Ravinder Singh",
            year: 2018
        },
        {
            title: "It's ends with us",
            author: "Colleen Hoover",
            year: 2016
        },
        {
            title: "It's starts with us",
            author: "Colleen Hoover",
            year: 2022
        }
    ]
} 

const task5 = () => {
    
    console.log(library);
}
// task5();


// Task 6 - Access and log the name of the library and title of all books to the console.
const task6 = () => {
    console.log("Library name: ", library.name);
    console.log("Book titles: ", library.books.map((eachBook) => eachBook.title))
}
// task6();


//  Task 7 - Add a method to the book object that uses this keyword and to return a string with books's title and year  and log the result to the console.
const task7 = () => {
    const book = {
        title: "I too had a love story",
        author: "ravinder singh",
        year: 2008,
        getDetails: function () {
            return [this.title, this.year];
        }
    }
    console.log(book.getDetails()); // You may use any of the method.
    // let result = [...book.getDetails()];
    // console.log(result);
}
 task7();


// Task 8 - use for in loop to iterate over the properties of the book object and log each property ant its value to the console.
const task8 = (book) => {
    for (prop in book) {
        console.log("PropName:", prop,"& PropValue:", book[prop]);
    }
}
// task8(book);


// Task 9 - Use Object.keys and Object.values methods to log the all keys and values of the book object.
const task9 = (book) => {
    console.log("Keys:", Object.keys(book));
    console.log("Values:", Object.values(book));
}
//  task9(book);


// Exercises on objects
const exe1 = () => {
    let vehicle = {
      wheels: '4',
      fuelType: 'Gasoline',
      color: 'Green'
    };
    
    let carProps = {
      type: {
        value: 'Volkswagen',
        enumerable: true
      },
      model: {
        value: 'Golf',
        enumerable: true
      }
    };
    
    var car = Object.create(vehicle, carProps);
    console.log(car); // Now this will display the properties correctly
  };
  
//   exe1();
  

const exe2 = () => {
    const author = {
        author: 'Ana Huang',
    };
    const bookNo= {
        book1: "Twisted Love",
        book2: "Twisted Games",
        book3: "Twisted Hate",
        book4: "Twisted Lies"
    };
    const twistedSeries = Object.assign({}, author, bookNo);

    console.log(twistedSeries);
}
// exe2();