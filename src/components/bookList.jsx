import { useEffect, useState } from "react";
import '../styles/userlist.css';
import { useNavigate, useLocation } from "react-router-dom";
const Booklist = () => {
    let location = useLocation();//to fetch route value after the localhost
    // console.log(location);
    // 99863014
    let navigate = useNavigate();
    let [books, setBooks] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:3000/books');
            let data = await response.json();
            setBooks(data);
        }
        fetchData();
    }, [books]);
    let readmore = (id) => {
        if (location.pathname == '/admin/book-list') {
            navigate(`/admin/book-list/${id}`);
        }
        else {
            navigate(`/user/book-list/${id}`);
        }
    }
    let handleclick = (id, title) => {
        fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} will be deleted permanently`);
    }
    return (
        <div className="booklist" >
            <div className="main addmain">
                <h1>Book List ({books.length})</h1>
                <div className="section">
                    {
                        books.map(data =>
                            <div className="bookcard">
                                <div className="bookimage">
                                    <img src={data.thumbnailUrl} title={data.title} alt={data.title} />
                                </div>
                                <div className="bookcardinfo">
                                    <div className="bookscardinfo-no-btns">
                                        <div>
                                            <h2 title={data.title}><strong>{data.title}</strong></h2>
                                        </div>
                                        <div>
                                            <p><span>Authors : </span> {data.authors}</p>
                                        </div>
                                        <div>
                                            <p className="categories"><span>Categories :</span> {data.categories}</p>
                                        </div>
                                        <div>
                                            <p><span>Page Count : </span>{data.pageCount}</p>
                                        </div>
                                    </div>
                                    <div className="booklistbtns">
                                        <div>
                                            <button title="Read more >>" onClick={() => readmore(data.id)} className="booklistbtn">Read More &gt;&gt;</button>
                                        </div>
                                        <div>
                                            {location.pathname == '/admin/book-list' && <button title="Delete" className="booklistremove" onClick={() => handleclick(data.id, data.title)}><img src="../images/remove32.png" alt="" /></button>}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}
export default Booklist;