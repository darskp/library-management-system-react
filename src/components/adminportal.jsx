import Adminnavbar from "./adminnavbar";
import { Routes, Route } from 'react-router-dom';
import Admindashboard from "./admindashboard";
import PageNotFound from './page404';
import Readbooks from "./readBook";
import Addbooks from "./addBook";
import Booklist from "./bookList";
import Userlist from "./userlist";
import Adduser from "./addUser";
const AdminHome = () => {
    return (
        <div className="adminhome">
            <Adminnavbar />
            <Routes>
                <Route path="/" element={<Admindashboard />} />
                <Route path="/book-list" element={<Booklist />} />
                <Route path="/user-list" element={<Userlist />} />
                <Route path="/book-list/:id" element={<Readbooks />} />
                <Route path="/add-book/" element={<Addbooks />} />
                <Route path="/add-user/" element={<Adduser />} />
                <Route path='/*' element={<PageNotFound />} />

            </Routes>
        </div>
    );
}

export default AdminHome;


{  /*/book-list/:id //router parameter act as function parameter */ }
