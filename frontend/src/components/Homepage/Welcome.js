import React, { useEffect } from 'react'
import axios from 'axios'
import { Typography, Paper, Button, Card, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Image = "https://images.unsplash.com/photo-1557063673-0493e05da49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80";
const Welcome = () => {
  const {user, setUser, accessToken} = useContext(UserTokenContext);
  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me', {headers: { 'Authorization' : 'Bearer ' + accessToken}})
    .then((res) => {console.log(res.data); setUser(res.data)})

  }, [accessToken, setUser])
  

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        maxHeight: '40vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
    }
};

  if(user){
    console.log(user);
    return (
      <>  
          <Navbar />
          <Paper style={styles.paperContainer}>
                <div style={styles.root}>
                <Typography variant='h3'>Welcome {user.display_name}!</Typography>
                </div>
            </Paper>

            <br></br>
            <br></br>
            <br></br>
        
          {/* <Box sx={{maxWidth: '200px'}}>
            <CardMedia component='img' src={user.images.length && user.images[0].url} /> 
          </Box> */}
          <Container>
          <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
 >
          <Grid item xs={3}>
    <Card>
    <Card sx={{ maxWidth: 345}} >
      <CardMedia
        component="img"
        height="140"
        image= {user.images.length && user.images[0].url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.display_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" href="http://localhost:3000/discover">Discover</Button>
      </CardActions>
    </Card>
    </Card>
  </Grid>      
 </Grid>
    </Container>
        
      </>
    )
  }
  return (
    <>
      <Typography variant='h3'>Loading...</Typography>
    </>
  );
}

export default Welcome;