const express = require('express');
const app = express();
const fs = require('fs');
const figlet = require('figlet');
const port = 8000;

app.use('/src', express.static('src'));
app.use('/images', express.static('images'));

app.get('/',  (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('./index.html', null, (error, data) => {
        if(error){
            res.writeHead(404);
            res.write('<h1>Page not found :( </h1>');
        }else{
            res.write(data);
        }
        res.end();
    });
});

app.listen(port, 
    figlet('Angelina Engine', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(`Server listening port: ${port}\n${data}`)
    })    
);

/*app.listen(port, ()=> console.log(
    `server on port:${port}\n`
));*/