import { TextField, Card, Button, Box, Grid } from '@mui/material'
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
        document.getElementById("post").value = '';
    }

    // get messages from firebase
    const [info, setInfo] = useState();
    useEffect(() => {
        fetch("http://localhost:9000/forum/info")
        .then((res) => res.json())
        .then((text) => {
            text.result.sort((a,b) => {
                return b.data.date.seconds-a.data.date.seconds
            })
            setInfo(text.result); 
        })
        .catch((err) => console.log(err))

    }, [dummy])

    return (
    <>
        <Navbar />
        <h1>Forum</h1>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
            <Card variant="outlined" sx={{width: 300, height: 200, margin:2}}>
            <form onSubmit={submitPost}>
                <TextField id="post" label="Write your post here..." multiline rows={4} inputRef={postRef}></TextField>
                {user ? <Button type="submit">Submit</Button> : <p>Please login to submit</p>}
            </form>
            </Card>
            </Grid>

            {info && info.map(msg => <Grid item xs={3}><Message msg={msg}/></Grid>)}
        </Grid>
    </>
    )

}

export default Forum;