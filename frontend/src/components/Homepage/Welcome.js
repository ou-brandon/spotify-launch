import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Welcome = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me', {headers: { 'Authorization' : 'Bearer ' + props.token}})
    .then((res) => {console.log(res.data); setData(res.data)})
  }, [])
  if(data)
    return (
      <>  
          <h1>Welcome {data.display_name}!</h1>
          <Box sx={{maxWidth: '200px'}}>
            <CardMedia component='img' src={data.images[0].url} /> 
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