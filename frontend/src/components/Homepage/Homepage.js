import React from 'react'
import { useState } from 'react';
import LogInPrompt from './LogInPrompt';
import Welcome from '../Welcome';
const Homepage = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    
  return (
    <>
        {loggedIn ? <Welcome /> : <LogInPrompt />}
    </>
  )
}

export default Homepage;