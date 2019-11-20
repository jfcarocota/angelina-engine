const http = require('http');
const fs = require('fs');
const express = require('express');

const app  = express();
const port = 3000;

app.use('/src', express.static('src'));

app.get('/',  (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('./hello-world.html', null, (error, data) => {
        if(error){
            res.writeHead(404);
            res.write('<h1>Page not found :( </h1>');
        }else{
            res.write(data);
        }
        res.end();
    });
});

app.listen(3000);