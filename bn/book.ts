import { Base, BaseI } from "./base";

interface BookI {
    getAuthor: () => string;
    getAvailable: () => boolean;
    setAuthor: (name: string) => void;
    setAvailable: (available: boolean) => void;
}

class Book extends Base implements BookI {
    private author: string;
    private available: boolean;

    constructor(id: number, name: string, author: string, available: boolean) {
        super(id, name);
        this.author = author;
        this.available = available;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getAvailable(): boolean {
        return this.available;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public setAvailable(available: boolean): void {
        this.available = available;
    }

    public toString(): string {
        return `Book {
            id=${this.getId()},
            name=${this.getName()},
            author=${this.author},
            available=${this.available}
        }`;
    }
}
