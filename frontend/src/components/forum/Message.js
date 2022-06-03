import { Card, Typography, Avatar, Stack, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useContext, useEffect, useState } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';

import axios from "axios"

const Message = (props) => {
    const {dbID, user} = useContext(UserTokenContext);
    const {msg, setDummy, dummy} = props;
    const data = msg.data;
    let date = new Date(data.date.seconds*1000);

    const [liked, setLiked] = useState(false);
    useEffect(() => {
        if(data.likes.includes(dbID))
            setLiked(true);
    }, [])

    const handleClick = () => {
        let arr = [...data.likes];
        liked ? arr = arr.filter(userID => userID!=dbID) : arr.push(dbID);

        axios.post("http://localhost:9000/forum/like?id="+msg.id, {
            newLikes: arr
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))

        setLiked(!liked);
        setDummy(!dummy);
    }

    return (
    <>
        <Card variant="outlined" sx={{width: 300, height: 200, margin:2}}>
            <Stack direction="row" spacing={3}>
                <Avatar alt={data.spotifyID} src={data.imageUrl} sx={{marginLeft:2, marginTop:2.5, width:45, height:45}}/>
                
                <Stack direction="column" sx={{pt: 1.5}}>
                <Typography sx={{fontWeight: 'bold', paddingTop: '1'}} variant="h5">{data.displayName}</Typography>
                <Typography>@{data.spotifyID}</Typography>
                </Stack>
            </Stack>

            <p></p>
            <Typography variant="h6">{data.text}</Typography>
            <Stack direction="row" spacing={.1} sx={{marginLeft: 2}}>
                {user ?
                <IconButton onClick={handleClick}>
                    {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </IconButton>
                : <IconButton disabled><FavoriteBorderIcon /></IconButton>}

                <Typography sx={{paddingTop: '2'}}>{data.likes.length}</Typography>
            </Stack>
            <Typography>{date.toDateString() + ' at ' + (date.toTimeString().split(" "))[0]}</Typography>
            
        </Card>
    </>
    )
}

export default Message;