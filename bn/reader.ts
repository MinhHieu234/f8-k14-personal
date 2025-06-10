import { Base, BaseI } from "./base";

interface ReaderI {
    getBorrowBook: () => number[];
    setBorrowBook: (borrowBooks: number[]) => void;
}


class Reader extends Base implements ReaderI {
    private borrowed_books: number[];

    constructor(id: number, name: string, borrowed_books: number[]) {
        super(id, name); // Gọi constructor lớp cha (Base)
        this.borrowed_books = borrowed_books;
    }

    public getBorrowBook(): number[] {
        return this.borrowed_books;
    }

    public setBorrowBook(borrowedBooks: number[]): void {
        this.borrowed_books = borrowedBooks;
    }

    public toString(): string {
        return `Reader{
        id=${this.getId()}
        name=${this.getName()}
        borrowed_books=${this.borrowed_books}}`;
    }
}
