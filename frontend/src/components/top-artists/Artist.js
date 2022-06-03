import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
const Artist = (props) => {
    return (
    <>
      <Box padding={1} margin={2} >
        <Typography variant='h6'>{props.artist.name}</Typography>
      </Box>
    </>
    )
  }

  export default Artist;
