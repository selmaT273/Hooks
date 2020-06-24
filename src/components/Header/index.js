import React from 'react';
import useTheme from '../../contexts/theme';
import './header.css'
import useSettings from '../../contexts/settings';

export default function Header() {
    const theme = useTheme();
    const { title, twitter } = useSettings();

    return (
        <header className={theme.mode}>
            <h1>ToDo App</h1>
            <h2>{title}</h2>
            <button onClick={() => theme.toggleMode()}>Toggle Theme</button>
            <a href={`https://twitter.com/${twitter}`}>Twitter</a>
        </header>
    );
}
