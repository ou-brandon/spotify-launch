import React from 'react'
import { useState } from 'react';
import LogInPrompt from './LogInPrompt';
import Welcome from './Welcome';
import LikedSongs from '../liked-songs/LikedSongs.js'
import Forum from '../forum/Forum.js'

const Homepage = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
  return (
    <>
        {loggedIn ? <Welcome user={user} setUser={setUser} token={token}/> : <LogInPrompt setLoggedIn={setLoggedIn} setToken={setToken}/>}
        <LikedSongs token={token} loggedIn={loggedIn}/>
        <Forum token={token} loggedIn={loggedIn} user={user} />
    </>
  )
}

export default Homepage;