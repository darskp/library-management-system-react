import '../styles/dashboard.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminapp = () => {
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
        navigate(`/admin/book-list/${id}`);
    }
    return (
        <div className="maindashboard">
            {/* <div className='dashboard_enter'> */}
            <h1 className='dash_title'>Welcome to Admin Dashboard</h1>
            <div className="dashboard__cards">
                <div className="dashboard_inner">
                    <div className="dashboard__inner_img">
                    </div>
                    <div className="dashboard__card">
                        <div className="booktitle">
                            <h2><strong>Innovative Library Solutions</strong></h2>
                        </div>
                        <div className=' desc authors'>
                            <p>"Unleash the power of knowledge with our Library Management System. Organize, automate and optimize your library's operations for unparalleled efficiency and patron satisfaction."</p>
                        </div>
                        <div className='btn'>
                            <button title="View Book List" className="viewbtn"><Link to="/admin/book-list/" className="view">View Book List &gt;&gt;</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Adminapp;