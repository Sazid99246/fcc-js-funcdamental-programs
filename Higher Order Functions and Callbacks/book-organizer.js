const books = [
    {
        title: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        releaseYear: 1960
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "Pride and Prejudice",
        authorName: "Jane Austen",
        releaseYear: 1813
    },
    {
        title: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        releaseYear: 1925
    },
    {
        title: "Moby-Dick",
        authorName: "Herman Melville",
        releaseYear: 1851
    },
    {
        title: "The Lord of the Rings",
        authorName: "J.R.R. Tolkien",
        releaseYear: 1954
    },
    {
        title: "The Catcher in the Rye",
        authorName: "J.D. Salinger",
        releaseYear: 1951
    },
    {
        title: "The Hobbit",
        authorName: "J.R.R. Tolkien",
        releaseYear: 1937
    },
    {
        title: "One Hundred Years of Solitude",
        authorName: "Gabriel Garcia Marquez",
        releaseYear: 1967
    },
    {
        title: "War and Peace",
        authorName: "Leo Tolstoy",
        releaseYear: 1869
    }
]

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear)
        return -1;
    else if (book1.releaseYear > book2.releaseYear)
        return 1;
    else
        return 0;
}

const filteredBooks = books.filter(book => book.releaseYear < 1950);
console.log(filteredBooks);

const filteredBooksSorted = filteredBooks.sort(sortByYear);
console.log(filteredBooksSorted);
