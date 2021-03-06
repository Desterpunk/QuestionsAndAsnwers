import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import firebase,{auth} from '../services/firebase';

export const SignIn = () => {
    const [errors, setErrors] = useState("")
    const signUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

      const signInWithEmail = (event) => {
        event.preventDefault();
        const {email,password} = event.target.elements

        auth.signInWithEmailAndPassword(
          email.value,
          password.value)
        .then(user => {})
        .catch(error => {
          setErrors(error.message)
        })
      }

      return (
        <div>
          <h1>Sign In</h1>
          <form onSubmit={signInWithEmail}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" autoComplete="on" name="password" placeholder="Password"/>
                    {errors}
                </div>
                <div className="btn-toolbar ">
                    <button type="submit" className="btn btn-primary mx-1">Submit</button>
                </div>
                <h6>No registrado? <Link to="/signup" ><span className="sign-link">Sign Up</span></Link> </h6>
            </form>
            <button className="btn btn-dark" onClick={signUpWithGoogle}>Sign in with google</button>;
        </div>
        
      );
}