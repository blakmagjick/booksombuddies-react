import React from 'react';
import AddBook from '../books/AddBook'


export default function NewProfile (props) {
    const loggedIn = props.userLoggedIn
    if (loggedIn)
    return(
        <React.Fragment>
        <hr />
            <h2>Create New Profile</h2>
            <div id='newformdiv'>
            <form onSubmit={props.handleProfileSubmit}>
                <label id='newformdiv'>Name:  </label>
                <input 
                    type='text'
                    id='formname'
                    name='name'
                    onChange={(event) => props.handleChange(event)}
                /><br />
                <label id='newformdiv'>Location:  </label>
                <input 
                    type='text'
                    id='formlocation'
                    name='location'
                    onChange={(event) => props.handleChange(event)}
                /><br />
                <label id='newformdiv'>Profile Pic:  </label>
                <input 
                    type='text'
                    id='formprofilepic'
                    name='profilepic'
                    onChange={(event) => props.handleChange(event)}
                /><br />
                <label id='newformdiv'>Fave Book:  </label>
                <input 
                    type='text'
                    id='formfavebook'
                    name='favebook'
                    onChange={(event) => props.handleChange(event)}
                /><br />
                <br />
                <input className='btn btn-secondary btn-sm' type='submit' value='Add Profile' />
            </form>
            </div><br />
            <AddBook 
                getBooks={props.getBooks}
                handleChange={props.handleChange}
            />
        </React.Fragment>
    )
    else
    return (
        <React.Fragment>
            <hr />
            <h4>Login to create profile.</h4>
        </React.Fragment>
    )
}