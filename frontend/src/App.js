import logo from './logo.svg';
import './App.css';
import LikedSongs from './components/liked-songs/LikedSongs.js'
import Homepage from './components/Homepage/Homepage';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar'
import Forum from './components/forum/Forum.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { UserTokenContext } from './components/Context/UserTokenContext';

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <UserTokenContext.Provider value={{user, setUser, accessToken, setAccessToken}}>
          <Routes>
                <Route path="/" element={<Navbar />}/>
                <Route path="/home" element={<Homepage/>} />
                <Route path="/discover" element={<Users />} />
                <Route path="/likedsongs" element={<LikedSongs />} />
                <Route path="/forum" element={<Forum />} />
            </Routes>
        </UserTokenContext.Provider>
      </BrowserRouter>   
    </div>
  );
}

export default App;
