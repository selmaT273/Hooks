import React from 'react';

// TODO: for lab make this a function component

export default class Login extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: <input name='username' /></label>
                <label>Password: <input type='password' name='password' /></label>
                <button>Login</button>
            </form>
        )
    }
}