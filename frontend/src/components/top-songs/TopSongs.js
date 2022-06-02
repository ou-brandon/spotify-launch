import {useState} from "react";
import axios from "axios";
import { Box } from '@mui/material'
import Song from './Song.js'

const CLIENT_ID = "0aa7ccf6ebad44d4a7175d4f152c8eed";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost://"

const TOP_SONGS_ENDPOINT = "https://api.spotify.com/v1/me/user-top-read";

const TopSongs = (props) => {
    // GET 
    const [topSongsList, setTopSongsList] = useState([]);

    const handleGetTopSongs = () => {
        axios.get(TOP_SONGS_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + props.token,
            }
        })
        .then(response => {
            setTopSongsList(response.data.items);
        })
        .catch(error => {
            console.log(error);
        })
    };



    if(props.loggedIn) {
        handleGetTopSongs();

        return (
        <>
            <h1>Top Songs</h1>
            <Box display="flex" flexDirection="row">
                {topSongsList && topSongsList.map(song => <Song song={song}/>)}
            </Box>
        </>
        )
    }
}

export default TopSongs;