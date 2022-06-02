import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useContext , useState} from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import axios from 'axios';
import Homepage from '../Homepage/Homepage';
import { Typography } from '@mui/material';
const UserProfile = (props) => {
    const {user, setUser, dbID} = useContext(UserTokenContext)
    const [isUser, setIsUser] = useState(false);
    const userID = window.location.pathname.split('/')[2]
    const [currUser, setCurrUser] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:9000/users/')
        .then((res) => {
            res.data.result.forEach((u) => {
                if(u[1].spotifyID === userID){   
                    if(u[0] === dbID){
                        setIsUser(true);
                    }         
                    setCurrUser(u)
                }
            })
        });
    }, [user])

    if(user && currUser)
        //If user is same user, allow edit + remove access
        return (
            <>
                <Navbar />
                <Typography sx={{marginTop: '1%'}} variant='h3'>{isUser ? 'My' : currUser[1].displayName + '\'s'} Profile</Typography>
            </>
        )
    else{
        return (
            <>
                <Homepage />
            </>
        );
    }
}

export default UserProfile