"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book("Doc sach nhu mot nghe thuat", "Mortimer J. Adler", true);
var book2 = new Book_1.Book("Dac nhan tam", "Dale Carnegie", false);
var book = [];
book.push(book1, book2);
for (var i = 0; i < book.length; i++) {
    if (book[i].alreadyRead) {
        console.log("You ready red: ".concat(book[i].title, " by ").concat(book[i].author));
    }
    else
        console.log("You steal need to read: ".concat(book[i].title, " by ").concat(book[i].author));
}
