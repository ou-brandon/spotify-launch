const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, Timestamp} = require("firebase/firestore")

// post
router.post("/post", (req, res, next) => {
    console.log(new Timestamp(req.body.date))
    addDoc(collection(db, "forum_posts"), {
        displayName: req.body.displayName,
        spotifyID: req.body.spotifyID,
        imageUrl: req.body.imageUrl,
        text: req.body.text,
        likes: 0,
        date: Timestamp.fromDate(new Date()),
    })
    res.send("received");
})

// get
router.get("/info", async (req, res, next) => {
    let allDocData = [];
    const docs = await getDocs(collection(db, "forum_posts"))
    docs.forEach((doc) => allDocData.push({id: doc.id, data: doc.data()}))
    res.json({result: allDocData})
})


module.exports = router