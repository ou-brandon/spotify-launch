import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';
const Welcome = (props) => {
  const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me', {headers: { 'Authorization' : 'Bearer ' + accessToken}})
    .then((res) => {console.log(res.data); setUser(res.data)})

  }, [accessToken])
  if(user)
    return (
      <>  
          <Navbar />
          <Typography variant='h3'>Welcome {user.display_name}!</Typography>
          <Box sx={{maxWidth: '200px'}}>
            <CardMedia component='img' src={user.images[0].url} /> 
          </Box>
        
      </>
    )
  return (
    <>
      <Typography variant='h3'>Loading...</Typography>
    </>
  );
}

export default Welcome;