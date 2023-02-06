import { useEffect, useState } from "react";
import '../styles/userlist.css';
const Userlist = () => {
    let [users, setusers] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:3000/users/');
            let data = await response.json();
            setusers(data);
        }
        fetchData();
    }, []);

    let handleclick = (id, title) => {
        setusers(users.filter((x) => x.id != id))
        alert(`${title} has been removed`);
    }
    return ( 
        <div className="userlist">
            <div className="main addmain">
                <h1>User List - {users.length}</h1>
                <div className="section">
                    {
                        users.map(data =>
                            <div className="card usercard">
                                <div className="card-info user-card-info">
                                    <div>
                                        <h2>{data.name}</h2>
                                    </div>
                                    <div>
                                        <p><strong>Age : </strong>{data.age}</p>
                                    </div>
                                    <div>
                                        <p><strong>Email : </strong> {data.email}</p>
                                    </div>
                                    <div>
                                        <p><strong>Phone Number : </strong>{data.phonenumber}</p>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button onClick={() => handleclick(data.id, data.name)}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        );
}
 
export default Userlist;