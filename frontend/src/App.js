import './App.css';
import Homepage from './components/Homepage/Homepage';
import Users from './components/Users/Users';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { UserTokenContext } from './components/Context/UserTokenContext';
<<<<<<< HEAD
import TopArtists from './components/top-artists/TopArtists';
=======
import UserProfile from './components/UserProfile.js/UserProfile';
>>>>>>> 41db6e988c95a0d3df2a3215aaaeabf35ac247e3

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [dbID, setDBID] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <UserTokenContext.Provider value={{user, setUser, accessToken, setAccessToken, dbID, setDBID}}>
          <Routes>
                <Route exact path="/" element={<Navigate replace to='/home'/>} />
                <Route path="/home" element={<Homepage/>} />
                <Route path="/discover" element={<Users />} />
                <Route path="/topArtists" element={<TopArtists/>} />
            </Routes>
        </UserTokenContext.Provider>
      </BrowserRouter>   
    </div>
  );
}

export default App;