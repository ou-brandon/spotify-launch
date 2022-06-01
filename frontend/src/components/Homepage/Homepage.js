import { Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import LogInPrompt from './LogInPrompt';
import Welcome from './Welcome';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
const Homepage = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
  return (
    <>
        {loggedIn ? <Welcome/> : <LogInPrompt loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
        {/*accessToken*/}
    </>
  )
}
export default Homepage;
