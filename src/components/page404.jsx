import '../styles/dashboard.css'
import '../styles/404page.css'
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="mainpagenotfound">
            <div>
                <img src="../images/pagenotfound.png" height="300px" alt="" />
            </div>
            <div className='btn'>
                <button title="View Book List" className="view viewbtn" onClick={() => navigate(-1)}>&lt;&lt; Go Back to Previous Page</button>
            </div>
        </div>
    );
}

export default PageNotFound;
