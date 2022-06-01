import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Welcome = (props) => {
  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me', {headers: { 'Authorization' : 'Bearer ' + props.token}})
    .then((res) => {console.log(res.data); props.setUser(res.data)})

  }, [])
  if(props.user)
    return (
      <>  
          <Typography variant='h3'>Welcome {props.user.display_name}!</Typography>
          <Box sx={{maxWidth: '200px'}}>
            <CardMedia component='img' src={props.user.images[0].url} /> 
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