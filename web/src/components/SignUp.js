import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import firebase,{auth} from '../services/firebase';

export const SignUp = () => {
    const [errors, setErrors] = useState("")
    const signUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

      const signUpWithEmail = (event) => {
        event.preventDefault();
        const {email,password} = event.target.elements

        auth.createUserWithEmailAndPassword(
          email.value,
          password.value)
        .then(user => {})
        .catch(error => {
          setErrors(error.message)
        })
      }

      return (

        <section>
        <h1 className="text-center">Home</h1>
        <div>

        <div>
          <h1>Sign Up</h1>
          <form onSubmit={signUpWithEmail}>
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
                <h6>Ya tiene cuenta? <Link to="/home" ><span className="sign-link">Sign In</span></Link> </h6>
            </form>
            <button className="btn btn-dark" onClick={signUpWithGoogle}>Sign in with google</button>;
        </div>

</div>
<p>welcome to the question and answer app.</p>
<div className="text-center">
<Link to="/questions" className="button">
  View Questions
</Link>
</div>

</section>
        
      );
}