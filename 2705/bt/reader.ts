import { Book } from "./book";

export class Reader {
    private id: number;
    private name: string;
    private borrowed_books: Book[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.borrowed_books = [];
    }
}