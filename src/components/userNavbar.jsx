import { NavLink, Link } from 'react-router-dom';
import '../styles/adminnavbar.css';
const UserNavbar = () => {
    let lists = [
        {
            "to": '/user/',
            "name": 'Dashboard'
        },
        {
            "to": '/user/book-list',
            "name": 'Book List'
        },
        {
            "to": '/',
            "name": 'Logout'
        }
    ]
    return ( 
        <div className="mainNav">
            <div className='usernavbar adminnavbar'>
                <div className="title">
                    <Link to="/user/" className='logoimg'><img src="../images/user.png" height="40px" /></Link>
                </div>
                <div className="linkgrp">
                    <ul>
                        {lists.map(data => <NavLink to={data.to} activeClassName="links active" className='links' alt={data.name}>{data.name}</NavLink>)}
                    </ul>
                </div>
            </div>
        </div>
        );

<div>

    
</div>
        }
 
export default UserNavbar;