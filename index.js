const express = require("express");

const urlRoute = require("./routes/url")
const { connectTOMongoDB } = require("./connection")
const URL = require('./models/url')
const app = express();
const PORT = 8001;

app.use(express.json());

connectTOMongoDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("MongoDB Connected");
})


app.use("/url", urlRoute);          //jab baat /url pr aaye, you have to use urlRoute

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                },
            },
        },
    );
    res.redirect(entry.redirectURL);
     
});

app.listen(PORT, () => { console.log(`The app started at ${PORT}`) });