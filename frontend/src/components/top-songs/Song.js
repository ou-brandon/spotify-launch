import { Card, Typography, CardMedia } from '@mui/material'

const Song = (props) => {
    const trackInfo = props.song;
    console.log("trackInfo", trackInfo);
    return (
        <div>
    <>
        {/* <h3>{trackInfo.name}</h3>
        <p>{trackInfo.artists.map(artist => artist.name)}</p>
        {trackInfo.album.images.length ? <img width="30%" src={trackInfo.album.images[0].url} /> : null} */}
        <Card variant="outlined" sx={{width: 300, height: 300}}>
            <CardMedia
                component="img"
                height="80%"
                width="80%"
                image={trackInfo.album.images[0].url}
            />
            <Typography sx={{fontWeight: 'bold'}}>{trackInfo.name}</Typography>
            {trackInfo.artists.map(artist => <Typography>{artist.name}</Typography>)}
        </Card>
    </>
    </div>
    )
}

export default Song;