import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';
import { Typography } from '@mui/material';
import MessageInput from './MessageInput';
const Inbox = (props) => {
    const {user, dbID} = useContext(UserTokenContext);
    const [messages, setMessages] = useState([]);


    

    useEffect(() => {
        axios.get('http://localhost:9000/msg/info', {params: {dbID: dbID }})
        .then((res) => setMessages(res.data.result))
    }, [dbID])

    useEffect(() => {
        //console.log(user.display_name);
        console.log(messages);
    }, [messages])
  return (
    <>
        <Navbar />
        {messages.map((msg) => (
            <div>
                <Typography variant='h6'>{msg[1]}:</Typography>
                <Typography variant='body'>{msg[0].text}</Typography>
            </div>
            
        ))}
        <MessageInput />
        
        
    </>
  );
}

export default Inbox