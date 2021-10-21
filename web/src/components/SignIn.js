import React from 'react'

export const SignIn = ({ dispatch,firebase,auth }) => {
    const signUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

      const signUpWithEmail = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        
        if(email.value && password.value){
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
            auth.signInWithEmailAndPassword(email.value, password.value);
        }
      }

      return (
        <div>
          <h1>Sign up</h1>
          <form onSubmit={signUpWithEmail}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-dark" onClick={signUpWithGoogle}>Sign in with google</button>;
                </div>
            </form>
            <div>
                
            </div>
        </div>
        
      );
}