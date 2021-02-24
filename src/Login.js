import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import  { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [ state, dispatch ] = useStateValue();

    const signIn = (e) =>{
        auth.signInWithPopup(provider)
        .then((result) =>{
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

        })
        .catch((error) =>{
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://assets.stickpng.com/images/5cb480b85f1b6d3fbadece78.png" alt="slack logo" />
                <h1>Sign In to Slack clone</h1>
                <p>Please choose your google account to Sign In</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
