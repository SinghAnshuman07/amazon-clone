import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //Firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        //Firebase Register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //Successfully created new user with email and password
                console.log(auth);
                if(auth) {
                    navigate('/')
                }
             })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <NavLink to='/'>
                <img 
                    className='login_logo'
                    src="https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png"
                />
            </NavLink>

            <div className='login_container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create an Account</button>
            </div>
        </div>
    )
}

export default Login