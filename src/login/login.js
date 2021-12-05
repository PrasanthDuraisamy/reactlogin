
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';
export const Login = () => {
    const navigate = useNavigate();
    const email = "admin@gmail.com";
    const password = "admin";
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSucess, setisSucess] = useState(true);
    const handleUsername = (event) => {
        let userName = event.target.value;
        setUserName(userName);
    }
    const handlePassword = (event) => {
        let userPassword = event.target.value;
        setUserPassword(userPassword)
    }
    const validateSubmit = () => {
        if ((userName === email) && (userPassword === password)) {
            navigate("/loggedIn");
        }
        else {
            setisSucess(false);
        }
    }
    return (<div className="main">
        <h2>Login to Explore</h2>
        <div className="name">
            <span>Type your Email:</span>
            <input onChange={(event) => handleUsername(event)} type="email" placeholder="@email.com" />
        </div>
        <br />
        <div className="password">
            <span>Type your password:</span>
            <input onChange={(event) => handlePassword(event)} type="password" />
        </div>
        {!isSucess ? <h6>User name or password is incorrect</h6> : null}
        <input onClick={() => validateSubmit()} type="submit" />

    </div>)
}

