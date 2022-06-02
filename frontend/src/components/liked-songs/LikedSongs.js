import {useState} from "react";
import axios from "axios"
import { Box } from '@mui/material'

import Song from './Song.js'
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';


const LikedSongs = () => {
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);

    // GET 
    const [songList, setSongList] = useState([]);
    const getSongs = async () => {
        const {data} = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                limit: 10
            }
        })
        setSongList(data.items);
    }


    if(user)
        getSongs();

    return (
    <>
        <Navbar/>
        {user ?
            <div>
            <h1>Liked Songs</h1>
            <Box display="flex" flexDirection="row">
                {songList && songList.map(song => <Song song={song}/>)}
            </Box>
            </div>
        : <p>Please Login</p>
        }
    </>
    )
}

export default LikedSongs;