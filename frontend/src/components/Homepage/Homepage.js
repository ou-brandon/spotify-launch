import React from 'react'
import { useState } from 'react';
import LogInPrompt from './LogInPrompt';
import Welcome from './Welcome';
const Homepage = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
  return (
    <>
        {loggedIn ? <Welcome user={user} token={token}/> : <LogInPrompt setLoggedIn={setLoggedIn} setToken={setToken}/>}
    </>
  )
}

export default Homepage;