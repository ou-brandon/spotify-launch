import { TextField, Card, Button } from '@mui/material'
import { useRef, useEffect, useState } from "react"

import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import Message from "./Message.js"

const Forum = (props) => {
    const {user, setUser, accessToken, setAccessToken} = useContext(UserTokenContext);
    const [dummy, setDummy] = useState(false);

    // post new message to firebase
    const postRef = useRef();
    const submitPost = (e) => {
        e.preventDefault();
        
        let image = "";
        if(user.images.length !== 0)
            image = user.images[0].url;

        axios.post("http://localhost:9000/forum/post", {
            displayName: user.display_name,
            spotifyID: user.id,
            imageUrl: image,
            text: postRef.current.value
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))

        setDummy(!dummy);
    }

    // get messages from firebase
    const [info, setInfo] = useState();
    useEffect(() => {
        fetch("http://localhost:9000/forum/info")
        .then((res) => res.json())
        .then((text) => setInfo(text.result))
        .catch((err) => console.log(err))
        console.log(info)
    }, [dummy])

    return (
    <>
        <Navbar />
        <h1>Forum</h1>

        {user && 
            <Card>
            <form onSubmit={submitPost}>
                <TextField label="Write your post here..." multiline rows={4} inputRef={postRef}></TextField>
                <Button type="submit">Submit</Button>
            </form>
            </Card>
        }

        {info && info.map(msg => <Message msg={msg}/>)}
    </>
    )

}

export default Forum;