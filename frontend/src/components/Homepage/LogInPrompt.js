import React from 'react'
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import { UserTokenContext } from '../Context/UserTokenContext';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const LogInPrompt = (props) => {
    const [prompt, setPrompt] = useState("");
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
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
                const {access_token, expires_in, token_type} = getParams(window.location.hash);
                //console.log('Access token', access_token);
                props.setLoggedIn(true);
                setAccessToken(access_token);
                //window.location.href = 'http://localhost:3000/home'
            }
        }
        
        getHash();
        
        
    }, [window.location.hash, window.location.href])

    

    const handleLogin = async () => {
        const res = await axios.get('http://localhost:9000/login')
        .then((response) => setPrompt(response.data))
    }


    const path = window.location.href.split('/')[3]
    //console.log('path', path);
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