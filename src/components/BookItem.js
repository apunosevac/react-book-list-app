import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './BookItem.css';

const BookItem = ({ book }) => {

    const navigate = useNavigate();

    const routeDetail = () => {
        navigate(`detail/${book.id}`);
    };

    return (
        <li onClick={routeDetail}>
            <Card border='primary'>
                <Card.Title style={{color: 'white'}}>
                    <h2>{book.title} - {book.author}</h2>
                </Card.Title>
                <Card.Body>
                    <div className="bookText">Publication date: {book.publicationDate}</div>
                    <div className="bookText">Genre: {book.genre}</div>
                </Card.Body>
            </Card>
        </li>
    )
}

export default BookItem;