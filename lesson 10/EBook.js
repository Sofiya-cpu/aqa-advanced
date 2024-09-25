import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, extension) {
        super(title, author, year);
        this.extension = extension; // Виклик сеттера для валідації
    }

    // Getters
    get extension() {
        return this._extension;
    }

    // Setters
    set extension(value) {
        const validEx = ["PDF", "EPUB", "DOC"];
        if (!validEx.includes(value.toUpperCase())) {
            throw new Error(`Extension must be one of ${validEx.join(', ')}`); // Метод join() об'єднує всі елементи масиву в один рядок за допомогою вказаного роздільника
        }
        this._extension = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`This book is in the ${this.extension} format.`);
    }

    // instanceof https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
    static electronicBook(book, extension) {
        if (book instanceof Book) //  book є екземпляром класу Book (book створений в EBook, що є нащадком Book), тому виконується дія — створення нового об'єкта EBook 
            return new EBook(book.title, book.author, book.year, extension);
    }
}

export default EBook;