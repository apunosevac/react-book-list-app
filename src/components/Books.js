import { useContext, useState } from "react";

import { MyContext } from "../App";
import BookList from "./BookList";
import './Books.css';

const Books = () => {

    const context = useContext(MyContext);

    const [userInput, setUserInput] = useState('');
    const searchResult = context.filter((book) => {
        const normalizedUserInput = userInput.toLowerCase();

        return (
            book.title.toLowerCase().includes(normalizedUserInput) ||
            book.author.toLowerCase().includes(normalizedUserInput)
        );
    });

    const inputHandler = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    };

    const showNoResults = searchResult.length === 0 && userInput !== "";

    return (
        <div className="books">
            <input 
            type="text"
            className="search"
            value={userInput}
            onChange={inputHandler}
            />
            {showNoResults ? (
                <h2 className="noResults">No results!</h2>
            ) : (
                <BookList books={searchResult}/>
            )}
        </div>
    );
}

export default Books;