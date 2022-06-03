import {useState, useEffect, useContext} from "react";
import axios from "axios"
import { Box, Stack, Grid, GridItem } from '@mui/material'

import Song from './Song.js'
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

    useEffect(() => {
        if(user)
            getSongs();
    }, [])
    
    return (
    <>
        <Navbar/>
        {user ?
            <div>
            <h1>Liked Songs</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {songList && songList.map(song => <Grid item xs={3}><Song song={song}/></Grid>)}
            </Grid>
            </div>
        : <p>Please Login</p>
        }
    </>
    )
}

export default LikedSongs;