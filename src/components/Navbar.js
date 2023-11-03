import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { toggleAuth, isAuthenticated } = useContext(AuthContext);
    const { 
        isLghtTheme,
        light,
        dark
    } = useContext(ThemeContext);

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
     );
}
 
export default Navbar;

