var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const cors = require('cors');

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
    console.log("Alguém passou por aqui");
    res.send("CONECTOU!! É nota 8! Vamos seguir...");     
});

app.post("/funcao2", function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Alguém passou por aqui");
    const body = req.body
    var num = parseInt(body.n3)
    if(num >= 0)
    {
        res.send("Sua soma foi identificada pelo back e é um numero positivo")
    }
    else
    {
        res.send("Sua soma foi identificada pelo back e é um numero negativo")
    }   
});

app.listen(port, () => {
    console.log(`Servidor Rodante na porta ${port}`)
});