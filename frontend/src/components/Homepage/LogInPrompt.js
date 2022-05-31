import React from 'react'
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';


const LogInPrompt = (props) => {
    const [prompt, setPrompt] = useState("");
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

    const displayPrompt = () => {
        if(prompt){
            //console.log('Prompt', prompt);
            window.location.href = prompt;
        }
        else{
            console.log('Prompt empty');
        }
    }

    useEffect(() => {
        displayPrompt();
    }, [prompt])

    useEffect(() => {
        if(window.location.hash){
            //console.log(window.location.hash);
            const {access_token, expires_in, token_type} = getParams(window.location.hash);
            console.log('Access token', access_token);
        }
    }, [window.location.hash])
    const handleLogin = async () => {
        const res = await axios.get('http://localhost:9000/login')
        .then((response) => setPrompt(response.data))
    }
  return (
    <>
        {prompt}
        <h1>Please log in to Spotify</h1>
        <Button onClick={handleLogin}>Submit</Button>
    </>
  )
}

export default LogInPrompt