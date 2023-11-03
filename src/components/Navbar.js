import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    //static contextType = ThemeContext
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { 
                        isLghtTheme,
                        light,
                        dark
                     } = context;
            
                     const theme = isLghtTheme ? light : dark
            
                     const navBarStyle = {
                        background: theme.ui,
                        color: theme.syntax
                     }
                    return (
                        <nav style={navBarStyle}>
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;
