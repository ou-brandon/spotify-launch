import { Card, Typography, Avatar, Stack } from '@mui/material'

const Message = (props) => {
    const {msg} = props;
    let date = new Date(msg.date.seconds*1000);

    return (
    <>
        <Card variant="outlined" sx={{width: 300, height: 200, margin:2}}>
            <Stack direction="row" spacing={3}>
                <Avatar alt={msg.spotifyID} src={msg.imageUrl} sx={{marginLeft:1.5, marginTop:2.5, width:45, height:45}}/>
                <Typography mt={2.5} sx={{fontWeight: 'bold'}} variant="h5">{msg.displayName}</Typography>
            </Stack>

            <p></p>
            <Typography>{date.toDateString() + ' at ' + (date.toTimeString().split(" "))[0]}</Typography>
            <Typography variant="h6">{msg.text}</Typography>
        </Card>
        {/* <p>{msg.displayName}: {msg.text}</p> */}
    </>
    )
}

export default Message;