import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';

const Users = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/users/')
        .then((res) => {console.log('Users', res.data.result); setUsers(res.data.result)});
    }, [props]);

  return (
    <>
        <Navbar/>
        <Typography variant='h4'>Discover Users</Typography>
        <TableContainer component={Paper} sx={{}}>
          <Table area-label='simple-table' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant='h6'>Username</Typography></TableCell>
                <TableCell><Typography variant='h6'>Bio</Typography></TableCell>
                <TableCell><Typography variant='h6'>Top Artists</Typography></TableCell>
                <TableCell align='center'><Typography variant='h6'>Top Songs</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user) => (
                <TableRow key={user[1].spotifyID} sx={{  
                  '&:nth-of-type(odd)': {backgroundColor: 'lightskyblue'}, 
                  '&:last-child td, &:last-child th': {border: 0}
                  }}>
                  <TableCell>{user[1].displayName}</TableCell>
                  <TableCell>{user[1].bio}</TableCell>
                  <TableCell>{user[1].topArtists}</TableCell>
                  <TableCell align='center'>{user[1].topSongs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}

export default Users