import React from 'react'

export const SignOut = ({ dispatch,auth,logout }) => {
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