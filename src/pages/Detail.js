import { Link } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import './Detail.css';

const Detail = () => {

    return (
        <div>
            <BookDetail />
            <Link className="btnBack" to="/">Back</Link>
        </div>
    );
};

export default Detail;