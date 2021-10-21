import React from 'react'

export const SignIn = ({ dispatch,firebase,auth }) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

      const signInWithEmail = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        auth.signInWithEmailAndPassword(email.value,password.value);
      }

      return (
        <div>
          <h1>Sign up</h1>
          <form onSubmit={signInWithEmail}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit" className="btn btn-dark">Sign Up</button>
          </form>
            <div>
                <button className="btn btn-dark" onClick={signInWithGoogle}>Sign in with google</button>;
            </div>
        </div>
        
      );
}