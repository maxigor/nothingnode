var express = require('express');
var app = express();



app.get('/produtos', function(req, res){
   res.render("produtos/lista.ejs");
})

app.listen(3000,function(){
   console.log("Servidor rodando");
})
