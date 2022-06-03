import React from 'react'
import { Button, InputLabel, FormControl,  Menu,  MenuItem, TextField, Typography, Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect, useContext, useRef, ignore } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import axios from 'axios';

const MessageInput = (props) => {
    const [users, setUsers] = useState([]);
    const [usernames, setUsernames] = useState([]);
    const recipientRef = useRef();
    const textRef = useRef();
    const {user, dbID} = useContext(UserTokenContext);

    useEffect(() => {
        const getUsers = async () => {
            axios.get('http://localhost:9000/users/')
            .then((res) => {console.log('Users', res.data.result); setUsers(res.data.result); return res.data.result})
            .then( (results) => {
                const allUsernames = [];
                results.forEach((u) => {
                    if(u[1].displayName !== user.display_name){
                        allUsernames.push(u[1].displayName)
                    }
                })
                setUsernames(allUsernames)
            })
            .then(() => console.log('usernames', usernames))
        }
        getUsers();

    }, [user]);

    const handleSubmit = async () => {
        console.log(recipientRef.current.value);
        let receiver;
        users.forEach((u) => {
            if(u[1].displayName === recipientRef.current.value){
                axios.post("http://localhost:9000/msg/post", {
                    receiverID: u[0],
                    senderID: dbID,
                    text: textRef.current.value
                })
                .catch((err) => console.log(err))
                props.fetchMessages();
                return;
            }
        })
    }

  return (
    <>
        <Box>
            <FormControl fullwidth>
                <Autocomplete
                    disablePortal
                    id="option-select"
                    options={usernames}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField inputRef={recipientRef} {...params} label="Select a Recipient" />}
                />
            </FormControl>
            <br></br>
            <TextField multiline InputProps={{style: {alignContent: 'flex-start'}}} sx={{minWidth: 500}} variant='outlined' inputRef={textRef} label='Message text' />
        </Box>
        <Button variant='contained' onClick={handleSubmit}>Send</Button>
    </>
  )
}

export default MessageInput