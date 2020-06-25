import React from 'react';
import { AuthContext } from '../../contexts/auth';

// TODO: for lab make this a function component

export default class Login extends React.Component{
    static contextType = AuthContext; 

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;

        console.log(username.value, password.value);
        
    }

    render(){
        console.log('auth context', this.context);
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: <input name='username' /></label>
                <label>Password: <input type='password' name='password' /></label>
                <button>Login</button>
            </form>
        )
    }
}