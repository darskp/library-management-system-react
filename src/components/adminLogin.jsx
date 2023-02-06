import { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/landing.css'
import '../styles/adminlogin.css'
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();
    let login = (e) => {
        e.preventDefault()
        if (email == "admin@gmail.com" && password =='123') {
            navigate('/admin/')
        } else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className="adminLogin main">
            <div className='navbar'>
                <div>
                    <Link to="/"><img src="images/logo1.png" height="110px" alt="nl" /></Link>
                </div>
                <div className='navbarbtn'>
                    <div className="adminlink">
                        <Link to="/admin-login" className="alink"> Admin Login</Link>
                    </div>
                    <div className="user-link">
                        <Link to="/user-login" className="ulink"> User Login</Link>
                    </div>
                </div>
            </div>
            <div className="heropage">
                <div className='heropageleft'>
                    <div className="container">
                        <h4>Login as Admin</h4>
                        <div className="form_input">
                            <form onSubmit={login}>
                                <div className="email">
                                    <input required value={email} type="email" onChange={(e) => setEmail(e['target']['value'])} placeholder="Enter email address" />
                                </div>
                                <div className="password">
                                    <input required value={password} type="password" onChange={(e) => setPassword(e['target']['value'])} placeholder="Enter the password" />
                                </div>
                                <div className="getstartedtn loginbtn">
                                    <button className="ulink getstartedbtnlink">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='heropageright user-link'>
                    <img src="images/hero1.png" className="heroimg" alt="" />
                </div>
            </div>
            <div className='gradmain'>
                <div className='gradient'></div>
            </div>
        </div>
    );
}

export default AdminLogin;