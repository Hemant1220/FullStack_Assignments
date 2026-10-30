// Q3. Library Management System (Classes + Objects)
// Run with Node.js or paste into a browser console.

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log('"' + this.title + '" is already issued.');
            return false;
        }

        this.isIssued = true;
        console.log('Book issued: ' + this.title);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log('"' + this.title + '" was not issued.');
            return false;
        }

        this.isIssued = false;
        console.log('Book returned: ' + this.title);
        return true;
    }

    displayDetails() {
        return this.title + " by " + this.author +
            " | ISBN: " + this.ISBN +
            " | Status: " + (this.isIssued ? "Issued" : "Available");
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN1001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN1002"),
    new Book("Clean Code", "Robert C. Martin", "ISBN1003", true),
    new Book("Atomic Habits", "James Clear", "ISBN1004")
];

// Display all books that are currently available.
function displayAvailableBooks() {
    const availableBooks = books.filter((book) => !book.isIssued);
    console.log("\nAVAILABLE BOOKS");
    console.log("---------------");
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
    } else {
        availableBooks.forEach((book) => console.log(book.displayDetails()));
    }
}

// Search for a book by ISBN and issue it if it is available.
function issueBookByISBN(isbn) {
    const matchingBook = books.find((book) => book.ISBN === isbn);

    if (!matchingBook) {
        console.log("No book found with ISBN: " + isbn);
        return false;
    }

    return matchingBook.issueBook();
}

displayAvailableBooks();

// Demonstrate an issue operation by ISBN. Change the value to issue another book.
issueBookByISBN("ISBN1002");

console.log("\nBOOK STATUS AFTER ISSUE");
books.forEach((book) => console.log(book.displayDetails()));
