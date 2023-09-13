import React, { useState, useEffect } from 'react';
import './Login.css';
import { auth, provider } from './config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Home from './Home';
import './Login.css';
import { UserAuth } from '../context/Authcontext';
import { Link } from 'react-router-dom';


export default function Login(){

    // const [value, setValue] = useState('')

    // const HandleClick = () => {
    //     signInWithPopup(auth, provider).then((data) => {
    //         setValue(data.user.email)
    //         localStorage.setItem("email", data.user.email)
    //     })
    // }

    // useEffect(() => {
    //     setValue(localStorage.getItem('email'));
    // })


const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    return (
        <>
            <div className="LoginPage"></div>
            <div className="LoginBox">
                Login
                <button className="button">
                    <img className='google-logo' src="https://pluspng.com/img-png/google-logo-png-open-2000.png"></img>
                    Sign In with Google
                </button>
            </div>
        </>
    );
}
