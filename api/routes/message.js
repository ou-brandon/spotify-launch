const express = require("express")
const router = express.Router()
const db = require("../firebase")
const axios = require('axios');
const {getDocs, collection, addDoc, Timestamp, orderBy, query, onSnapshot} = require("firebase/firestore")

// post
router.post("/post", (req, res, next) => {
    console.log(req.body);
    console.log(new Timestamp(req.body.date))
    addDoc(collection(db, "messages"), {
        receiver: req.body.receiverID,
        sender: req.body.senderID,
        text: req.body.text,
        dateCreated: Timestamp.fromDate(new Date()),
    })

    .catch((err) => console.log(err));
    
})

// get
router.get("/info", async (req, res, next) => {
    const allDocData = [];
    let allUsers = [];
    const users = axios.get('http://localhost:9000/users/')
    .then((response) => {
        allUsers = (response.data.result);
    })
    .then( async () => await getDocs(collection(db, 'messages')))
    .then( async (docs) => {
        docs.forEach(document => {
            if(document.data().receiver === req.query.dbID || document.data().sender === req.query.dbID){
                let receiverName = "";
                let senderName = "";
                for(let i = 0; i < allUsers.length; i++){
                    
                    if(allUsers[i][0] === document.data().receiver){
                        receiverName = allUsers[i][1].displayName;

                    }
                    if(allUsers[i][0] === document.data().sender){
                        senderName = allUsers[i][1].displayName;

                    }
                }
                allDocData.push([document.data(), senderName, receiverName]);   
            }
        })
    })
    .then(() => {
        res.json({result: allDocData})
    })
    
    
})


module.exports = router