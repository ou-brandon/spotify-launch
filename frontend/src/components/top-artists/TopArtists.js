import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';

const TopArtists = () => {
    const TOPARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists'

    const [token, setToken] = useState('')
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);

    //GET
    const [topArtists, setTopArtists] = useState([]);
    const getTopArtists = async () => {
        const {data} = await axios.get(TOPARTISTS_ENDPOINT, {
          headers: {Authorization: `Bearer ${token}`,}
      })
      setTopArtists(data.items);
    }
  
    const Artist = (props) => {
      return (
      <>
        <Box padding={3} margin={2} >{props.artist.name}</Box>
      </>
      )
    }

    return (
      <>
        <Navbar/>
        <button onClick={getTopArtists}>Get Top Artists</button>
        <br></br>
        <h3>Top Artists:</h3>
        {topArtists && topArtists.map(artist => <Artist artist = {artist}/>)}   
      </>
    )

    
}

export default TopArtists;