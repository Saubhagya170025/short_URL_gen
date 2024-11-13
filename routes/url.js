const express = require("express");

const {handleGenerateNewShortURL, handleGetAnalytics} = require("../controllers/url")    //this is the function that we have imported from controllers

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);


module.exports = router;