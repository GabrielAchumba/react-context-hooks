import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_BOOK",
            book: { title, author}
        });
        setTitle('');
        setAuthor('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Title name"
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={author} placeholder="Author name"
            onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" val="Add Book"/>
        </form>
     );
}
 
export default NewBookForm;