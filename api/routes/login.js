var express = require('express');
var dotenv = require('dotenv').config();
var router = express.Router();
const request = require('request')
const SCOPES = 'user-top-read';

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('Start login');
    const CLIENT_ID = process.env.clientID;
    const REDIRECT_URI = "http://localhost:3000/home";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
<<<<<<< HEAD
=======
    const SCOPES = "user-library-read"

>>>>>>> 8b007f7f4ab4be044a07d3328b6e68dc90233269
    const logInReq = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;
    console.log('Response', logInReq);
    res.send(logInReq);
    console.log('Login link sent')
    /*
    request(logInReq, {json:true}, (err, response, body) => {
        console.log(body);
    });
    */
});

module.exports = router;
