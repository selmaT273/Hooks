import React, { useContext } from 'react';

export const ThemeContext = React.createContext();

// Has to be a class component
export class ThemeProvider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mode: props.defaultMode || 'light',

            // add functions to our context state
            toggleMode: this.toggleMode,
        };
    }

    toggleMode = () => {
        this.setState(state => ({
            mode: state.mode === 'light' ? 'dark' : 'light'
        }));
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default function useTheme(){
   return useContext(ThemeContext);
}