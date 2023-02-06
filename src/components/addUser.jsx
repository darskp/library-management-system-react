import '../styles/addbook.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Adduser = () => {
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [email, setEmail] = useState('')
    let [phonenumber, setPhonenumber] = useState('');
    let navigate = useNavigate();
    let handlesubmit = e => {
        e.preventDefault();
        let userdata = { name, age, email, phonenumber };
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        })
        alert('User data added succefully');
        navigate('/admin/user-list')
    }
    return (
        <div className="adduser mainadd">
            <div className="itemadd">
                <h1 className='addtitle'>Add a User</h1>
                <div className='container addusercontainer'>
                    <div className="form_image heropageright user-link">
                        <img src="../images/hero1.png" className="heroimg" alt="" />
                    </div>
                    <div className="form useraddform">
                        <form action=" " onSubmit={handlesubmit}>
                            <div>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter the user name" />
                            </div>
                            <div>
                                <input type="number" min="0" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter the age" />
                            </div>
                            <div>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter the email id" />
                            </div>
                            <div>
                                <input type="tel" minlength="10" maxlength="10" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} placeholder="Enter the phone number" />
                            </div>
                            <div className='booklistbtns btn'>
                                <button className="booklistbtn">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adduser;