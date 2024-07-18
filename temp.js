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
        return `${book.title} has been to the library`
    }

    removeBook(book) {
        const index = this.library.books.indexOf(book)
        if (index !== -1) {
            this.library.books.splice(index, 1)
            return `${book.title} has been removed from the library`
        } else {
            return `${book.title} is not in the library`
        }
    }

    lendBook(book, member) {
        if (this.library.books.includes(book) && book.available) {
            member.borrowBook(book)
            return `${book.title} has been lent to ${member.name}`
        } else {
            return `${book.title} is unavailable or not in the library`
        }
    }

    receiveBook(book) {
        book.returnBook()

        return `${book.title} has been received back into the library`
    }
}



class Library {
    constructor(name ) {
        this.name = name;
        this.books = [];
        this.members = [];
    }

    registerMember(member) {
        this.members.push(member)
        return `${member.name} has been registred as a member of ${this.name}`
    }

    unregisterMember(member) {
        const index = this.members.indexOf(member)
        if (index !== -1) {
            this.members.splice(index, 1)
            return `${member.name} has been unregistred from ${this.name}`
        } else {
            return `${member.name} is not a member of library`
        }
    }

    findBookByTitle(title) {
        return this.books.find(book => book.title === title)
    }

    findBookByISNB(isbn) {
        return this.books.find(book => book.isbn === isbn)
    }
}

const library = new Library('Vitebsk library')
console.log(library);
const librarian = new Librarian('Nick', 'NickId01', library)
console.log(librarian);

const member = new Member('Alice', 'mem007')
console.log(member);

const book1 = new Book('1984', 'George Orwell', '1234')
const book2 = new Book('Brave New World', 'Aldous', '7654')

console.log(book1);
console.log(book2);

console.log(librarian.addBook(book1));
console.log(librarian.addBook(book2));

console.log(library.registerMember(member));

console.log(member.borrowBook(book1)); // available = true
console.log(member.borrowBook(book1)); // available = false, книга уже занята

console.log(librarian.lendBook(book2, member));
console.log(librarian.receiveBook(book2));