import React, { useContext } from 'react';


const usersAPI = 'https://deltav-todo-alpha.azurewebsites.net/api/v1/Todos';
export const AuthContext = React.createContext();

export default function useAuth() {
    return useContext(AuthContext);
}

export class AuthProvider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: null,
            login: this.login,
        };
    }

    login = async (username, password) => {
        const result = await fetch(`${usersAPI}/Login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        const body = await result.json();

        // const user = await result.json();
        if (result.ok){
            this.setState({user: body });
            return;
        }

        this.setState({ user: null, });


        // username "editor" password "P@ssw0rd"
    }

    render(){
        return(
            <AuthContext.Provider value = {this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}