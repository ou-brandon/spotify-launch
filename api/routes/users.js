var express = require('express');
var router = express.Router();
const db = require('../firebase.js')
const { getDocs, collection, getDoc, doc } = require('firebase/firestore')

router.get('/', async (req, res, next) => {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    users.push([doc.id, doc.data()]);
    //console.log(doc.id, doc.data());
  });
  //console.log('Users', users);
  res.json({result: users})
});

router.get('/:id', async (req, res, next) => {
  const querySnapshot = await getDoc(doc(db, "users", req.params.id))
  res.json({result: querySnapshot.data()})
})


module.exports = router;
