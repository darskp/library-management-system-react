import '../styles/dashboard.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Userapp = () => {
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
        navigate(`/user/book-list/${id}`);
    }
    return (
        <div className="maindashboard">
            {/* <div className='dashboard_enter'> */}
            <h1 className='dash_title'>Welcome to User Dashboard</h1>
            <div className="dashboard__cards">
                <div className="dashboard_inner">
                    <div className="dashboard__inner_img">
                    </div>
                    <div className="dashboard__card">
                        <div className="booktitle">
                            <h2><strong>Learning Lab</strong></h2>
                        </div>
                        <div className=' desc authors'>
                            <p>"Open the door to a world of knowledge and adventure with books. Let the stories take you on a journey, the characters become your friends and the words become your guide."</p>
                        </div>
                        <div className='btn'>
                            <button title="View Book List" className="viewbtn"><Link to="/user/book-list/" className="view">View Book List &gt;&gt;</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Userapp;