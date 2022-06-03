const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, Timestamp, updateDoc, doc} = require("firebase/firestore")

// post new message
router.post("/post", (req, res, next) => {
    addDoc(collection(db, "forum_posts"), {
        displayName: req.body.displayName,
        spotifyID: req.body.spotifyID,
        imageUrl: req.body.imageUrl,
        text: req.body.text,
        likes: [],
        date: Timestamp.fromDate(new Date()),
    })
    res.send("received");
})

// get messages
router.get("/info", async (req, res, next) => {
    let allDocData = [];
    const docs = await getDocs(collection(db, "forum_posts"))
    docs.forEach((doc) => allDocData.push({id: doc.id, data: doc.data()}))
    res.json({result: allDocData})
})

// like post
router.post("/like", (req, res, next) => {
    const postID = req.query.id;
    updateDoc(doc(db, "forum_posts", postID), {
        likes: req.body.newLikes
    })
})


module.exports = router