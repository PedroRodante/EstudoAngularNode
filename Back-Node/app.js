var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const cors = require('cors');
let n3 = 0;

app.use(cors({
    origin: "http://localhost:4200"
  }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.send("Tô funcionando! já vale um 6!!");
});

app.get("/funcao1", function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Alguém passou na função 1!");
    res.send("CONECTOU!! Só isso aqui já um 8 em!? Vamos seguir...");     
});

app.post("/funcao2", function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Alguém passou na função 2");
    let n1 = parseInt(req.body.n1);
    let n2 = parseInt(req.body.n2);
    n3 = n1 + n2;
    res.send(`O resultado é ${n3}!`);
});

app.get("/funcao3", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("Alguém passou na função 3a!");
    res.send(`Foi ${n3}!`);
});

app.post("/funcao3", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("Alguém passou na função 3b!");
    n3 = 0;
    res.send(`Pronto! Agora o valor salvo no servidor é ${n3}.`);
});

app.listen(port, () => {
    console.log(`Servidor Rodante na porta ${port}`)
});