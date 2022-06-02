import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useContext , useState} from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import axios from 'axios';
import Homepage from '../Homepage/Homepage';
const UserProfile = (props) => {
    const {user, setUser, dbID} = useContext(UserTokenContext)
    const [isUser, setIsUser] = useState(false);
    const userID = window.location.pathname.split('/')[2]

    useEffect(() => {
        axios.get('http://localhost:9000/users/')
        .then((res) => {
            res.data.result.forEach((u) => {
                if(u[0] === dbID){
                    setIsUser(true);
                }
            })
        });
    }, [user])
if(user)
  return (
      <>
        <Navbar />
        {isUser && 'isUser'}
        {userID}
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