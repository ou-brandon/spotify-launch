import React from 'react'
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import { UserTokenContext } from '../Context/UserTokenContext';

import Navbar from '../Navbar/Navbar';
const LogInPrompt = (props) => {
    const [prompt, setPrompt] = useState("");
    const {setAccessToken} = useContext(UserTokenContext);
    //https://www.youtube.com/watch?v=G_WFk4wg9fk
    const getParams = (hash) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split('&');
        const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
            //console.log(currentValue);
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
            //console.log('hash change to', window.location.hash)
            if(window.location.hash){
                //console.log(window.location.hash);
                const {access_token} = getParams(window.location.hash);
                //console.log('Access token', access_token);
                props.setLoggedIn(true);
                setAccessToken(access_token);
                //window.location.href = 'http://localhost:3000/home'
            }
        }
        
        getHash();
        
        
    }, [setAccessToken, props])

    

    const handleLogin = async () => {
        await axios.get('http://localhost:9000/login')
        .then((response) => setPrompt(response.data))
    }

  return (
    <>
        <Navbar/>
        {window.location.hash}
        {!props.loggedIn && (
            <Typography variant='h4'>Please log in to Spotify</Typography>,
            <Typography variant='h4'>Please log in to Spotify</Typography>,
            <Button onClick={handleLogin}>Log In</Button>
        )}
        
    </>
  )
}

export default LogInPrompt