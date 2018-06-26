const express = require('express');
const app = express();
const port = 7002;
const request = require('request');



//app.use(express.json());
app.use(express.static('static'));

// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');

const routeJson = __dirname + '/data/' + 'repas.json';
const urlService = 'http://localhost:'+port+'/'+'liste';

app.get('/', function (req, res) {
    request(urlService, function (err, response, body) {
        if (err) {
            console.log(err);
        } else {
            const plat = JSON.parse(body);
            console.log(plat);
            res.render('index', {
                repas: plat
            });
        }
    })
  
});

app.get('/liste', (req, res) => {
    //    res.json(urlJson);
   res.sendFile(routeJson);
});

// start the server
app.listen(port,  function () {
    console.log('Démarrage du serveur sur =>  http://localhost:' + port);
});