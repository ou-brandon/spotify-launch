import axios from 'axios'
import React, { useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Artist from './Artist.js'
import { useContext, useEffect } from 'react'
import { UserTokenContext } from '../Context/UserTokenContext'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const TopArtists = () => {
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
    const TOPARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists'
    const [time, setTime] = useState('medium_term');
    const [topArtists, setTopArtists] = useState([]);

    const getTopArtists = async () => {
        const {data} = await axios.get(TOPARTISTS_ENDPOINT, {
          headers: {Authorization: `Bearer ${accessToken}`,},
            params: {
                time_range: time
            }
      })
      setTopArtists(data.items);
    }

    useEffect(() => {
      if(user)
        getTopArtists();
    }, [time])

    return (
      <>
        <Navbar/>
        {user ? 
          <div> 
            <h3>Top Artists:</h3>
            <ToggleButtonGroup>            
              <ToggleButton onClick = {() => 
                setTime('long_term')
              }>All Time</ToggleButton>
              <ToggleButton onClick = {() => 
                setTime('medium_term')
              }>Past Year</ToggleButton>
              <ToggleButton onClick = {() => 
                setTime('short_term')
              }>Past Month</ToggleButton>
            </ToggleButtonGroup>

            {topArtists && topArtists.map(artist => <Artist artist = {artist}/>)}   
          </div>
        : <p>Log in to see your top artists.</p>
          }
      </>
    )
}

export default TopArtists;