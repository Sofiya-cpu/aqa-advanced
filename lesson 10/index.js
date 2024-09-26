import EBook from './EBook.js';
import Book from './Book.js';

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1998);
const book3 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 1999);
const ebook4 = new EBook("Harry Potter and the Goblet of Fire", "J.K. Rowling", 2000, "PDF");
const ebook5 = new EBook("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 2003, "PDF");
const ebook6 = new EBook("Harry Potter and the Half-Blood Prince", "J.K. Rowling", 2005, "PDF");
const ebook7 = new EBook("Harry Potter and the Deathly Hallows", "J.K. Rowling", 2007, "PDF");

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook4.printInfo();
ebook5.printInfo();
ebook6.printInfo();
ebook7.printInfo();

// Виведе в консоль найстарішу книгу (це для четвертого пункту дз)
const books = [book1, book2, book3, ebook4, ebook5, ebook6, ebook7];
const oldestBook = Book.findOldestBook(books);
console.log("!!!!! Here goes the oldest book: ");
oldestBook.printInfo();

const newEBook = EBook.electronicBook(book3, "png");
newEBook.printInfo();