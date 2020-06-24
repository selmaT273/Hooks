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
            twitter: '@selma_042',
        };
    }

    render(){
        return (
            <SettingsContext.Provider value={this.state}>
                {this.props.children}
            </SettingsContext.Provider>
        )
    }
}