import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateLastName, updateName } from '../actions/userActions'

const EditUserPage = ({dispatch,name,lastName}) => {

    const [inputName, setInputName] = useState(name)
    const [inputLastName, setInputLastName] = useState(lastName)

    const editProfile = () => {
        dispatch(updateName(inputName,inputLastName))
    }
    
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center"> 
                <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /> 
                <input onChange={event => setInputName(event.target.value)} className="name mt-3" placeholder="Name" value={inputName}></input>
                <input onChange={event => setInputLastName(event.target.value)} className="name mt-3" placeholder="Last Name" value={inputLastName}></input>
                </div>
                <div className="text-center">
                <Link to="/user" className="button" onClick={editProfile}>
                    SAVE
                </Link> </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    name: state.user.name,
    lastName: state.user.lastName,
  })

export default connect(mapStateToProps)(EditUserPage)