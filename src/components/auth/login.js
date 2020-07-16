import React from 'react';
import './login.css';
import { AuthContext } from '../../contexts/auth';

// TODO: for lab make this a function component

export default class Login extends React.Component{
    // in a function component you would use a hook instead
    static contextType = AuthContext; 

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;

        this.context.login(username.value, password.value);
        
    }

    render(){
        console.log('auth context', this.context);

        const {user} = this.context;

        if (user){
            return (<h1>Welcome Back</h1>)
        }
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: <input name='username' /></label>
                <label>Password: <input type='password' name='password' /></label>
                <button>Login</button>
            </form>
        )
    }
}