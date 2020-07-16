import React from 'react';
// import useTheme from '../../contexts/theme';
import './header.css'
import Login from '../auth/login';

export default function Header() {

    return (
        <>
        <header>
            <h1>Todo App</h1>
            {/* <h2>{title}</h2> */}
            {/* <button onClick={() => theme.toggleMode()}>Toggle Theme</button> */}
            <nav>
                <a href="/">Home</a>
                <a href="/">Todos</a>
            </nav>
            <span className="social-tabs">
                <a href="facebook.com/seteltser">Facebook</a>
                <a href="twitter.com/selma_042">Twitter</a>
                <a href="www.linkedin.com/in/stacey-teltser/">LinkedIn</a>
                <a href="github.com/selmaT273">Github</a>
            </span>
        </header>
        <Login />
        </>
    );
}
