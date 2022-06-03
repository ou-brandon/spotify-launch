import Box from '@mui/material/Box'

const Artist = (props) => {
    return (
    <>
      <Box padding={3} margin={2} >{props.artist.name}</Box>
    </>
    )
  }

  export default Artist;
