import { NavLink, Link } from 'react-router-dom';
import '../styles/adminnavbar.css';
const Adminnavbar = () => {
    let lists = [
        {
            "to": '/admin/',
            "name": 'Dashboard'
        },
        {
            "to": '/admin/add-book',
            "name": 'Add Books'
        },
        {
            "to": '/admin/add-user',
            "name": 'Add User'
        },
        {
            "to": '/admin/book-list',
            "name": 'Book List'
        },
        {
            "to": '/admin/user-list',
            "name": 'User List'
        },
        {
            "to": '/',
            "name": 'Logout'
        },
    ]
    return (
        <div className='mainNav'>
            <div className='adminnavbar'>
                <div className="title">
                    <Link to="/admin/"><img src="../images/admin.png" height="40px" /></Link>
                    {/* <Link to="/admin/"><img src="/images/admin-portal-icon.png" height="50px" /></Link> */}
                </div>
                <div className="linkgrp">
                    <ul>
                        {lists.map(data => <NavLink to={data.to} activeClassName="links active" className='links' alt={data.name}>{data.name}</NavLink>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Adminnavbar;
