var express = require('express');
var server = express();
var request = require ('request');
var port = "6002";

server.use(express.static('static'));

server.set('view engine', 'ejs');

server.get('/', function (req, res) {
    getrepas(res);   
});


function getrepas(res){
    var repas = "Repas 1";
    var entrymeal = "Salade verte et tomate";
    var plat = "Pâte carbonnara";
    var drink1 = "Jus d'orange";
    var drink2 = "Jus multifruit";
    var drink3 = "Soda";
    res.render('index', {
        repas: repas,
        entrymeal: entrymeal,
        drink1: drink1,
        plat: plat,
        drink2: drink2,
        drink3: drink3
    });
}


server.listen(port, function(){
    console.log('the port is on')
});