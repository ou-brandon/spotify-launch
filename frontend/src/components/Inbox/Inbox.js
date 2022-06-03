import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { UserTokenContext } from '../Context/UserTokenContext';
import Navbar from '../Navbar/Navbar';
import { Typography, Box, Card } from '@mui/material';
import MessageInput from './MessageInput';
const Inbox = (props) => {
    const {user, dbID} = useContext(UserTokenContext);
    const [messages, setMessages] = useState([]);

    const timeToString = (time) => {
        return new Date(time * 1000).toLocaleTimeString("en-US");
    }
    const fetchMessages = async () => {
        await axios.get('http://localhost:9000/msg/info', {params: {dbID: dbID }})
        .then((res) => {res.data.result.sort(
            (a, b) => {
                let a1, a2, b1, b2;
                if(a[1] > a[2]){
                    a2 = a[1];
                    a1 = a[2];
                } else {
                    a1 = a[1];
                    a2 = a[2];
                }

                if(b[1] > b[2]){
                    b2 = b[1];
                    b1 = b[2];
                } else {
                    b1 = b[1];
                    b2 = b[2];
                }
                if(a1 + a2 === b1 + b2) {
                    const aTime = a[0].dateCreated.seconds
                    const bTime = b[0].dateCreated.seconds
                    if(aTime === bTime) return 0;
                    return aTime > bTime;
                }
                return a1 + a2 > b1 + b2 ? 1 : -1;
            });
            const groupedMessages = [];
            for(let i = 0; i < res.data.result.length; i++){
                if(i == 0 || (res.data.result[i][2] != res.data.result[i-1][2] && res.data.result[i][2] != res.data.result[i-1][2]) || 
                            res.data.result[i][1] != res.data.result[i-1][1] && res.data.result[i][1] != res.data.result[i-1][1] ){
                    groupedMessages.push([]);
                }
                groupedMessages[groupedMessages.length - 1].push(res.data.result[i]);
            }
            console.log('Grouped messages', groupedMessages);
            setMessages(groupedMessages);
        })
    }

    useEffect(() => {
        fetchMessages();
    }, [dbID])
  return (
    <>
        <Navbar />
        {messages.length}
        {messages.map((chat) => 
            <Card sx={{margin: '20px'}}>
                <Typography variant='h6'>Chat</Typography>
                {chat.map((msg) => {
                    return (
                        <Box>
                            <Typography variant='caption'>{msg[1]}:</Typography>
                            <Typography>{msg[0].text}</Typography>
                            <Typography variant='caption'>{timeToString(msg[0].dateCreated.seconds)}</Typography>
                        </Box>    
                    );
                })}
            </Card>
            
        )}
            
                
        
        
        <MessageInput fetchMessages={fetchMessages}/>
        
        
    </>
  );
}

export default Inbox