import { Link } from 'react-router-dom';
import '../styles/landing.css'
const LandingPage = () => {
    return (
        <div className="main">
            <div className="navbar">
                <div>
                    <Link to="/"><img src="images/logo1.png" height="110px" alt="" /></Link>
                </div>
                <div className='navbarbtn'>
                    <div class="adminlink">
                        <Link to="/admin-login" className="alink"> Admin Login</Link>
                    </div>
                    <div class="user-link">
                        <Link to="/user-login" className="ulink"> User Login</Link>
                    </div>
                </div>
            </div>
            <div className="heropage">
                <div className='heropageleft'>
                    <div className='h1'>
                        <h1 className="reading">Reading <div id='cooltitle'>is Cool!</div></h1>
                    </div>
                    <div className='para'>
                        <p>Find your next great read at our extensive collection of books
                        </p>
                    </div>
                    <div className='getstartedtn'>
                        <Link to="/user-login" className="ulink getstartedbtnlink"> Get started</Link>
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

export default LandingPage;