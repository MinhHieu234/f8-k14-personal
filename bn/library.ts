interface libraryI{
    getBook:()=>number[];
    getReaders:()=>number[];
    setBooks:(books:number[]) => void;
    setReaders:(readers:number[]) => void;

}

class Library {
    private books: number[] ;
    private readers: number[];
    constructor(books: number[]=[], readers: number[]) {
        this.books = books;
        this.readers = readers;
    }
    public getBooks(): number[] {
        return this.books;
    }
    public getReader(): number[] {
        return this.readers;
    }
    public setBooks(books: number[]) {
        this.books = books;
    }
    public setReaders(readers: number[]) {
        this.readers = readers;
    }
}
