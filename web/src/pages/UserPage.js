import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUser } from '../actions/userActions'

const UserPage = ({dispatch,name,lastName,email,userId,user}) => {


    useEffect(() => {
        console.log(user)
        dispatch(fetchUser(userId))
    }, [dispatch])

    return(
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">  
                <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /> 
                <span className="name mt-3">{name}</span> 
                <span className="name mt-3">{lastName}</span> 
                <span className="name mt-3">{email}</span> 

                <span className="idd">{userId}</span>
                <Link to="/editUser" className="button">
                    Edit
                </Link> </div>
            </div>
        </div>
    )
    }

const mapStateToProps = state => ({
    name: state.user.user.name,
    lastName: state.user.user.lastName,
    email: state.auth.email,
    userId: state.auth.uid,
    user: state.user.user
  })

export default connect(mapStateToProps)(UserPage)