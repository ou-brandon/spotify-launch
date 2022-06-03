import {useState} from "react";
import axios from "axios"
import { Box, Stack, Grid, GridItem } from '@mui/material'

import Song from '../top-songs/Song.js'
import { useContext, useEffect } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';

const CLIENT_ID = "0aa7ccf6ebad44d4a7175d4f152c8eed";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost://"

const TOP_SONGS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";

function TopSongs() {
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
    console.log("accessToken",accessToken);
    // get top songs
    const [topSongsList, setTopSongsList] = useState([]);
    const getTopSongs = () => {
        axios.get(TOP_SONGS_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            params: {
                limit: 50
            }
        })
        .then(response => {
            
            setTopSongsList(response.data.items)
        })
        .catch(error => {
            console.log(error);
        })
    };

    if (user){
        getTopSongs();
        console.log("name", topSongsList);
    }

    return(
        <div>
            <Navbar/>
            {user ?
            <div>
            <h1>Top Songs</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {topSongsList && topSongsList.map(song => 
                <Grid item xs={3}><Song song={song}/></Grid>)}
            </Grid>
            </div>
        : <p>Please Login</p>
        }
        </div>
    )
}

export default TopSongs;