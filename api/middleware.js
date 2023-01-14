/* This is importing the express, router and jwt modules. */
const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

/* This is a middleware function that is used to verify the token. */
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, "SECRET", (err, user) => {
            if (err) {
                return res.status(403).send({ msg: "Token is not valid" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).send({ msg: "No token , authorization denied" });
    }
};