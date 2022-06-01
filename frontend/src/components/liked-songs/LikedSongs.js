import {useState, useEffect} from "react";
import axios from "axios"

const LikedSongs = () => {
    const CLIENT_ID = "0aa7ccf6ebad44d4a7175d4f152c8eed";
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    // auth get token
    const [token, setToken] = useState("");
    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token")

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);
    }, [])

    const logout = () => {
        setToken("");
        setSongList([]);
        window.localStorage.removeItem("token");
    }

    // GET 
    const [songList, setSongList] = useState([]);
    const getSongs = async () => {
        const {data} = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setSongList(data.items);
    }

    const Song = (props) => {
        const trackInfo = props.song.track;
        console.log(props.song.track)
        return (
        <>
            <h3>{trackInfo.name}</h3>
            <p>{trackInfo.artists.map(artist => artist.name)}</p>
            {trackInfo.album.images.length ? <img width="50%" src={trackInfo.album.images[0].url} /> : null}
        </>
        )
    }

    return (
    <>
        <h1>Liked Songs</h1>
        {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-library-read`}>
                Login to Spotify</a>
        : <button onClick={logout}>Logout</button>
        }

        {token ? 
            <button onClick={getSongs}>Get my liked songs</button>
        : null
        }

        {songList && songList.map(song => <Song song={song}/>)}
    </>
    )
}

export default LikedSongs;