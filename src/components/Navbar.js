import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    //static contextType = ThemeContext
    
    render() {
        return (
            <AuthContext.Consumer>
                {(authContext) => {
                    return (   
                            <ThemeContext.Consumer>
                            {(themeContext) => {
                                const { toggleAuth, isAuthenticated } = authContext
                                const { 
                                    isLghtTheme,
                                    light,
                                    dark
                                } = themeContext;
                        
                                const theme = isLghtTheme ? light : dark
                        
                                const navBarStyle = {
                                    background: theme.ui,
                                    color: theme.syntax
                                }
                                return (
                                    <nav style={navBarStyle}>
                                        <h1>Context App</h1>
                                        <div onClick={() => toggleAuth()}>
                                            { isAuthenticated ? 'Logged in' : 'Logged out'}
                                        </div>
                                        <ul>
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Contact</li>
                                        </ul>
                                    </nav>
                                )
                            }}
                        </ThemeContext.Consumer>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;
