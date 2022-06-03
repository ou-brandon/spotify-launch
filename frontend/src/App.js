import './App.css';
import LikedSongs from './components/liked-songs/LikedSongs.js'
import Homepage from './components/Homepage/Homepage';
import Users from './components/Users/Users';
import Forum from './components/forum/Forum.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { UserTokenContext } from './components/Context/UserTokenContext';
import TopArtists from './components/top-artists/TopArtists';

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