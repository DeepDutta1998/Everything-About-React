const express = require('express');
const res = require('express/lib/response');
const dotenv = require('dotenv');
const req = require('express/lib/request');
const bodyPaser = require('body-parser');
const cors = require('cors');
const router = require('./router');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyPaser.json());
app.use(router);

/*
app.get("/", (req, res) => res.send('hello World'));
app.post("/login", (req, res) => {
    const uid = req.body.uid;
    const pwd = req.body.pwd;

    if (uid === 'deepinslg@gmail.com' && pwd === '12345678')
            res.send("Welcome Deep");
    else
            res.send('Invalid UID or PWD');
})
*/


app.listen(process.env.SERVER_PORT, () => console.log(`Server started successfuly at ${process.env.SERVER_PORT}!`));
