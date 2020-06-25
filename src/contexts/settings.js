import React, { useContext } from 'react';

export const SettingsContext = React.createContext();

export default function useSettings(){
    return useContext(SettingsContext);
}

export class SettingsProvider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: 'DeltaV Context',
            setTitle: this.setTitle,
            twitter: '@selma_042',
            setTwitter: this.setTwitter,
        };
    }

    setTitle = title => this.setState({title});
    setTwitter = twitter => this.setState({twitter});
    render(){
        return (
            <SettingsContext.Provider value={this.state}>
                {this.props.children}
            </SettingsContext.Provider>
        )
    }
}