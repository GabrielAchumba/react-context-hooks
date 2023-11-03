import React, { useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {

    const { 
        isLghtTheme,
        light,
        dark
     } = useContext(ThemeContext);

    const theme = isLghtTheme ? light : dark

    const BookListStyle = {
        background: theme.bg,
        color: theme.syntax
    }

    const ListItemStyle = {
        background: theme.ui
    }
    return ( 
        <div className="book-list" style={BookListStyle} >
            <ul>
                <li style={ListItemStyle}>the way of kings</li>
                <li style={ListItemStyle}>the name of the wind</li>
                <li style={ListItemStyle}>the final empire</li>
            </ul>
        </div>
     );
}
 
export default BookList;
 
