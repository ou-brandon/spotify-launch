import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar';

import UserTable from './UserTable';
const Users = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/users/')
        .then((res) => {console.log('Users', res.data.result); setUsers(res.data.result)});
    }, [props]);

  return (
    <>
        <Navbar/>
        <Typography variant='h4' sx={{marginTop: '1%'}}>Discover Users</Typography>
        <UserTable users={users}/>
    </>
  );
}

export default Users