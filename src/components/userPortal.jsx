import { Routes, Route } from 'react-router-dom';
import Booklist from './bookList';
import UserDashboard from './userDashboard';
import UserNavbar from './userNavbar';
import Readbooks from "./readBook";
import PageNotFound from './page404';
const UserPortal = () => {
    return (
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path='/' element={<UserDashboard/>}/>
                <Route path="/book-list" element={<Booklist/>} />
                <Route path="/book-list/:id" element={<Readbooks />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default UserPortal;