var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.send("Tô funcionando! já vale um 6!!");
});

app.get("/funcao1", function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Alguém passou por aqui");
    res.send("CONECTOU!! É nota 8! Vamos seguir...");     
});

app.post("/funcao2", function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Alguém passou por aqui");

    let n1 = parseInt(req.body.n1);
    let n2 = parseInt(req.body.n2);
    let total = n1 + n2;

    res.send(total);     
});

app.listen(port, () => {
    console.log(`Servidor Rodante na porta ${port}`)
});