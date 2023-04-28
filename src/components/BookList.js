import BookItem from "./BookItem";

const BookList = ({books}) => {

    return books.map((book) => {
        return <BookItem key={book.id} book={book}/>
    });
}

export default BookList;