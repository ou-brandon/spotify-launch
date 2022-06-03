import axios from 'axios'
import React, { useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Artist from './Artist.js'
import { useContext, useEffect } from 'react'
import { UserTokenContext } from '../Context/UserTokenContext'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Typography } from '@mui/material'

const TopArtists = () => {
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
    const TOPARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists'
    const [time, setTime] = useState('medium_term');
    const [topArtists, setTopArtists] = useState([]);

    const [activeButton, setActiveButton] = useState(2);
    const handleButtonChange = (event, newButton) => {
        setActiveButton(newButton);
    }

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
<<<<<<< HEAD
            <Typography sx={{padding: '.5%'}} variant='h4'>Top Artists:</Typography>
            <ToggleButtonGroup>            
              <ToggleButton onClick = {() => 
                setTime('long_term')
=======
            <h3>See your Top Artists from: </h3>
            <ToggleButtonGroup exclusive color = "primary" value = {activeButton} onChange = {handleButtonChange}>            
              <ToggleButton value = "1" aria-label = "all time" onClick = {() => {
                setTime('long_term')}
>>>>>>> 707429653a0988d27af3364192244b283d5b6809
              }>All Time</ToggleButton>
              <ToggleButton value = "2" aria-label = "past year" onClick = {() => {
                setTime('medium_term')}
              }>Past Year</ToggleButton>
              <ToggleButton value = "3" aria-label = "past month" onClick = {() => {
                setTime('short_term')}
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