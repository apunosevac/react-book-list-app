import { useContext } from "react";
import { useParams } from "react-router-dom";

import { Card } from 'react-bootstrap';
import { MyContext } from "../App";
import './BookDetail.css';

const BookDetail = () => {

    const context = useContext(MyContext);
    const { id } = useParams();

    const bookDetail = context.find(book => book.id === Number(id));
    
    if(!bookDetail){
        return <h2>Book not found!</h2>
    }

    return (
        <Card style={{ backgroundColor: 'gray'}}>
            <Card.Title>
                <h1 className="detailTitle">{bookDetail.title} - {bookDetail.author}</h1>
            </Card.Title>
            <Card.Body>
                <div className="detailText">Publication date: {bookDetail.publicationDate}</div>
                <div className="detailText">Genre: {bookDetail.genre}</div>
                <div className="detailText">Description: {bookDetail.description}</div>
            </Card.Body>
        </Card>
    );
};

export default BookDetail;