export class Book {
    private id: number;
    private title: string;
    private author: string;
    private available: boolean;

    constructor(id: number, title: string, author: string, available: boolean = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }
}