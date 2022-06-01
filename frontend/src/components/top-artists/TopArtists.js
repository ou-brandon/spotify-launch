import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

const TopArtists = () => {
    const CLIENT_ID = "3057a0e95eef4b47b5a882f47b2fa2da"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const TOPARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists'
    const TOPARTISTS_SCOPE = 'user-top-read';

    const [token, setToken] = useState('')

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

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
        <h1>Spotify App</h1>
        {!token ?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${TOPARTISTS_SCOPE}`}>
          Login to Spotify</a>
          : <button onClick={logout}>Logout</button>}

        {token ?
          <button onClick={getTopArtists}>Get Top Artists</button>
        : <p>Sign in to your account above</p>
        }
        <br></br>
        <h3>Top Artists:</h3>
        {topArtists && topArtists.map(artist => <Artist artist = {artist}/>)}   
      </>
    )
}

export default TopArtists;