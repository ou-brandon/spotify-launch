import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Typography } from '@mui/material';

const Users = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/users/')
        .then((res) => {console.log('Users', res.data.result); setUsers(res.data.result)});
    }, [props]);

  return (
    <>
        <Typography variant='h4'>Discover Users</Typography>
        <Typography variant='h6'>We will need to make a table to display this. For now, every public user's bio is displayed</Typography>
        {users && users.map((user) => 
            <h4>{user[1].isPublic && user[1].bio}</h4>
        )}
    </>
  );
}

export default Users