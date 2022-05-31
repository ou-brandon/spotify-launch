import React from 'react'
import { useState } from 'react';
import LogInPrompt from './LogInPrompt';
import Welcome from './Welcome';
const Homepage = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
  return (
    <>
        {loggedIn ? <Welcome user={user}/> : <LogInPrompt setLoggedIn={setLoggedIn} setUser={setUser}/>}
    </>
  )
}

export default Homepage;