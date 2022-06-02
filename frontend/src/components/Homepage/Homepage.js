
import React, { useEffect } from 'react'
import { useState } from 'react';

import LogInPrompt from './LogInPrompt';
import Welcome from './Welcome';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import axios from 'axios';
const Homepage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const {user, dbID, setDBID} = useContext(UserTokenContext);
    useEffect(() => {
      if(user){
        axios.get('http://localhost:9000/users/')
        .then((res) => res.data.result)
        .then((res) => res.forEach((u) => {
          if(u[1].spotifyID === user.id){
            setDBID(u[0]);
          } 
        }))
      }
      
    }, [loggedIn, user])
  return (
    <>
        {(loggedIn || user) ? <Welcome/> : <LogInPrompt loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
    </>
  )
}
export default Homepage;
