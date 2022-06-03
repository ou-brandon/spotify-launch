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
import UserProfile from './components/UserProfile.js/UserProfile';
import TopSongs from './components/top-songs/TopSongs';
import {Helmet} from 'react-helmet';
import Inbox from './components/Inbox/Inbox';

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [dbID, setDBID] = useState(null);
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spotify Project</title>
        <link rel="canonical" href="http://localhost:3000/home" />
        <meta name="Spotify Project" content="Helmet application" />
      </Helmet>

      <BrowserRouter>
        <UserTokenContext.Provider value={{user, setUser, accessToken, setAccessToken, dbID, setDBID}}>
          <Routes>
                <Route exact path="/" element={<Navigate replace to='/home'/>} />
                <Route path="/home" element={<Homepage/>} />
                <Route path="/discover" element={<Users />} />
                <Route path="/topArtists" element={<TopArtists/>} />
                <Route path="/likedsongs" element={<LikedSongs />} />
                <Route path="/topsongs" element={<TopSongs />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/profile/:id" element={<UserProfile />} />
                <Route path="/inbox" element={<Inbox />} />
            </Routes>
        </UserTokenContext.Provider>
      </BrowserRouter>   
    </div>
  );
}

export default App;