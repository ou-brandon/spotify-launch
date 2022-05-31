var express = require('express');
var router = express.Router();
const db = require('../firebase.js')
const { getDocs, collection } = require('firebase/firestore')

router.get('/', async (req, res, next) => {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    users.push([doc.id, doc.data()]);
    console.log(doc.id, doc.data());
  });
  console.log('Users', users);
  res.json({result: users})
});



module.exports = router;
