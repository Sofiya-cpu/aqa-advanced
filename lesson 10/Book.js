class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    // Getters
    get title() {
        return this._title;
    }

    /* I guess it also can be written as we did it in the class when we give a name to getter:
   
    get getterTitle() {
        return this._title;
    } 

    But I found out a simplier option (for get&set), so I would prefer it:) */

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    // Setters
    set title(value) {
        if (typeof value !== 'string') {
            throw new Error('Title must be a string value.');
        }
        this._title = value;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error('Author must be a string value.');
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Year must be a positive number value.');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Book title is ${this.title}, its author is ${this.author}. The book was released in ${this.year}.`);
    }

    // Static method
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) { // озн. Якщо books не є масивом (або масив порожній), то кинь помилку
            throw new Error('Please provide a valid array of books.');
        }
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest; // озн. current - обробляється зараз, oldest - яка з оброблених найстаріша. Якщо ост оброблена старіша, то поверне current (true), якщо нестаріша, то поверне oldest(false)
        });
    }
}

export default Book;