import React from 'react';
import useTheme from '../../contexts/theme';
import './header.css'

export default function Header() {
    const theme = useTheme();

    return (
        <header className={theme.mode}>
            <h1>ToDo App</h1>
            <button onClick={() => theme.toggleMode()}>Toggle Theme</button>
        </header>
    );
}
