import React from 'react'
import { Button, Typography, Grid, Card, Container, Paper } from '@mui/material';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import { UserTokenContext } from '../Context/UserTokenContext';
// import Image from './images/background_image.jpeg';
// /Users/michaelkodsi/spotify-launch/frontend/src/images/background_image.jpeg

import Navbar from '../Navbar/Navbar';
import { convertLength } from '@mui/material/styles/cssUtils';
import { minHeight } from '@mui/system';

const Image = "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80";
// https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80
// https://images.unsplash.com/photo-1490476323407-63a2b2baa393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80

const LogInPrompt = (props) => {
    const [prompt, setPrompt] = useState("");
    const {setAccessToken} = useContext(UserTokenContext);
    //https://www.youtube.com/watch?v=G_WFk4wg9fk
    const getParams = (hash) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split('&');
        const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
            const [key, value] = currentValue.split('=');
            accumulator[key] = value;
            return accumulator;
        }, {});

        return paramsSplitUp;
    };

    useEffect(() => {
        if(prompt){
            console.log('Prompt', prompt);
            window.location.href = prompt;
        }
        else{
            console.log('Prompt empty');
        }
    }, [prompt])

    useEffect( () => {
        const getHash = async () => {
            if(window.location.hash){
                const {access_token} = getParams(window.location.hash);
                props.setLoggedIn(true);
                setAccessToken(access_token)   
            }
        }
        
        getHash();
        
    }, [setAccessToken, props])

    

    const handleLogin = async () => {
        await axios.get('http://localhost:9000/login')
        .then((response) => setPrompt(response.data))
    }

    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`,
            maxHeight: '50vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
        }
    };

  return (
    <>
        <Navbar/>
        {/*window.location.hash*/}
        {!props.loggedIn && (
            <div>
            {/* <Typography variant='h4'>Please log in to Spotify</Typography> */}

            <Paper style={styles.paperContainer}>
                <div style={styles.root}>
                    <Button variant="contained" onClick={handleLogin} >Login to Spotify</Button>
                </div>
            </Paper>

            <br></br>
            <br></br>

            <Container >
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Container>
                            <Card>
                            <br></br>
                        <h2>View Your Favorites</h2>
                        <p>Access your top songs and artists</p>  
                        <br></br>  
                        </Card>
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                    <Container>
                    <Card>
                            <br></br>
                            <h2>Connect</h2>
                            <p>Join other users in discussing music</p>   
                            <br></br> 
                    </Card>
                    </Container>
                    </Grid>
                    
                    <Grid item xs={4}>
                    <Container>
                    <Card>
                    <br></br>
                            <h2>Messages</h2>
                            <p>Chat with friends on the platform</p>
                            <br></br>    
                    </Card>
                        </Container>   
                    </Grid>
                    
                    </Grid>
                </Container>
            </div>
        )}
        
    </>
  )
}

export default LogInPrompt