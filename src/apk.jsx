
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.slice(0, 6));
            });
    }, []);

    return (
        <div className="main">
            <h1>User Details</h1>

            <div className="users">
                {users.map((user) => (
                    <div className="card" key={user.id}>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
