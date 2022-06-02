import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { UserTokenContext } from './components/Context/UserTokenContext';
import TopArtists from './components/top-artists/TopArtists';

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
                <Route path="/topArtists" element={<TopArtists/>} />
            </Routes>
        </UserTokenContext.Provider>
      </BrowserRouter>   
    </div>
  );
}

export default App;