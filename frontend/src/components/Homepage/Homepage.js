
import React from 'react'
import { useState } from 'react';

import LogInPrompt from './LogInPrompt';
import Welcome from './Welcome';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
const Homepage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const {user} = useContext(UserTokenContext);
  return (
    <>
        {(loggedIn || user) ? <Welcome/> : <LogInPrompt loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
        {/*accessToken*/}
    </>
  )
}
export default Homepage;
