import { Card, Typography, Avatar, Stack } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';

const Message = (props) => {
    const {dbID} = useContext(UserTokenContext);
    const {msg} = props;
    const data = msg.data;
    let date = new Date(data.date.seconds*1000);

    const [liked, setLiked] = useState(false);
    useEffect(() => {
        if(data.likes.includes(dbID))
            setLiked(true);
    }, [])

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
            <Typography>Likes: {data.likes.length}</Typography>
            <button>Like</button>
            <p></p>
            <Typography>{date.toDateString() + ' at ' + (date.toTimeString().split(" "))[0]}</Typography>
            
        </Card>
    </>
    )
}

export default Message;