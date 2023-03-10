import { useParams } from "react-router-dom";
import '../styles/readbook.css';
import { useEffect, useState } from "react";
const Readbooks = () => {
    let params = useParams();
    let [book, setBook] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:3000/books/${params.id}`);
            let data = await response.json();
            setBook(data);
        }
        fetchData();
    }, [])
    return (
        <div className="readbook">
            <div className="main addmain">
                {/* <h1>&nbsp;</h1> */}
                <div className="section">
                    <div className="bookcard">
                        <div className="bookimage">
                            <img src={book.thumbnailUrl} title={book.title} alt={book.title} />
                        </div>
                        <div className="bookcardinfo">
                            <div className="bookscardinfo-no-btns readbookinfo">
                                <div className="booktitle">
                                    <h2 title={book.title}><strong>{book.title}</strong></h2>
                                </div>
                                <div>
                                    <p><span>Authors : </span> {book.authors}</p>
                                </div>
                                <div>
                                    <p className="categories"><span>Categories :</span> {book.categories}</p>
                                </div>
                                <div>
                                    <p><span>ShortDescription : </span>{book.shortDescription}</p>
                                </div>
                                <div>
                                    <p><span>Page Count : </span>{book.pageCount}</p>
                                </div>
                                <div>
                                    <p><span>LongDescription : </span>{book.longDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Readbooks;