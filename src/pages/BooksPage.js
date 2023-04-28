import Books from '../components/Books';
import './BooksPage.css'

const BooksPage = () => {

    return (
      <div>
        <h1 className='title'>List of books. Click on a book to view additional information.</h1>
        <Books/>
      </div>
    );
};

export default BooksPage;