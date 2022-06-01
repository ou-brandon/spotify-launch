import logo from './logo.svg';
import './App.css';
import LikedSongs from './components/liked-songs/LikedSongs.js'
import Homepage from './components/Homepage/Homepage';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      {/* <LikedSongs /> */}
      <Homepage />
      
      <Users />
    </div>
  );
}

export default App;
