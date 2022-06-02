import React from 'react'
import { Button, FormControl,  MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const MessageInput = () => {
    const [recipient, setRecipient] = useState("");
    const handleSelect = (event) => {
        setRecipient(event.target.value);
    }
    const handleSubmit = () => {
        
    }
  return (
    <>
        <Box>
            <FormControl fullwidth>
                <TextField 
                    select
                    value={recipient}
                    label="Recipient"
                    onChange={handleSelect}
                    sx={{minWidth: '300px', justifyContent: 'left'}}
                >
                    <MenuItem value={"A"}>Aaaaaaaaaaaaaaa</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C </MenuItem>

                </TextField>
            </FormControl>
        </Box>
        <Button variant='contained' onClick={handleSubmit}>Send</Button>
    </>
  )
}

export default MessageInput