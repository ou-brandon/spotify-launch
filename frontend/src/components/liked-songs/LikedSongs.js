import {useState} from "react";
import axios from "axios"
import { Box } from '@mui/material'
import Song from './Song.js'

const LikedSongs = (props) => {
    // GET 
    const [songList, setSongList] = useState([]);
    const getSongs = async () => {
        const {data} = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                Authorization: `Bearer ${props.token}`,
            },
            params: {
                limit: 10
            }
        })
        setSongList(data.items);
    }


    if(props.loggedIn) {
        getSongs();

        return (
        <>
            <h1>Liked Songs</h1>
            <Box display="flex" flexDirection="row">
                {songList && songList.map(song => <Song song={song}/>)}
            </Box>
        </>
        )
    }
}

export default LikedSongs;