class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective";
    }
  }

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
        console.log(`The book "${book.name}" has been added to the library.`);
      } else {
        console.log(`The book "${book.name}" cannot be added to the library because its state is too low.`);
      }
    }
    
    findBookBy(type, value) {
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
      }
      
      giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
            this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
   }
  
  // Test scenario
  let library = new Library("National Library");
  
  // Add books to the library
  let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180);
  library.addBook(book1);
  
  let book2 = new NovelBook("To Kill a Mockingbird", "Harper Lee", 1960, 281);
  library.addBook(book2);
  
  let book3 = new FantasticBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, 223);
  library.addBook(book3);
  
  let book4 = new DetectiveBook("The Adventures of Sherlock Holmes", "Arthur Conan Doyle", 1892, 307);
  library.addBook(book4);
  
  // Find a book published in 1919
  let book5 = library.findBookBy("releaseDate", 1919);
  if (book5 === null) {
    book5 = new Book("Some Book", "Some Author", 1919, 250);
    library.addBook(book5);
  }
  
  // Give away any book
  let bookToGiveAway = library.giveBookByName("To Kill a Mockingbird");
  
  // Damage a book that has been given away
  bookToGiveAway.state = 20;
  
  // Restore an issued book
  bookToGiveAway.fix();
  
  // Try to add the restored book back to the library
  library.addBook(bookToGiveAway);


  class Student {
    constructor(username) {
      this.username = username;
      this.marks = {};
    }
    
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
      
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      
      this.marks[subject].push(mark);
    }
    
    getAverageBySubject(subject) {
      if (!this.marks[subject]) {
        return 0;
      }
      
      const sum = this.marks[subject].reduce((total, mark) => {
        return total + mark;
      }, 0);
      
      return sum / this.marks[subject].length;
    }
    
    getAverage() {
      const subjects = Object.keys(this.marks);
      
      if (subjects.length === 0) {
        return 0;
      }
      
      const sum = subjects.reduce((total, subject) => {
        return total + this.getAverageBySubject(subject);
      }, 0);
      
      return sum / subjects.length;
    }
  }