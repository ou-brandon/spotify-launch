import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const UserTable = (props) => {
  return (
    <TableContainer component={Paper} sx={{marginTop: '1%'}}>
          <Table area-label='simple-table' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align='center'><Typography variant='h6'>Username</Typography></TableCell>
                <TableCell><Typography variant='h6'>Bio</Typography></TableCell>
                <TableCell align='center'><Typography variant='h6'>Top Artists</Typography></TableCell>
                <TableCell align='center'><Typography variant='h6'>Top Songs</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users && props.users.map((user) => (
                <TableRow component={Link} to={`/profile/${user[1].spotifyID}`} key={user[1].spotifyID} sx={{  
                  '&:nth-of-type(odd)': {backgroundColor: '#d5e5ff'}, 
                  '&:nth-of-type(even)': {backgroundColor: '#eaf3ff'}, 
                  '&:last-child td, &:last-child th': {border: 0},
                  textDecoration: 'none'
                  }}>
                  <TableCell align='center'>{user[1].displayName}</TableCell>
                  <TableCell>{user[1].bio}</TableCell>
                  <TableCell align='center'>{user[1].topArtists}</TableCell>
                  <TableCell align='center'>{user[1].topSongs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
}

export default UserTable