import '../styles/addbook.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Addbooks = () => {
    let navigate = useNavigate();
    let [title, setTitle] = useState('');
    let [authors, setAuthors] = useState('');
    let [categories, setCategories] = useState('');
    let [pageCount, setPageCount] = useState('');
    let [shortDescription, setShortDescription] = useState('');
    let [longDescription, setLongDescription] = useState('');
    let [thumbnailUrl, setThumbnailUrl] = useState('');
    let handlesubmit = e => {
        e.preventDefault(); // prevent the reloading
        let bookdata = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl };
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },//info about the content
            body: JSON.stringify(bookdata)
        })
        alert("Book Data added succefully");
        navigate('/admin/book-list');

    }
    return (
        <div className='mainadd'>
            <div className="itemadd">
                <h1 className='addtitle'>Add a Book</h1>
                <div className='container'>
                    <div className="form_image heropageright user-link">
                        <img src="../images/hero1.png" className="heroimg" alt="" />
                    </div>
                    <div className="form">
                        <form action="" onSubmit={handlesubmit}>
                            <div className="title">
                                <input value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder="Enter the title" />
                            </div>
                            <div className="authors">
                                <input value={authors} onChange={e => setAuthors(e.target.value)} required type="text" placeholder="Enter the authors" />
                            </div>
                            <div className="categories">
                                <input value={categories} onChange={e => setCategories(e.target.value)} type="text" placeholder="Enter the categories" />
                            </div>
                            <div className="pageCount">
                                <input value={pageCount} onChange={e => setPageCount(e.target.value)} type="number" min="0" placeholder="Enter the page count" />
                            </div>
                            <div className="Description">
                                <textarea className="inputtextarea shortDescription" value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder="Enter the short description"></textarea>
                            </div>
                            <div className="Description">
                                <textarea className="inputtextarea" value={longDescription} onChange={e => setLongDescription(e.target.value)}  placeholder="Enter the long description"></textarea>
                            </div>
                            <div className="thumbnailUrl">
                                <input value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} type="text" placeholder="Enter the thumbnail url" />
                            </div>
                            <div className='booklistbtns btn'>
                                <button className="booklistbtn">Add Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addbooks;
