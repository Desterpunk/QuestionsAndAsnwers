import React from 'react'
import { logout } from '../actions/authActions';
import { auth } from '../services/firebase';

export const SignOut = ({ dispatch}) => {
    return (
        auth.currentUser && (
          <button
            className="button right"
            onClick={() => {
              dispatch(logout())
              auth.signOut();
            }}
          >
            Sign out
          </button>
        )
      );
}