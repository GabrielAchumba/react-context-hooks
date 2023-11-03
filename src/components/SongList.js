import { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';


const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ])

    const [age, setAge] = useState(5)

    const addSong = (title) => {
        setSongs([
            ...songs, 
            {title, id: uuidv1()}
        ])
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    useEffect(() => {
        console.log(songs)
    }, [songs])

    useEffect(() => {
        console.log(age);
    }, [age])

    return ( 
        <div className="song-list">
            <ul>
                {
                    songs.map((song) => {
                        return (<li key={song.id}>{song.title}</li>)
                    })
                }
            </ul>
            <NewSongForm 
            addSong={addSong} />
            <button onClick={incrementAge}>Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;