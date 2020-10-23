const request = require('request');

const url = 'http://api.weatherapi.com/v1/current.json?key=7e62d83f263a46e3a2232805202310&q=Kolkata'
//api key = 7e62d83f263a46e3a2232805202310

request({ url: url, json: true }, (error, response) => {
    //const data = JSON.parse(response.body);
    //console.log(data.current);
    console.log(response.body.current)
})