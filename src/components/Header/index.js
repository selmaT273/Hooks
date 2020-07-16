import React from 'react';
// import useTheme from '../../contexts/theme';
import './header.css'
import useSettings from '../../contexts/settings';
import Login from '../auth/login';

export default function Header() {
    const { twitter } = useSettings();

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
                <a href={`https://twitter.com/${twitter}`}>Twitter</a>
                <a href="www.linkedin.com/in/stacey-teltser/">LinkedIn</a>
                <a href="github.com/selmaT273">Github</a>
            </span>
        </header>
        <Login />
        </>
    );
}
