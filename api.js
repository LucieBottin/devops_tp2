const express = require('express')
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const axios = require("axios");
const API_KEY = process.argv[2];

app.get('/', function (req, res, next) {
    const lat = "5.902785";
    const lon = "102.754175";
    //http://api.openweathermap.org/data/2.5/weather?lat=$LAT&lon=$LONG&appid=$API_KEY
    axios
        .get("http://api.openweathermap.org/data/2.5/weather", { params: { lat: lat, lon: lon, appid: API_KEY } })
        .then(response => {
            console.log(lat, lon, API_KEY);
            res.send(response.data)
        })
        .catch(err => {
            console.log(lat, lon, API_KEY);
            res.send({ err }) // <= send error
        })
});

console.log(`==> API listening on port ${port}`)
app.listen(port);
