console.log("Module.exports sendo carregado");
var app = require('express')();
app.set('view engine', 'ejs'); //engine do ejs
app.set('views' , './app/views'); //localização da pasta views

module.exports = function() {
   return app;
}
