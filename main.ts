import { Book } from "./Book";

let book1 = new Book("Doc sach nhu mot nghe thuat", "Mortimer J. Adler", true);
let book2 = new Book("Dac nhan tam", "Dale Carnegie", false);

let book = []
book.push(book1, book2);
for(let i = 0; i < book.length; i++){
    if(book[i].alreadyRead){
        console.log(`You ready red: ${book[i].title} by ${book[i].author}`)
    }else
    console.log(`You steal need to read: ${book[i].title} by ${book[i].author}`)
}
