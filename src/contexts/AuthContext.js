import { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
     } 

    toggleAuth = () => {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        })
    }
    render() { 
        return (
            <AuthContext.Provider
            value={{
                ...this.state,
                toggleAuth: this.state.toggleAuth
            }}>
                {this.children.props}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;