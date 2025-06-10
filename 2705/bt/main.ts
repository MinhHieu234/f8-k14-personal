import { Book } from "./book";
import { Reader } from "./reader";
import { Library } from "./library";

const library = new Library();

const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book(2, "Lão Hạc", "Nam Cao");
library.add_book(book1);
library.add_book(book2);

const reader1 = new Reader(1, "Minh Hiếu");
library.add_reader(reader1);

library.borrow_book(1, 1);
library.borrow_book(1, 1);
library.return_book(1, 2);
library.return_book(1, 1);
library.list_available_books();