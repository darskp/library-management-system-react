import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminportal';
import UserPortal from './components/userPortal';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PageNotFound from './components/page404';
function App() {
  return (
    <div className="App">
        <BrowserRouter basename='library-management-system-react/'>
        <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/user/*' element={<UserPortal/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;