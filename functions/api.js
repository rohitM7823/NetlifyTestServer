const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "status": true,
        "message": "Successful",
        "isTestSuccessful": "YES"
    });
});

router.get("/user", (req, res) => {
    res.json({
        "status": true,
        "message": "Successful",
        "name": "Rohit Manna"
    });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);