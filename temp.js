// Задача по классам Задача по классам Задача по классам Задача по классам 

// class Animal {
//     constructor(name, age, legs, species, status) {
//         this.name = name;
//         this.age = age;
//         this.legs = legs;
//         this.species = species;
//         this.status = status;
//     }
//     introduce() {
//         return `Hello, my name is ${this.name} and i am ${this.age} years old.`
//     }
// }



// class Shark extends Animal {
//     constructor(name, age, legs = 0, species = 'shark', status) {
//         super(name, age, legs, species, status)
//     }
// }
// let shark = new Shark('Vlad', 2, undefined, undefined, 'zdorov')
// console.log(shark);


// class Cat extends Animal {
//     constructor(name, age, legs, species, status) {
//         super(name, age, legs, species, status)
//     }
//     introduce() {
//         return ` ${super.introduce()}. Meow meow!`
//     }
// }
// let cat = new Cat('Vlad', 2, 4, 'cat', 'zdorov')
// console.log(cat.introduce());



// class Dog extends Animal {
//     constructor(name, legs, status, species = 'dog', master) {
//         super(name, legs, status, species)
//         this.master = master
//     }
//     greatMaster() {
//         return `Hello ${this.master}`
//     }
// }
// let dog = new Dog('Vlad', 4, 'happy', undefined, 'Alice')
// console.log(dog.introduce());
// console.log(dog.greatMaster());


// Новая задача по классам (сложнее) с подклассами и тд

class Book {
    constructor(title, author, isbn, available) {
        this.title = title;
        this.author = author;
        this.isbn = isbn ;
        this.available = true;
    }

    lend() {
        if (this.available) {
            this.available = false;
            return `${this.title} has been lent out`
        } else {
            return `${this.title} is currently unavailable`
        }
    }

    returnBook() {
        this.available = true
        return `${this.title} has been returned`;
    }

    info() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn} - ${this.available ? 'AVAILABLE' : 'UNAVAILABLE'})`
    }
}

const book1 = new Book('1984', 'George Learn', '1234567')
const book2 = new Book('Hello world', 'Afte harn', '7654321')

// console.log(book1);
// console.log(book2);

// console.log(book1.info());
// console.log(book2.info());

// book2.lend()

// console.log(book1.info());
// console.log(book2.info());

// book2.returnBook()

// console.log(book1.info());
// console.log(book2.info());


class User {
    constructor(name ,id) {
        this.name = name;
        this.id = id;
    }
    getInfo() {
        return `User: ${this.name}, ID: ${this.id}`
    }
}

// const user1 = new User('Vlad', '1')
// console.log(user1.getInfo());


class Member extends User {
    constructor(name, id) {
        super(name, id)
        this.borrowedBooks = []
    }

    borrowBook(book) {
        if (book.available) {
            this.borrowedBooks.push(book)
            book.lend()
            return `${this.name} borrowed ${book.title}`
        } else {
            return `${book.title} is not in the library`
        }
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book)
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1)
            book.returnBook()
            return `${this.name} returned ${book.title}`
        } else {
            return `${this.name} does not have ${book.title}`
        }
    }
}

const user1 = new Member('Vlad', '1')
const user2 = new Member('Dima', '2')

// console.log(user1.borrowBook(book1));
// console.log(user1.borrowBook(book2));

// console.log(user1);
// console.log(user1.getInfo());

// console.log(user1.returnBook(book2));

// console.log(user1);


class Librarian extends User {
    constructor(name, id, library) {
        super(name, id)
        this.library = library;
    }
    addBook(book) {
        this.library.books.push(book)
    }

    removeBook(book) {

    }

    lendBook(book, member) {

    }

    receiveBook(book) {

    }
}



class Library {
    constructor(name ) {
        this.name = name;
        this.books = [];
        this.members = [];
    }

    registerMember(member) {

    }

    unregisterMember(member) {

    }

    findBookByTitle(title) {

    }

    findBookByISNB() {

    }
}