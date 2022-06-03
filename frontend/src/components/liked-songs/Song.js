import { Card, Typography, CardMedia } from '@mui/material'

const Song = (props) => {
    const trackInfo = props.song.track;
    return (
    <>
        <Card variant="outlined" sx={{width: 300, height: 300}}>
            <CardMedia
                component="img"
                height="70%"
                width="100%"
                image={trackInfo.album.images[0].url}
            />
            <Typography sx={{fontWeight: 'bold'}}>{trackInfo.name}</Typography>
            {trackInfo.artists.map(artist => <Typography sx={{lineHeight: 1.1}}>{artist.name}</Typography>)}
        </Card>
    </>
    )
}

export default Song;